import { Group } from '@mantine/core';
import classes from './header.module.css';
import { Welcome } from '@/components/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';

export function Header() {
  return (
    <Group className={classes.header} justify='space-between' w='100vw'>
      <Welcome />
      <ColorSchemeToggle />
    </Group>
  );
}
