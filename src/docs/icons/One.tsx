import { gql, useQuery } from '@apollo/client';
import React, { ReactElement, useMemo, useState } from 'react';
import { Alert, Grid, Loader, Select } from '@mantine/core';
import { IconClick } from '@tabler/icons-react';
import { Card } from '@/components/Shared';

export const RickNMortyGraph = (): ReactElement => {
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

  const [pair, setPair] = useState<
    Record<1 | 2, Character | null> & { found: string[] }
  >({
    1: null,
    2: null,
    found: [],
  });
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
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleCardClick = (cc: Character, i: number) => {
    if (!pair['1']) {
      setPair((pp) => ({
        ...pp,
        '1': { ...cc, id: cc.id + i },
        found: [...pp.found, cc.id + i],
      }));
    } else {
      setPair((pp) => ({
        ...pp,
        '2': { ...cc, id: cc.id + i },
        found: [...pp.found, cc.id + i],
      }));
    }

    if (pair['1'] && pair['2']) {
      setTimeout(() => {
        const sameChars = pair['1']?.name === pair['2']?.name;
        const rickNMorty =
          pair['1']?.name === 'Morty Smith' &&
          pair['2']?.name === 'Rick Sanchez';

        if ((sameChars && !rickNMorty) || !(!sameChars && rickNMorty)) {
          setPair((pp) => ({
            1: null,
            2: null,
            found: [], //...pp.found
          }));
        } else {
          setPair((pp) => ({
            1: null,
            2: null,
            found: [...pp.found],
          }));
        }
      }, 1000);
    }
  };

  const gridData = useMemo(
    () =>
      Array(3)
        .fill(getCharsForGrid(charsData?.episode?.characters ?? []).slice())
        .map((i) => randomize(i)),
    [charsData],
  );
  const gridNodes = gridData.flat().filter(Boolean);

  return (
    <>
      <Select
        mb='lg'
        mt='sm'
        w='60%'
        disabled={loading}
        data={data?.episodes?.results?.map((ep, i) => ({
          value: ep.id,
          label: `${i + 1}. ${ep.name}`,
        }))}
        placeholder={'Select a episode'}
        onChange={handleSelect}
      />
      {gridNodes.length ? (
        <Grid>
          {gridNodes.flat().map((row, i) => {
            return (
              <Card
                key={row?.id + i}
                loading={loadingChars}
                onClick={() => handleCardClick(row, i)}
                row={row}
                selected={pair.found.includes(row.id + i)}
              />
            );
          })}
        </Grid>
      ) : loadingChars ? (
        <Loader color='blue' />
      ) : (
        <Alert
          variant='light'
          color='red'
          title='No charaters to show'
          icon={<IconClick />}
        >
          Please select a episode from dropdown to generate the grid.
        </Alert>
      )}
    </>
  );
};

const GET_ALL_EPISODES = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        name
      }
    }
  }
`;

interface Episode {
  id: string;
  name: string;
}

interface Character {
  id: string;
  image: string;
  name: string;
}

type EpisodeData = {
  results: Episode[];
};
type EpisodeResponse = {
  episodes: EpisodeData;
};
type CharacterResponse = {
  episode: {
    characters: Character[];
  };
};

const GET_ALL_CHARACTERS = gql`
  query Episode($episodeId: ID!) {
    episode(id: $episodeId) {
      characters {
        id
        image
        name
      }
    }
  }
`;
