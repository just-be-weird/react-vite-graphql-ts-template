import React, { useState } from 'react';
import { Card, Image, Select } from '@mantine/core';
import cx from 'clsx';
import classes from './main.module.css';
import { useQuery } from '@apollo/client';
import {
  Character,
  CharacterResponse,
  EpisodeResponse,
  GET_ALL_CHARACTERS,
  GET_ALL_EPISODES,
} from '@/graphql/query';

/**
 * @desc Component API Reference
 * Select: https://mantine.dev/core/select/#data-formats
 * Card: https://mantine.dev/core/card/#usage
 * Image: https://mantine.dev/core/image/
 * Dialog: https://mantine.dev/core/dialog/
 */

/**
 * Renders Main component
 * @constructor
 */
export function Main() {
  const [episode, setEpisode] = useState('');
  const {
    data,
    loading,
  }: { data: EpisodeResponse | undefined; loading: boolean } =
    useQuery(GET_ALL_EPISODES);
  const {
    data: charsData,
    loading: loadingChars,
  }: { data: CharacterResponse | undefined; loading: boolean } = useQuery(
    GET_ALL_CHARACTERS,
    {
      variables: {
        episodeId: episode,
      },
      skip: !episode,
    },
  );
  let rickAndMorty: Character[] = [];
  const handleSelect = (value: string) => {
    setEpisode(value);
  };

  const isRickNMorty = (char: Character) =>
    char.name.toLowerCase().includes('morty') ||
    char.name.toLowerCase().includes('rick');
  const getCharsForGrid = (chars: Character[]): Character[] => {
    if (!rickAndMorty.length) {
      let i = 0;
      while (i < chars.length) {
        if (isRickNMorty(chars[i])) {
          rickAndMorty.push(chars[i]);
        }

        if (rickAndMorty.length === 2) {
          break;
        }
        i = i + 1;
      }
    }

    const lastChar = chars.find((char) => !isRickNMorty(char)) as Character;

    return [...rickAndMorty, lastChar];
  };
  const randomize = (list: Character[]) => {
      const shuffledArray = [...list];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
  };

  console.log(
    Array(3)
      .fill(getCharsForGrid(charsData?.episode?.characters ?? []).slice())
      .map((i) => randomize(i)),
  );

  return (
    <main className={classes.main}>
      {/* your code */}
      <Select
        disabled={loading}
        data={data?.episodes?.results?.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
        onChange={handleSelect}
      />
      <Card className={cx(classes.box)} radius='md' shadow='md'>
        <Image
          radius='md'
          h='auto'
          fit='contain'
          src='https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
        />
      </Card>
    </main>
  );
}
