import React, { useState } from 'react';
import classes from './style.module.css';
import { omit } from 'lodash';
import cx from 'clsx';

import {
  IconFileText,
  IconFolder,
  IconMinusVertical,
  IconPlus,
} from '@tabler/icons-react';
import { NavLink, ScrollArea, TextInput } from '@mantine/core';
import { useFileDataStore } from '@/api/hook';
import {
  CreateNode,
  DirectoryChildren,
  DirectoryNode,
  FileNode,
  FileTreeNode,
  Nodes,
  NodeType,
  TargetNode,
} from '@/types/tree';

type Props = {
  targetNode: TargetNode;
  fileTree: DirectoryChildren;
  insertNode: (name: string) => void;
  level: number;
  nodeIndex?: number;
  setTargetNode: (n: TargetNode) => void;
};

const Action = ({ setNode }: { setNode: (type: NodeType) => void }) => {
  const handleOnClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setNode((e.target as HTMLSpanElement).dataset.action as NodeType);
  };
  return (
    <div className={cx(classes.action, classes.action)}>
      <span onClick={handleOnClick} data-action='directory'>
        <IconFolder data-action='directory' size='.75rem' stroke={1.5} /> +
      </span>
      <span onClick={handleOnClick} data-action='file'>
        <IconFileText data-action='file' size='.75rem' stroke={1.5} /> +
      </span>
    </div>
  );
};

function FileTree(props: Props) {
  const { targetNode, fileTree, insertNode, level, setTargetNode } = props;
  const [createNode, setCreateNode] = useState<CreateNode>({
    nodes: {},
  });
  const [nodeName, setNodeName] = useState('');
  const removeNode = (
    nodes: CreateNode['nodes'],
    id: string,
  ): CreateNode['nodes'] => omit(nodes, id);

  return (
    <ScrollArea.Autosize mah={600} mx='auto'>
      {fileTree.map((node, nodeIndex) => {
        const handleNavClick = (node: Nodes) => {
          let newNodes = { ...createNode.nodes };
          if (newNodes[node.path]) {
            setCreateNode({ nodes: removeNode(newNodes, node.path) });
          } else {
            setCreateNode({
              nodes: {
                ...newNodes,
                [node.path]: node,
              },
            });
          }
        };

        if (node.type === 'directory') {
          const isActive =
            targetNode.pi === level && targetNode.ci === node.children.length;
          const isExpanded = !!createNode.nodes[node.path];
          const isTargetNode =
            targetNode.pi === level && targetNode.ci === node.children.length;

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
                    setNode={(type) => {
                      setTargetNode({
                        pi: level,
                        ci: (fileTree[nodeIndex] as DirectoryNode).children
                          .length,
                        type,
                      });
                      setCreateNode({
                        nodes: { ...createNode.nodes, [node.path]: node },
                      });
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
              onClick={() => handleNavClick(node)}
            >
              {isTargetNode && (
                <TextInput
                  className={classes.input}
                  autoFocus
                  value={nodeName}
                  onBlur={() => {
                    setTargetNode({
                      pi: null,
                      ci: 0,
                      type: '',
                    });
                    setNodeName('');
                    setCreateNode({
                      nodes: removeNode(createNode.nodes, node.path),
                    });
                  }}
                  onChange={(event) => setNodeName(event.target.value)}
                  onKeyDown={(e) => {
                    if (e.code === 'Enter' && nodeName) {
                      insertNode(nodeName);
                    }
                  }}
                />
              )}
              <FileTree
                fileTree={node.children}
                insertNode={insertNode}
                level={level + 1}
                targetNode={targetNode}
                setTargetNode={setTargetNode}
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
              label={node.name}
              leftSection={<IconFileText size='1rem' stroke={1.5} />}
            />
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
  const [targetNode, setSetTargetNode] = useState<TargetNode>({
    pi: null,
    ci: dt[0].children.length,
    type: '',
  });
  const handleSetTargetNode = (tn: TargetNode) => {
    setSetTargetNode(tn);
  };
  const handleInsertNode = (name: string) => {
    if (name && targetNode.pi !== null && targetNode.type) {
      let newNode: FileNode | DirectoryNode;
      let updatedDt: FileTreeNode = [...dt];
      const parentNode =  updatedDt[targetNode.pi];
      console.log(name, targetNode, parentNode, dt);

      if (parentNode) {
        if (targetNode.type === 'directory') {
          newNode = {
            children: [],
            name: name,
            path: parentNode.path + '/' + name,
            size: 0,
            type: targetNode.type,
          };
        } else {
          newNode = {
            extension: name.split('.')[1] || 'untitled.txt',
            name: name,
            path: parentNode.path + '/' + name,
            size: Math.random() * 400,
            type: targetNode.type,
          };
        }
        updatedDt[targetNode.pi][targetNode.ci] = newNode;
        setDT([...updatedDt]);

        console.log(parentNode, newNode, updatedDt, dt);
      }
    }
  };
  return (
    <main className={classes.main}>
      <div className={classes.fileTreeContainer}>
        <FileTree
          fileTree={dt}
          level={0}
          targetNode={targetNode}
          insertNode={handleInsertNode}
          setTargetNode={handleSetTargetNode}
        />
      </div>
    </main>
  );
}
