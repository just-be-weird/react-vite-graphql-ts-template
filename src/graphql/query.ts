import { gql } from '@apollo/client';

export const GET_ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      totalCount
      edges {
        node {
          episodeID
          id
          title
          planetConnection {
            edges {
              node {
                id
                name
              }
              cursor
            }
            totalCount
          }
        }
        cursor
      }
    }
  }
`;
