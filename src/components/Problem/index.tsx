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
                You've been provided JSON data of file directory structure
                having{' '}
                {renderHighlight(
                  'a list of directories and its associated files.',
                  'blue',
                  ['directories', 'files'],
                )}
              </List.Item>
              <List.Item>
                Using this data{' '}
                {renderHighlight(
                  'render a expanding file tree/explorer',
                  'blue',
                )}
                .
              </List.Item>
              <List.Item>
                For each directory when we hover provide an{' '}
                {renderHighlight(
                  'option to add a new directory or file',
                  'blue',
                )}
                .
              </List.Item>
              <List.Item>
                {renderHighlight('Note:', 'orange')} Hook to get this data is in{' '}
                {renderHighlight('src/api/hook/useFileDataStore.ts', 'orange')}
              </List.Item>
              <List.Item>
                {renderHighlight('Note:', 'orange')} You can start work form
                this file{' '}
                {renderHighlight(
                  'src/components/WorkArea/index.tsx.',
                  'orange',
                )}
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
              Good to have
            </Title>
            <List spacing='sm' size='md' center>
              <List.Item>
                How would you test when a directory is expanded shows the
                correct content and hides it when clicked again?
              </List.Item>
              <List.Item>
                Use TS to type e.g., function arg, return type, data, local vars
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
