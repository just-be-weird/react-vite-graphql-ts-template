import { Group } from '@mantine/core';
import classes from './header.module.css';
import { Welcome } from '@/components/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { LiftSystem } from '@/components/LiftSystem';
import { Fragment } from 'react';

export function Header() {
  return (
    <Fragment>
      <Group className={classes.header} justify='space-between' w='100vw'>
        <Welcome />
        <ColorSchemeToggle />
      </Group>
      <LiftSystem />
    </Fragment>
  );
}
