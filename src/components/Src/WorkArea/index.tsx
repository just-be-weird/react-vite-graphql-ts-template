import classes from './workarea.module.css';
import { Stopwatch } from '@/components/Src/Stopwatch';

export function WorkArea() {
  return (
    <div className={classes.workArea}>
      <Stopwatch />
    </div>
  );
}
