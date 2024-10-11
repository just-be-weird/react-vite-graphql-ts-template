import { Card as MCard, Image, Text, Badge, Button, Group, Flex } from '@mantine/core';
import classes from './styles.module.css';
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';
import React from 'react';

export function Card() {
  return (
    <MCard shadow='sm' padding='lg' radius='md' withBorder w='max-content'>
      <Group justify='space-between' mt='md' mb='xs'>
        <Flex align='center' gap='sm'>
          {/*  Episode Name */}
          <Text fw={500}>The Ricklantis Mixup</Text>
          <span>
            <IconStarFilled size={12} />
            <IconStarHalfFilled size={12} />
          </span>
        </Flex>
        {/*  Episode number */}
        <Badge color='orange'>S03E07</Badge>
      </Group>
      <MCard.Section>
        <div className={classes.imageContainer}>
          <Image
            src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
            height={'300px'}
            width={'300px'}
            alt={'Morty'}
          />
          {/*  Char Name */}
          <Text fw={500}>Morty</Text>
          {/* Todo: Make Color dynamic. It should be blue for male and pink for female */}
          <Badge color='pink'>Male/Female</Badge>
        </div>
      </MCard.Section>
      <Button color='cyan' fullWidth mt='md' radius='md'>
        Load next 3 characters
      </Button>
    </MCard>
  );
}
