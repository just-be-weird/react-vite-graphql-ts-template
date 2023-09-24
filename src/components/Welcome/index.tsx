import { Title, Text, Anchor } from '@mantine/core';
import classes from './welcome.module.css';

export function Welcome() {
  return (
    <Title className={classes.title}>
      <Anchor href='/' size='lg'>
        May the power{' '}
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: 'pink', to: 'yellow' }}
          ml={2}
        >
          {' '}
          with you!
        </Text>
      </Anchor>
    </Title>
  );
}
