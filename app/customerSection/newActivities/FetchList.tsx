import React, { useEffect, useState } from 'react';
import TreeList from './TreeList';
import axios from 'axios';

export interface Tree {
  id: string;
  description: string;
  type: string;
}

export default function FetchList() {
  const [listTree, setListTree] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get<Tree[]>('https://environment-pyv8.onrender.com/tree/types');
        setListTree(response.data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TreeList list={listTree} />
    </>
  );
}
