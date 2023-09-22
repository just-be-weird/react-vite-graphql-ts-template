export const __DEV__: boolean = import.meta.env.NODE_ENV === 'development';
export const __PROD__: boolean = import.meta.env.NODE_ENV === 'production';
export const __STAGING__ = import.meta.env.NODE_ENV === 'staging';
export const __APP_BASE_REST_URL__ = 'https://pokeapi.co/api/v2/pokemon';
export const __APP_BASE_GRAPH_URL__: string = import.meta.env
  .VITE_BASE_GRAPH_URL as string;
