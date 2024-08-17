"use client"
import React from "react";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { Tree } from "./FetchList";
import { create } from 'zustand'

interface TypeState {
    type : string
    updateType: (type: string) => void;
    
  }

  export const useStoreTypeTree = create<TypeState>((set) => ({
    type: '',
    updateType: (newType : string) => set({ type: newType }),
  }));

export default function TreeList({list} : {list : Tree[] }) {
    const {type , updateType  } = useStoreTypeTree((state) => ({
       type : state.type,
       updateType : state.updateType
      }));
      console.log(list)
  return (
    <>
      {list.map((el, index) => (
        <MenuItem onClick={()=> updateType(el.type)} key={index}>{el.type}</MenuItem>
        
      ))}
      
    </>
  );
}
