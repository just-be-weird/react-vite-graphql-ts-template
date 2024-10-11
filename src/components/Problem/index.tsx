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
              to get a list of characters with picture and name.
            </Highlight>
          </List.Item>
          <List.Item>
            Render cards having character image, name and gender
          </List.Item>
          <List.Item>
            Provide a add to cart button to add the character in cart.
          </List.Item>
          <List.Item>Provide a add to shortlist button to add the character in shortlist.</List.Item>
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
