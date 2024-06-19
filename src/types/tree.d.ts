export interface FileNode {
  path: string;
  name: string;
  size: number;
  type: 'file';
  extension: string;
}
export type Nodes = FileNode | DirectoryNode;
export type DirectoryChildren = Nodes[];
export interface DirectoryNode {
  path: string;
  name: string;
  size: number;
  type: 'directory';
  children: DirectoryChildren;
}
export type FileTreeNode = DirectoryNode[];

export type NodeType = 'directory' | 'file';
export type ExpandedDirectoryNode = DirectoryNode;
export type CreateNode = {
  nodes: Record<string, FileNode | ExpandedDirectoryNode>;
};

export type TargetNode = {
  ci: number;
  pi: number | null;
  type: NodeType | '';
};
