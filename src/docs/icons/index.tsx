import { ReactElement } from 'react';
import { RickNMortyGraph } from '@/docs/icons/One';
import TTT from '@/docs/icons/pg2';

type Name = 'P1+G' | 'ttt';
export const ThemeProvider = ({ name }: { name: Name }) => {
  const renderComponent = (cmp: Name): ReactElement | null => {
    let c = null;
    if (cmp === 'P1+G') {
      c = <RickNMortyGraph />;
    }
    if (cmp === 'ttt') {
      c = <TTT />;
    }
    return c;
  };

  return renderComponent(name);
};
