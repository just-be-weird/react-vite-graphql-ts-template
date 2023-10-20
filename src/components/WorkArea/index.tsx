import React from 'react';
import {
  useFileDataStore,
  DirectoryNode,
  directoryTree,
  FileNode,
  FileTreeNode,
} from '@/api/hook';
// import cx from 'clsx';
import classes from './workArea.module.css';
// import {
//   IconFileText,
//   IconFolder,
//   IconMinus,
//   IconPlus
// } from '@tabler/icons-react';
// import { NavLink } from '@mantine/core';
/**
 * Render a vs-code like file tree using directoryTree data.
 *
 * Icons:
 * IconFileText, IconFolder, IconMinus, IconPlus
 */
/**
 * @desc Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  const { data } = useFileDataStore();

  return <div className={classes.workArea}>{/* your code */}</div>;
}
