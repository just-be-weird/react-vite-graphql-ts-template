import React from 'react';
// import cx from 'clsx';
import classes from './workArea.module.css';
import {
  IconStarFilled,
  IconStar,
  //   IconMinus,
  //   IconPlus
} from '@tabler/icons-react';
import { Button, Flex } from '@mantine/core';
// import { NavLink } from '@mantine/core';
/**
 * GraphQL API
 *  @see https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/explorer
 *
 *  Rest API
 *  @see https://rickandmortyapi.com/documentation/#rest
 */
/**
 * @desc Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  // const { data } = useData();

  return (
    <div className={classes.workArea}>
      <Flex gap="sm" pt="md">
        <Button>
          <IconStarFilled /> <IconStar />
        </Button>
        <Button>
          <IconStarFilled /> <IconStar />
        </Button>{' '}
        <Button>
          <IconStarFilled /> <IconStar />
        </Button>{' '}
        <Button>
          <IconStarFilled /> <IconStar />
        </Button>{' '}
        <Button>
          <IconStarFilled /> <IconStar />
        </Button>
      </Flex>
    </div>
  );
}
