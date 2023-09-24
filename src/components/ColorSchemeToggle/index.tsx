import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './color-scheme.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      className={classes.button}
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      radius='xl'
      variant='light'
      size='xl'
      aria-label='Toggle color scheme'
    >
      <IconSun
        color='yellow'
        className={cx(classes.icon, classes.light)}
        stroke={1.5}
      />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
