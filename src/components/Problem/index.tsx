import {
  Anchor,
  Button,
  Drawer,
  Highlight,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconExclamationMark } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export function Problem() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer size='lg' opened={opened} onClose={close}>
        <List spacing='xs' size='sm' center>
          <List.Item>
            Use{' '}
            <Anchor
              href='https://rickandmortyapi.com/documentation/'
              target='_blank'
            >
              Rick and morty API
            </Anchor>{' '}
            <Highlight
              display='inline'
              color='red'
              highlight={['name', 'picture']}
            >
              to get a list of characters with picture and name name.
            </Highlight>
          </List.Item>
          <List.Item>
            Provide a dropdown for selecting two characters from the list.
          </List.Item>
          <List.Item>
            Create a 3 X 3 grid with selected characters and place them in
            random locations.
          </List.Item>
          <List.Item>You can click on any of these individual cards.</List.Item>
          <List.Item>
            If a card has previously been clicked, and they match with selected
            characters then keep them visible.
          </List.Item>
          <List.Item>
            Hide them after one second if they don't match and swap the
            characters.
          </List.Item>
          <List.Item>
            If you find both the characters,then show a dialog "You won!"
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
      </Drawer>

      <Button onClick={open}>Problem description</Button>
    </>
  );
}
