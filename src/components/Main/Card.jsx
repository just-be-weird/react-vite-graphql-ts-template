import React from 'react';
import { Card, Image, Text } from '@mantine/core';
import cx from 'clsx';
import classes from './main.module.css';

const Card = () => {
  return (
    <Card key={chars?.id} className={cx(classes.box)} radius='md' shadow='md'>
      <Image radius='md' h='auto' fit='contain' src={chars?.image} />
      <Text fw={500}>{chars?.name}</Text>
    </Card>
  );
};

export default Card;
