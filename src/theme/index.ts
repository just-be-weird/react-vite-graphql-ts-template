import { createTheme, CSSVariablesResolver } from '@mantine/core';

export const theme = createTheme({
  fontFamily: "'Poppins', sans-serif",
  other: {
    deepOrangeLight: '#E17900',
    deepOrangeDark: '#FC8C0C',
  },
});

export const cssVarResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-hero-height': theme.other.heroHeight,
  },
  light: {
    '--mantine-color-deep-orange': theme.other.deepOrangeLight,
  },
  dark: {
    '--mantine-color-deep-orange': theme.other.deepOrangeDark,
  },
});
