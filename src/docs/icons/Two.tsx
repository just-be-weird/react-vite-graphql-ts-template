import React, { SyntheticEvent, useState } from 'react';
import classes from './style.module.css';
import cx from 'clsx';

import {
  IconFileText,
  IconFolder,
  IconMinusVertical,
  IconPlus,
} from '@tabler/icons-react';
import { NavLink, ScrollArea, TextInput } from '@mantine/core';
import { useFileDataStore } from '@/api/hook';

type NodeType = 'directory' | 'file';

interface FileNode {
  path: string;
  name: string;
  size: string;
  type: 'file';
  extension: string;
}

interface DirectoryNode {
  path: string;
  name: string;
  size: string;
  type: 'directory';
  children: FileNode[] | DirectoryNode[];
}

type FileTreeNode = Array<DirectoryNode>;

type CreateNode = {
  node: FileNode | DirectoryNode | null;
  name: string;
  type: NodeType;
};

type Props = {
  active: string;
  fileTree: Array<FileNode | DirectoryNode>;
  insertNode: (node: CreateNode) => void;
  setActive: (s: string) => void;
};

const Action = ({
  node,
  setNode,
}: {
  node: DirectoryNode | FileNode;
  setNode: (n: DirectoryNode | FileNode, type: NodeType) => void;
}) => {
  const handleOnClick = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // @ts-ignore
    setNode(node, e.target.dataset.action);
  };
  return (
    <div className={cx(classes.action, classes.action)}>
      <span onClick={handleOnClick} data-action='directory'>
        <IconFolder size='.75rem' stroke={1.5} /> +
      </span>
      <span onClick={handleOnClick} data-action='file'>
        <IconFileText size='.75rem' stroke={1.5} /> +
      </span>
    </div>
  );
};

function FileTree(props: Props) {
  const { active, fileTree, insertNode, setActive } = props;
  const [createNode, setCreateNode] = useState<CreateNode>({
    node: null,
    name: '',
    type: 'file',
  });
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <ScrollArea.Autosize mah={600} mx='auto'>
      {fileTree.map((node) => {
        const handleNavClick = () => {
          let newExpanded = [...expanded];
          if (newExpanded.includes(node.path)) {
            setExpanded(newExpanded.filter((i) => i !== node.path));
            setActive('');
          } else {
            setExpanded([...newExpanded, node.path]);
            setActive(node.path);
          }
        };

        if (node.type === 'directory') {
          const isActive = node.path === active;
          const isExpanded = expanded.includes(node.path);

          return (
            <NavLink
              classNames={{
                root: classes.mainNavLink,
              }}
              active={isActive}
              key={node.path}
              label={
                <>
                  {node.name}
                  <Action
                    node={node}
                    setNode={(node, type) => {
                      setExpanded((pe) =>
                        !pe.includes(node.path) ? [...pe, node.path] : pe,
                      );
                      setTimeout(() => {
                        setCreateNode((prev) => ({
                          ...prev,
                          node,
                          type,
                        }));
                      }, 0);
                    }}
                  />
                </>
              }
              leftSection={<IconFolder size='1rem' stroke={1.5} />}
              rightSection={
                isExpanded ? (
                  <IconMinusVertical size='1rem' stroke={1.5} />
                ) : (
                  <IconPlus size='1rem' stroke={1.5} />
                )
              }
              opened={isExpanded}
              childrenOffset={28}
              onClick={handleNavClick}
            >
              {createNode.node && (
                <TextInput
                  className={classes.input}
                  autoFocus
                  value={createNode.name}
                  onBlur={() =>
                    setCreateNode({ node: null, name: '', type: 'file' })
                  }
                  onChange={(event) =>
                    setCreateNode((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    console.log(e.code === 'Enter');
                    if (e.code === 'Enter' && createNode.name) {
                      insertNode(createNode);
                    }
                  }}
                />
              )}
              <FileTree
                fileTree={node.children}
                insertNode={insertNode}
                active={active}
                setActive={setActive}
              />
            </NavLink>
          );
        } else if (node.type === 'file') {
          return (
            <NavLink
              classNames={{
                root: classes.actionHover,
              }}
              key={node.path}
              label={
                <>
                  {node.name}
                  <Action
                    node={node}
                    setNode={(node, type) =>
                      setCreateNode((prev) => ({
                        ...prev,
                        node,
                        type,
                      }))
                    }
                  />
                </>
              }
              leftSection={<IconFileText size='1rem' stroke={1.5} />}
              onClick={handleNavClick}
            >
              {createNode.node && (
                <TextInput
                  autoFocus
                  className={classes.input}
                  value={createNode.name}
                  onBlur={() =>
                    setCreateNode({ node: null, name: '', type: 'file' })
                  }
                  onChange={(event) =>
                    setCreateNode((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
              )}
            </NavLink>
          );
        } else {
          return null;
        }
      })}
    </ScrollArea.Autosize>
  );
}

export function RenderTree() {
  const directoryTree = useFileDataStore();
  const [dt, setDT] = useState<FileTreeNode>(directoryTree.data);
  const [active, setActive] = useState('');
  const handleSetActive = (a: string) => {
    setActive((p) => (a === p ? '' : a));
  };
  const handleInsertNode = (node: CreateNode) => {
    const activeNode = node.node;
    if (activeNode) {
      let newNode: FileNode | DirectoryNode;
      if (node.type === 'directory') {
        newNode = {
          children: [],
          name: node.name,
          path: activeNode.path + '/' + node.name,
          size: Math.random() * 400,
          type: node.type,
        };
      } else {
        newNode = {
          extension: node.name.split('.')[1] || '.txt',
          name: node.name,
          path: activeNode.path + '/' + node.name,
          size: Math.random() * 400,
          type: node.type,
        };
      }
      let updatedDt: FileTreeNode;
      console.log(activeNode);
      if (activeNode.name === 'src') {
        updatedDt = [{ ...dt[0], children: [...dt[0].children, newNode] }];

        setDT(updatedDt);
      } else {
        const dtChildren = dt[0].children; // src.children
        function insertNode(
          children: DirectoryChildren | FileNode | DirectoryNode,
          item: FileNode | DirectoryNode,
        ) {
          /* DFS call to search ID */
          if (Array.isArray(children)) {
            return dtChildren.map((dfNode) => insertNode(dfNode, item));
          }
          // if (children.id === id) {
          //   /* insert at beginning */
          //   children.items.unshift({
          //     id: new Date().toTimeString(),
          //     name: item,
          //     isFolder,
          //     items: [],
          //   });
          //
          //   return children;
          // }

          // updatedDt = { ...tree, items: updatedDt };
        }
        console.log(insertNode(dtChildren, newNode));
      }
    }
  };
  return (
    <main className={classes.main}>
      <div className={classes.fileTreeContainer}>
        <FileTree
          fileTree={dt}
          active={active}
          insertNode={handleInsertNode}
          setActive={handleSetActive}
        />
      </div>
    </main>
  );
}
