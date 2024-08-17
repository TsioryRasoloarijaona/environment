import React from 'react';
import { Tree } from './FetchList';

interface TreeListProps {
  list: Tree[];
  onSelect: (id: string) => void;
}

const TreeList: React.FC<TreeListProps> = ({ list, onSelect }) => {
  return (
    <ul>
      {list.map(tree => (
        <li key={tree.id} onClick={() => onSelect(tree.id)}>
          {tree.type}
        </li>
      ))}
    </ul>
  );
};

export default TreeList;
