import React, { useState } from 'react';
import { Grid, Select } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS, GET_ALL_EPISODES } from '@/graphql/query';
import MyCard from './Card';
import classes from './main.module.css';

const randomList = (len, arr = []) => {
  const randomVal = Math.floor(Math.random() * len);
  const temp = [...arr];
  if (temp.length === len) return temp;
  if (temp.length < len) {
    if (!(temp.length > 0 && temp.some((item) => item === randomVal))) {
      temp.push(randomVal);
    }
    return randomList(len, temp);
  }
};

/**
 * Ref
 * Card: https://mantine.dev/core/card/
 * Image: https://mantine.dev/core/image/
 * Dialog: https://mantine.dev/core/dialog/
 *
 * Renders Main component
 * @constructor
 */
export function Main() {
  const [selectedEp, setSelectedEp] = useState('');

  const { loading, error, data } = useQuery(GET_ALL_EPISODES);
  const selectDropdownData = [];

  if (data) {
    if (data?.episodes?.results) {
      data?.episodes?.results.forEach((item: any) => {
        selectDropdownData.push({
          value: item?.id,
          label: item?.name,
        });
      });
    }
  }

  const {
    loading: loading2,
    error: error2,
    data: epChars,
  } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      episodeId: selectedEp,
    },
    skip: !selectedEp,
  });

  if (loading || loading2) return 'Loading...';

  if (error || error2) return `Error! ${error.message}`;

  const handleSelect = (value: string) => setSelectedEp(value);

  const randomChar = (allChars) => {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    const randomCh = allChars[randomIndex];
    if (
      randomCh?.name.toLowerCase().startsWith('rick') ||
      randomCh?.name.toLowerCase().startsWith('morty')
    )
      return randomChar(allChars);
    return randomCh;
  };

  let threeChars = [];
  if (epChars?.episode?.characters) {
    threeChars = [
      ...epChars?.episode?.characters.filter((item) => {
        if (
          item?.name.toLowerCase().startsWith('rick') ||
          item?.name.toLowerCase().startsWith('morty')
        )
          return item;
      }),
      randomChar(epChars?.episode?.characters),
    ];
  }

  const list = [randomList(3), randomList(3), randomList(3)];

  console.log('list >>', list);
  console.log('threeChars >>', threeChars);

  return (
    <main className={classes.main}>
      <Select
        data={selectDropdownData}
        value={selectedEp}
        onChange={handleSelect}
      />

      {threeChars.length > 0 && (
        <Grid>
          {list
            .map((item) =>
              item.map((item) => (
                <Grid.Col span={4}>
                  <MyCard char={threeChars[item]} />
                </Grid.Col>
              )),
            )
            .flat()}
        </Grid>
      )}

      {/* <div className={classes.characters}>
        {epChars?.episode?.characters &&
          Array.isArray(epChars?.episode?.characters) &&
          epChars?.episode?.characters.map((chars) => (
            
          ))}
      </div> */}
    </main>
  );
}
