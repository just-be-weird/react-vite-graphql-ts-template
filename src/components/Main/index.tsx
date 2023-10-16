import React from 'react';
import classes from './main.module.css';
import { Problem } from '@/components/Problem';
import { WorkArea } from '@/components/WorkArea';

/**
 * Renders Main component
 * @constructor
 */
export function Main() {
  return (
    <main className={classes.main}>
      <Problem />
      <WorkArea />
    </main>
  );
}
