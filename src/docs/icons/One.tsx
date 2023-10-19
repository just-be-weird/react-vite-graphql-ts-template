import { gql, useQuery } from '@apollo/client';
import React, { ReactElement, useMemo, useState } from 'react';
import { Alert, Dialog, Grid, Loader, Select, Text } from '@mantine/core';
import { IconClick } from '@tabler/icons-react';
import { Card } from '@/components/Shared';
import { useDisclosure } from '@mantine/hooks';

const randomize = (list: Character[]) => {
  const shuffledArray = [...list];
  // Fisher Y Algo for shuffling 1D array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const isRickNMorty = (char: SelectedCharacter) => {
  const name = (char?.name ?? '').toLowerCase();
  return name.includes('morty') || name.includes('rick') ? char : null;
};

type SelectedCharacter = Character & { foundPair?: boolean };

export const RickNMortyGraph = (): ReactElement => {
  const [opened, { open, close }] = useDisclosure(false);
  const [count, setCount] = useState(0);
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
  const [characters, setCharacters] = useState<SelectedCharacter[]>([]);

  const handleSelect = (value: string) => {
    setEpisode(value);
    setCharacters([]);
    setCount(0);
    close();
  };

  const handleCardClick = (cc: Character, i: number) => {
    let updates = [...characters].map((c) => ({
      ...c,
      foundPair: characters.length > 1 && c.name === cc.name,
    }));
    const lastCharacter = updates[updates.length - 1];
    const isCurrentCharRnM = !!isRickNMorty(cc);
    const isLastCharRnM = !!isRickNMorty(lastCharacter);
    updates = [
      ...updates,
      { ...cc, id: cc.id + i, foundPair: lastCharacter?.name === cc.name },
    ];

    const clearLastSelection =
      updates.length >= 1 &&
      !(
        isCurrentCharRnM ||
        (isLastCharRnM && updates[updates.length - 1].foundPair)
      );

    // select current character to make it visible
    setCharacters(updates);
    // we found a rick or morty pair then show you won!
    if (updates.filter((c) => isRickNMorty(c)).length === 4) {
      open(); // show message
      setTimeout(() => {
        close(); // close message after 1sec
        setCharacters([]); // reset cards
        setCount(0);
      }, 2000);
    } else {
      setCount((pc) => pc + 1);
    }

    if (clearLastSelection) {
      // else pop out prev selected character after 1 sec
      setTimeout(() => {
        if (!lastCharacter?.foundPair) {
          updates.pop(); // removes last character
        }
        setCharacters(updates);
      }, 1000);
    }
  };

  const gridData = useMemo(() => {
    const arr = Array(2)
      .fill(charsData?.episode?.characters?.slice(0, 5))
      .flat(); // 10 chars
    arr.pop(); // 10 -1 => 9 chars
    return randomize(arr);
  }, [charsData]);
  const gridNodes = gridData.flat().filter(Boolean); // 3 * 3 grid

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
                selected={characters.map((c) => c.id).includes(row.id + i)}
              />
            );
          })}
        </Grid>
      ) : loadingChars ? (
        <Loader color='yellow' />
      ) : (
        <Alert
          variant='light'
          color='yellow'
          title='No charaters to show'
          icon={<IconClick />}
        >
          Please select a episode from dropdown to generate the grid.
        </Alert>
      )}
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        radius='md'
        bg='green'
      >
        <Text size='sm' fw={500}>
          You found rick and morty in{' '}
          {count === 1 ? '1 attempt' : `${count} attempts`}!
        </Text>
      </Dialog>
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
