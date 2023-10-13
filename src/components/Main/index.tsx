import React from 'react';
import { Card, Image } from '@mantine/core';
import cx from 'clsx';
import classes from './main.module.css';

/**
 * Ref
 * Card: https://mantine.dev/core/card/
 * Image: https://mantine.dev/core/image/
 * Dialog: https://mantine.dev/core/dialog/
 *
 * Renders Main component
 * @constructor
 */
export function Main() {
  return (
    <main className={classes.main}>
      {/* your code */}
      <Card className={cx(classes.box)} radius='md' shadow='md'>
        <Image
          radius='md'
          h="auto"
          fit="contain"
          src='https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
        />
      </Card>
    </main>
  );
}
