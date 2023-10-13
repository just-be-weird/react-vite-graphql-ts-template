import React from 'react';
import { Card, Image, Text } from '@mantine/core';
import cx from 'clsx';
import classes from './main.module.css';

const MyCard = ({ char }) => {
  return (
    <Card key={char?.id} className={cx(classes.box)} radius='md' shadow='md'>
      <Image radius='md' h='auto' fit='contain' src={char?.image} />
      <Text fw={500}>{char?.name}</Text>
    </Card>
  );
};

export default MyCard;
