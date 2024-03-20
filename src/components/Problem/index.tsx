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
                {renderHighlight('Data Retrieval', 'orange')}: We'll begin by
                fetching data from the provided Graph/REST endpoint. This
                endpoint should return a list of episodes, each list item
                containing information like name, episode number, and a section
                dedicated to displaying the first three characters' image
                previews along with a button to load more characters.
              </List.Item>
              <List.Item>
                {renderHighlight('Random Rating Assignment', 'orange')}: To add
                some engagement, we'll assign a random rating between 0 and 5 to
                each episode within the retrieved data.
              </List.Item>
              <List.Item>
                {renderHighlight('Interactive Filtering', 'orange')}: Leveraging
                the updated data, we'll build a user-friendly search experience.
                This will include two filtering functionalities:
              </List.Item>
              <List.Item>
                {renderHighlight('Search by Episode Name', 'red')}: Users can
                search for specific episodes by entering their names in a
                dedicated filter box.
              </List.Item>
              <List.Item>
                {renderHighlight('Filter by Episode Rating', 'red')}:
                Additionally, users can filter the displayed episodes based on
                their assigned ratings. The filter options will include
                individual buttons or sliders for ratings between 1 and 5.
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
      <Button onClick={open} color='grape'>
        Problem description
      </Button>
    </>
  );
}
