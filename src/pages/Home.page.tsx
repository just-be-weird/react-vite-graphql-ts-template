import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome';
import { Group } from '@mantine/core';
import classes from '@/theme/styles/home-page.module.css';

export function HomePage() {
  return (
    <Group className={classes.header} justify='space-between' w='100vw'>
      <Welcome />
      <ColorSchemeToggle />
    </Group>
  );
}
