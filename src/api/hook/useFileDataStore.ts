export interface FileNode {}

export interface DirectoryNode {}

export type FileTreeNode = Array<DirectoryNode>;

export const directoryTree: FileTreeNode = [
  {
    path: 'src',
    name: 'src',
    size: 600,
    type: 'directory',
    children: [
      {
        path: 'src/assets',
        name: 'assets',
        size: 400,
        type: 'directory',
        children: [
          {
            path: 'src/assets/static',
            name: 'static',
            size: 400,
            type: 'directory',
            children: [
              {
                path: 'src/assets/static/favicon.jpg',
                name: 'favicon.jpg',
                size: 400,
                type: 'file',
                extension: '.jpg',
              },
            ],
          },
          {
            path: 'src/assets/logo.jpg',
            name: 'logo.jpg',
            size: 400,
            type: 'file',
            extension: '.jpg',
          },
        ],
      },
      {
        path: 'src/components',
        name: 'components',
        size: 200,
        type: 'directory',
        children: [
          {
            path: 'src/components/header',
            name: 'header',
            size: 200,
            type: 'directory',
            children: [
              {
                path: 'src/components/header/header.module.css',
                name: 'header.module.css',
                size: 100,
                type: 'file',
                extension: '.css',
              },
              {
                path: 'src/components/header/index.tsx',
                name: 'index.tsx',
                size: 100,
                type: 'file',
                extension: '.tsx',
              },
            ],
          },
          {
            path: 'src/components/footer',
            name: 'footer',
            size: 200,
            type: 'directory',
            children: [],
          },
          {
            path: 'src/components/index.tsx',
            name: 'index.tsx',
            size: 100,
            type: 'file',
            extension: '.tsx',
          },
        ],
      },
    ],
  },
];

export const useFileDataStore = () => {
  return { data: directoryTree };
};
