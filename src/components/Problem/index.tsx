import {
  Anchor,
  Blockquote,
  Button,
  Drawer,
  Highlight,
  List,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCode, IconExclamationMark } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ThemeProvider } from '@/docs/icons';
import React from 'react';

export function Problem() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer size='lg' opened={opened} onClose={close}>
        <Title order={3}>Problem</Title>

        <List spacing='xs' size='sm' center>
          <List.Item>
            Use{' '}
            <Anchor
              href='https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home'
              target='_blank'
            >
              Rick and morty API
            </Anchor>{' '}
            <Highlight
              display='inline'
              color='red'
              highlight={['name', 'picture']}
            >
              to get a list of episodes with name and characters with picture,
              name.
            </Highlight>
          </List.Item>
          <List.Item>
            Provide a dropdown for selecting the fetched episode from the list.
          </List.Item>
          <List.Item>
            For a chosen episode, create a 3 X 3 grid with three random
            characters and Rick and Morty from the character list.
          </List.Item>
          <List.Item>
            Three characters will be placed in pairs as follows
          </List.Item>
          <Blockquote color='blue' icon={<IconCode />} mt='xl'>
            const threePairedChars = 3 * 2; // 6 characters <br />
            const rickAndMortyPair = 1 + 1; // 1 rick + 1 morty = 2 characters{' '}
            <br />
            const oneRandomChar = 1;
            <br /> <br />
            // 3*3 grid using chars = 6 + 2 + 1 (any random char from 8) = 9{' '}
            <br />
            const threeByThreeGrid = threePairedChars + rickAndMortyPair +
            oneRandomChar;
          </Blockquote>
          <List.Item>You can click on any of these individual cards.</List.Item>
          <List.Item>
            If a card has previously been clicked, and they match then keep them
            visible.
          </List.Item>
          <List.Item>Hide them after one second if they don't match.</List.Item>
          <List.Item>
            If all the pairs are matched, or you found Rick and Morty then show
            a dialog "You won!"
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color='blue' size={16} radius='xl'>
                <IconExclamationMark />
              </ThemeIcon>
            }
          >
            Bonus: Use TS to type e.g. function arg, return type, data, local
            vars and the response.
          </List.Item>
        </List>
        <Title mt='lg' order={4}>
          Preview
        </Title>
        <ThemeProvider name='P1+G' />
      </Drawer>

      <Button onClick={open}>Problem description</Button>
    </>
  );
}
