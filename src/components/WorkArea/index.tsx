import React from 'react';
import cx from 'clsx';
import classes from './workArea.module.css';
import { IconStarFilled, IconStar } from '@tabler/icons-react';
import { Button, Flex } from '@mantine/core';

/**
 * @desc Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  return (
    <div className={classes.workArea}>
      <Flex gap='sm' pt='md'>
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
