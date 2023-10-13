import { gql } from '@apollo/client';

export const GET_ALL_EPISODES = gql`
query Query {
    episodes {
      results {
        id
        name
      }
    }
  }  
`;

export const GET_ALL_CHARACTERS = gql`
query Query($episodeId: ID!) {
    episode(id: $episodeId) {
      characters {
        id
        image
        name
      }
    }
  }  
`;
