import React, { useEffect, useState } from 'react';
import { Grid, Select, Card, Image, Text, Dialog } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQuery } from '@apollo/client';
import cx from 'clsx';
import { GET_ALL_CHARACTERS, GET_ALL_EPISODES } from '@/graphql/query';
import classes from './main.module.css';

/*
Just for the Codeshare I'm merging the MyCard component here in the index.tsx file itself.
*/

// MyCard component
const MyCard = ({ id, character, selectedCards, handleClick }) => (
  <Card
    className={cx(classes.box)}
    radius='md'
    shadow='md'
    onClick={() => handleClick(id)}
  >
    {console.log('selectedCards.length >>', selectedCards.length)}
    {selectedCards && selectedCards.some((item: any) => item === id) ? (
      <>
        <Image radius='md' h='auto' fit='contain' src={character?.image} />
        <Text fw={500}>{character?.name}</Text>
      </>
    ) : null}
  </Card>
);

// Generate random array of given length with value of 0 to given length (excl.)
const RandomList: any = (len: number, arr: Array<any> = []) => {
  const randomVal: number = Math.floor(Math.random() * len);
  const temp = [...arr];
  if (temp.length < len) {
    if (!(temp.length > 0 && temp.some((item) => item === randomVal))) {
      temp.push(randomVal);
    }
    return RandomList(len, temp);
  }
  return temp;
};

// Generate one random character other than Rick & Morty
const RandomChar: any = (allChars: Array<any>) => {
  const randomIndex = Math.floor(Math.random() * allChars.length);
  const randomCh = allChars[randomIndex];
  if (
    randomCh?.name.toLowerCase().startsWith('rick') ||
    randomCh?.name.toLowerCase().startsWith('morty')
  ) {
    return RandomChar(allChars);
  }
  return randomCh;
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
  const [randomizedArr, setRandomizedArr] = useState([]);
  const [threeChars, setThreeChars] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isMatched, setMatched] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);

  const { loading, error, data } = useQuery(GET_ALL_EPISODES);
  const selectDropdownData: any = [];

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

  useEffect(() => {
    if (selectedEp) {
      setSelectedCards([]);
      setRandomizedArr([]);
      setThreeChars([]);
    }
  }, [selectedEp]);

  useEffect(() => {
    const episodeCharacters = epChars?.episode?.characters;
    if (episodeCharacters) {
      const threeCharsArr: any = [
        ...epChars.episode.characters.filter(
          (item: any) =>
            item?.name.toLowerCase().startsWith('rick') ||
            item?.name.toLowerCase().startsWith('morty'),
        ),
        RandomChar(episodeCharacters),
      ];
      const list: any = [RandomList(3), RandomList(3), RandomList(3)];
      setThreeChars(threeCharsArr);
      setRandomizedArr(list);
    }
  }, [epChars]);

  useEffect(() => {
    if (
      selectedCards &&
      Array.isArray(selectedCards) &&
      selectedCards.length === 2
    ) {
      const split0 = selectedCards[0].split('-');
      const split1 = selectedCards[1].split('-');
      const card0 =
        randomizedArr[parseInt(split0[0], 10)][parseInt(split0[1], 10)];
      const card1 =
        randomizedArr[parseInt(split1[0], 10)][parseInt(split1[1], 10)];
      if (card0 === card1) setMatched(true);

      // Opening Dialog
      open();

      if (card0 !== card1) {
        // Clearing out after 2 seconds
        setTimeout(() => {
          close();
          setSelectedCards([]);
        }, 2000);
      } else {
        // Closing only Dialog
        setTimeout(() => {
          close();
        }, 2000);
      }
    }
  }, [selectedCards]);

  const handleSelect = (value: string) => setSelectedEp(value);

  const handleCardClick = (cardCoordinates: any) => {
    if (selectedCards.length <= 1) {
      if (!selectedCards.some((item) => item === cardCoordinates)) {
        const tempArr = [...selectedCards];
        tempArr.push(cardCoordinates);
        setSelectedCards(tempArr);
      }
    }
  };

  if (loading) return 'Loading...';

  if (error || error2) return `Error! ${error?.message}`;

  return (
    <main className={classes.main}>
      <Select
        data={selectDropdownData}
        value={selectedEp}
        onChange={handleSelect}
      />

      {loading2 ? (
        'Fetching Characters of the selected episode'
      ) : (
        <div className={classes.characters}>
          {threeChars.length > 0 && (
            <Grid>
              {randomizedArr
                .map((item1: any, index1: any) =>
                  item1.map((item: any, index: any) => (
                    <Grid.Col span={4} key={`${index1}-${index}`}>
                      <MyCard
                        id={`${index1}-${index}`}
                        character={threeChars[item]}
                        selectedCards={selectedCards}
                        handleClick={handleCardClick}
                      />
                    </Grid.Col>
                  )),
                )
                .flat()}
            </Grid>
          )}
        </div>
      )}

      <Dialog opened={opened} onClose={close} size='lg' radius='md'>
        <Text size='sm' mb='xs' fw={500}>
          {selectedCards.length > 1 && isMatched
            ? 'You Matched!!'
            : 'You Lose!'}
        </Text>
      </Dialog>
    </main>
  );
}
