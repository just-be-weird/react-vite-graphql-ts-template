import React from 'react';
import { Card, Image, Select } from '@mantine/core';
import cx from 'clsx';
import classes from '@/components/Main/main.module.css';
import { GET_ALL_EPISODES } from '@/graphql/query';

/**
 * @desc Component API Reference
 * Select: https://mantine.dev/core/select/#data-formats
 * Card: https://mantine.dev/core/card/#usage
 * Image: https://mantine.dev/core/image/
 * Dialog: https://mantine.dev/core/dialog/
 */

/**
 * Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  // const { data, loading } = useQuery(GET_ALL_EPISODES);

  return (
    <div>
      {/* your code */}
      {/*<Select*/}
      {/*  disabled={loading}*/}
      {/*  data={data?.episodes?.results?.map((ep) => ({*/}
      {/*    value: ep.id,*/}
      {/*    label: ep.name,*/}
      {/*  }))}*/}
      {/*  onChange={}*/}
      {/*/>*/}
      <Card className={cx(classes.box)} radius='md' shadow='md'>
        <Image
          radius='md'
          h='auto'
          fit='contain'
          src='https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
        />
      </Card>
    </div>
  );
}
