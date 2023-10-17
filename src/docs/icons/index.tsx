import { ReactElement } from 'react';
import { RickNMortyGraph } from '@/docs/icons/One';

type Name = 'P1+G';
export const ThemeProvider = ({ name }: { name: Name }) => {
  const renderComponent = (cmp: Name): ReactElement | null => {
    let c = null;
    if (cmp === 'P1+G') {
      c = <RickNMortyGraph />;
    }
    return c;
  };

  return renderComponent(name);
};
