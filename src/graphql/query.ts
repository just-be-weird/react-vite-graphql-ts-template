import { gql } from '@apollo/client';
export const GET_ALL_EPISODES = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        name
      }
    }
  }
`;

export interface Episode {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  image: string;
  name: string;
}

type EpisodeData = {
  results: Episode[];
};
export type EpisodeResponse = {
  episodes: EpisodeData;
};
export type CharacterResponse = {
  episode: {
    characters: Character[];
  };
};

export const GET_ALL_CHARACTERS = gql`
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
