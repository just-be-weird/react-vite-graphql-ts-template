import { gql, useQuery } from '@apollo/client';

interface Episode {}

interface Character {}

type EpisodeData = {};
type EpisodeResponse = {};
type CharacterResponse = {};

export const useDataStore = () => {
  return { data: {}, loading: false };
};
