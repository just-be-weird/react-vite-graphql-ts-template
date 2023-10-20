import { ReactElement } from 'react';
import { RickNMortyGraph } from '@/docs/icons/One';
import { RenderTree } from '@/docs/icons/Two';

type Name = 'P1+G' | 'P2';
export const ThemeProvider = ({ name }: { name: Name }) => {
  const renderComponent = (cmp: Name): ReactElement | null => {
    let c = null;
    if (cmp === 'P1+G') {
      c = <RickNMortyGraph />;
    }
    if (cmp === 'P2') {
      c = <RenderTree />;
    }
    return c;
  };

  return renderComponent(name);
};
