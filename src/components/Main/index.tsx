import React from 'react';
import classes from './main.module.css';
import { WorkArea } from '../Src';

/**
 * Renders Main component
 * @constructor
 */
export function Main() {
  return (
    <main className={classes.main}>
      <WorkArea />
    </main>
  );
}
