import { gql, useQuery } from '@apollo/client';

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

export const useDataStore = () => {
  const {
    data,
    loading,
  }: { data: EpisodeResponse | undefined; loading: boolean } = useQuery(gql`
    query Episodes($page: Int, $filter: FilterEpisode) {
      episodes(page: $page, filter: $filter) {
        results {
          id
          name
          characters {
            id
            name
            image
          }
        }
      }
    }
  `);

  return { data, loading };
};
