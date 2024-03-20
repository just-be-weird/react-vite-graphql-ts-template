import React, { useState } from 'react';
import classes from './workArea.module.css';
import { IconStarFilled, IconStar } from '@tabler/icons-react';
import { Button, ComboboxItem, Flex, Select, Title } from '@mantine/core';
import { CustomCard as Card } from '@/components/Card';

/**
 * @desc Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <div className={classes.workArea}>
      <Flex>
        <Select data={[]} value={null} onChange={() => {}} />
      </Flex>
      <Flex gap='sm' pt='md'>
        <Button>
          <IconStarFilled /> <IconStarFilled /> <IconStarFilled />{' '}
          <IconStarFilled /> <IconStarFilled />
        </Button>
        <Title order={3}>Active filter</Title>
      </Flex>
      <Flex gap='sm' pt='md'>
        <Button>
          <IconStar /> <IconStar /> <IconStar /> <IconStar /> <IconStar />
        </Button>
        <Title order={3}>Default filter</Title>
      </Flex>
      <div className={classes.cardContainer}>
        <Card />
      </div>
    </div>
  );
}
