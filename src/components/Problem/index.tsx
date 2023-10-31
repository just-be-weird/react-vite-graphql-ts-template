import {
  Anchor,
  Blockquote,
  Button,
  Drawer,
  Highlight,
  List,
  Title,
} from '@mantine/core';
import {
  IconCode,
  IconExternalLink,
  IconGift,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ThemeProvider } from '@/docs/icons';
import React from 'react';

const meta = {
  problem: true,
  preview: true,
  bonus: true,
  reference: true,
};
export function Problem() {
  const [opened, { open, close }] = useDisclosure(false);
  const renderHighlight = (text: string, color: string, a?: string[]) => (
    <Highlight display='inline' color={color} highlight={a ? a : text}>
      {text}
    </Highlight>
  );

  return (
    <>
      <Drawer size='lg' opened={opened} onClose={close}>
        {meta.problem && (
          <Blockquote color='blue' icon={<IconCode />} mt='md'>
            <Title order={3}>Problem</Title>
            <List spacing='sm' size='md' center>
              <List.Item>
                You've been provided data having{' '}
                {renderHighlight(
                  'a list of episodes with name and characters with picture and name.',
                  'red',
                  ['name', 'picture'],
                )}
              </List.Item>
              <List.Item>
                Render a dropdown for selecting an episode from the fetched
                episode list.
              </List.Item>
              <List.Item>
                For the selected episode, create a{' '}
                {renderHighlight('3 X 3', 'red')} grid by{' '}
                {renderHighlight('using first 5 characters', 'orange')} (5 * 2 -
                1 = 9).
              </List.Item>
              <List.Item>
                We need to make sure that all{' '}
                {renderHighlight('9 items in the grid are randomized', 'red')}.
              </List.Item>
              <List.Item>
                These items are clickable and if an item has previously been
                clicked, and they match OR you found Rick and Morty then keep
                them visible.
              </List.Item>
              <List.Item>
                Hide them after one second if they don't match.
              </List.Item>
            </List>
          </Blockquote>
        )}
        {meta.preview && (
          <Blockquote
            color='yellow'
            mt='md'
            icon={<IconPresentationAnalytics />}
          >
            <Title order={4}>Preview</Title>
            <ThemeProvider name='P1+G' />
          </Blockquote>
        )}
        {meta.bonus && (
          <Blockquote color='orange' mt='md' icon={<IconGift />}>
            <Title mb='sm' order={4}>
              Topics
            </Title>
            <List size='md' center>
              <List.Item>
                Ways to optimize large list data rendering, e.g., a news feed.
              </List.Item>
              <List.Item>Process to refactor a big module.</List.Item>
              <List.Item>Error handling on client side.</List.Item>
              <List.Item>
                Test when grid items are rendered when an episode is selected.
              </List.Item>
              <List.Item>
                Use TS to type e.g. function arg, return type, data, local vars
                and the response.
              </List.Item>
            </List>
          </Blockquote>
        )}
        {meta.reference && (
          <Blockquote color='gray' mt='md' icon={<IconExternalLink />}>
            <Title order={4}>References</Title>
            <List size='sm' center>
              <List.Item>
                <Anchor
                  href='https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home'
                  target='_blank'
                >
                  Rick and morty Graph API
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href='https://rickandmortyapi.com/documentation/#rest'
                  target='_blank'
                >
                  Rick and morty REST API
                </Anchor>
              </List.Item>
            </List>
          </Blockquote>
        )}
      </Drawer>
      <Button onClick={open}>Problem description</Button>
    </>
  );
}
