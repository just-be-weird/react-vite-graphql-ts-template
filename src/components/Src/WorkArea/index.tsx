import classes from './workarea.module.css';
// import { Stopwatch } from '@/components/Src/Stopwatch';
import { Problem } from '@/components/Problem';

export function WorkArea() {
  return (
    <div className={classes.workArea}>
      {/*  Debugging exercise */}
      {/*<Stopwatch />*/}
      <Problem />
    </div>
  );
}
