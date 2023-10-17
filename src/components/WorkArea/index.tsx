import React from 'react';
// import { Card } from '@/components/Shared';
// import { Grid } from '@mantine/core';
// import cx from 'clsx';
// import classes from './workarea.module.css';
// import { GET_ALL_EPISODES } from '@/api/graphql';
// import { GET_ALL_EPISODES } from '@/api/rest';

const dummyRow = {
  __typename: 'Character',
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
};
/**
 * GraphQL API
 * @see https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/explorer
 *
 * Rest API
 * @see https://rickandmortyapi.com/documentation/#rest
 *
 * UI component API Reference
 * @see https://mantine.dev
 */
/**
 * @desc Renders WorkArea component
 * @constructor
 *
 */
export function WorkArea() {
  // const { data, loading } = useQuery(GET_ALL_EPISODES);

  return (
    <div>
      {/* your code */}
      {/*<Select*/}
      {/*  disabled={loading}*/}
      {/*  data={[]}*/}
      {/*  onChange={}*/}
      {/*/>*/}
      {/*<Grid>*/}
      {/*  <Card loading={false} row={dummyRow} onClick={() => {}} selected={true} />*/}
      {/*</Grid>*/}
    </div>
  );
}
