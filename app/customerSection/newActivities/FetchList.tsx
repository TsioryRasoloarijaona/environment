import React from 'react'
import TreeList from './TreeList'

export default function FetchList() {
    const list = ['tree1' , 'tree2' , 'tree3']
  return (
    <>
    <TreeList list={list}/>
    </>
  )
}
