import { Grid, Card as Crd, Image, Loader, Title } from '@mantine/core';
import cx from 'clsx';
import classes from '@/docs/icons/style.module.css';
import React from 'react';

type Props = {
  loading: boolean;
  onClick: () => void;
  row: {
    id: string;
    image: string;
    name: string;
  };
  selected: boolean;
};
export const Card = ({ loading, onClick, row, selected }: Props) => {
  return (
    <Grid.Col span={4} onClick={onClick}>
      <Crd
        className={cx(classes.box, selected && classes.selected)}
        radius='md'
        shadow='md'
      >
        {loading ? (
          <Loader color='blue' />
        ) : (
          <>
            <Image
              className={classes.img}
              radius='md'
              h='auto'
              fit='contain'
              src={row?.image}
            />
            <Title className={classes.title} order={6} m='0 auto' mt='md'>
              {row.name}
            </Title>
          </>
        )}
      </Crd>
    </Grid.Col>
  );
};
