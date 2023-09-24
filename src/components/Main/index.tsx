import React from 'react';
import classes from './main.module.css';
import cx from 'clsx';
import { Card } from '@mantine/core';

type Props = {};

export function Main(_props: Props) {
  return (
    <main className={classes.main}>
      <div className={classes.boxes}>
        <Card
          className={cx(classes.box, classes['box--1'])}
          radius='md'
          shadow='md'
        >
          Box 1
        </Card>
        <Card
          className={cx(classes.box, classes['box--2'])}
          radius='md'
          shadow='md'
        >
          Box 2
        </Card>
        <Card
          className={cx(classes.box, classes['box--3'])}
          radius='md'
          shadow='md'
        >
          Box 3
        </Card>
      </div>
    </main>
  );
}
