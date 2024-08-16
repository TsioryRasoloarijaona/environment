"use client"
import React from "react";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";

import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state : string) => ({ state })),
}))

export default function TreeList({list} : {list : string[]}) {
  
  return (
    <>
      {list.map((el, index) => (
        <MenuItem onClick={()=> console.log(el)}>{el}</MenuItem>
      ))}
    </>
  );
}
