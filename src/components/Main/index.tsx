import React from 'react';
import classes from './main.module.css';
import cx from 'clsx';
import { Card } from '@mantine/core';

type Props = {};

const items = [1, 2, 3];

export function Main(_props: Props) {
  return (
    <main className={classes.main}>
      <div className={classes.boxes}>
        {items.map((item) => (
          <Card
            className={cx(classes.box, classes[`box--${item}`])}
            radius='md'
            shadow='md'
            key={item}
          >
            Box {item}
          </Card>
        ))}
      </div>
    </main>
  );
}
