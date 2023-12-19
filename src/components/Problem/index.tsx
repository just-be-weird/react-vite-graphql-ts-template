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
  preview: false,
  bonus: false,
  reference: false,
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
                Fetch the data from given Graph/Rest endpoint point. This
                endpoints' response is
                {renderHighlight(
                  ' a list of episodes, with each episode having name and episode number.',
                  'blue',
                  [
                    'a list of episodes',
                    'episode having name and episode number',
                  ],
                )}
              </List.Item>
              <List.Item>
                First task is for each episode{' '}
                {renderHighlight(
                  'assign a random rating between 0 and 5',
                  'orange',
                )}
                .
              </List.Item>
              <List.Item>
                Using this data{' '}
                {renderHighlight(
                  'build a search by episode name filter box and filter by episode rating using rating filter where rating can be 1,2,3,4,5',
                  'pink',
                )}
                .
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
            <ThemeProvider name='P2' />
          </Blockquote>
        )}
        {meta.bonus && (
          <Blockquote color='orange' mt='md' icon={<IconGift />}>
            <Title mb='sm' order={4}>
              Bonus
            </Title>
            <List spacing='sm' size='md' center>
              <List.Item>
                Test when a directory is expanded shows correct content and
                hides it when clicked again.
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
