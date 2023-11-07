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
                Now write code to build a image player state machine that can
                transition between different states (
                {renderHighlight(
                  'idle, playing, paused, buffering, and stop',
                  'blue',
                )}
                ) based on user inputs.
              </List.Item>
              <List.Item>
                When pressed {renderHighlight('playing', 'green')} transition
                images for 4sec.
              </List.Item>
              <List.Item>
                When pressed {renderHighlight('paused', 'yellow')} hold on to
                the current image for 4 seconds until play is pressed again.
              </List.Item>
              <List.Item>
                When pressed {renderHighlight('buffering', 'orange')} hold
                current image for 1 sec and then transition back to playing.
              </List.Item>
              <List.Item>
                When pressed {renderHighlight('stop', 'red')} end transition.
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
                How do you handle accessibility in React applications?
              </List.Item>
              <List.Item>
                How do you deploy React applications to production?
              </List.Item>
              <List.Item>
                What are some of the most interesting or challenging projects
                you have worked on as a React engineer?
              </List.Item>
              <List.Item>
                What are some of the latest trends and developments in the React
                ecosystem?
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
