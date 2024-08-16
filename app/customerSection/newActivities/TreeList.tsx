"use client"
import React from "react";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";

import { create } from 'zustand'

interface TypeState {
    type : string
    updateType: (type: string) => void;
    
  }

  export const useStoreTypeTree = create<TypeState>((set) => ({
    type: '',
    updateType: (newType : string) => set({ type: newType }),
  }));

export default function TreeList({list} : {list : string[]}) {
    const {type , updateType  } = useStoreTypeTree((state) => ({
       type : state.type,
       updateType : state.updateType
      }));
  return (
    <>
      {list.map((el, index) => (
        <MenuItem onClick={()=> updateType(el)} key={index}>{el}</MenuItem>
      ))}
    </>
  );
}
