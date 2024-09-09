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
                Create a simple Tic-Tac-Toe game using React. The game should
                have the following functionality:
              </List.Item>
              <List.Item>
                A 3x3 grid of squares, where each square can be empty, filled
                with an {renderHighlight('"X"', 'orange')} or an{' '}
                {renderHighlight('"O"', 'orange')}.
              </List.Item>
              <List.Item>
                The initial state of the board should be empty.
              </List.Item>
              <List.Item>
                The game starts with player {renderHighlight('"X"', 'orange')}.
              </List.Item>
              <List.Item>
                Players alternate turns, with {renderHighlight('"O"', 'orange')}{' '}
                following {renderHighlight('"X"', 'orange')}.
              </List.Item>
              <List.Item>
                The game ends when a player wins or there's a draw.
              </List.Item>

              <List.Item>
                A player wins if they have three of their symbols in a row,
                column, or diagonal.
              </List.Item>

              <List.Item>
                A draw occurs if all squares are filled and no player has won.
              </List.Item>

              <List.Item>
                A clear and intuitive interface that allows players to click on
                squares to make their moves.
              </List.Item>

              <List.Item>
                Visual indicators to show the current player and the winner
              </List.Item>

              <List.Item>A way to restart the game.</List.Item>
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
            <ThemeProvider name='ttt' />
          </Blockquote>
        )}
        {meta.bonus && (
          <Blockquote color='orange' mt='md' icon={<IconGift />}>
            <Title mb='sm' order={4}>
              Topics
            </Title>
            <List size='md' center>
              <List.Item>
                CSRF, why we need it and how to implement it?
              </List.Item>
              <List.Item>
                Mention ways to decrease page load time for react web apps?
              </List.Item>
              <List.Item>Process to refactor a big module.</List.Item>
              <List.Item>Error handling on client side.</List.Item>
              <List.Item>
                What is the best way to include CSS Styling in HTML?
              </List.Item>
              <List.Item>
                What are the different ways to hide an Element using CSS?
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
