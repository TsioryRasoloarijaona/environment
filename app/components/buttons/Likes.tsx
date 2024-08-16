"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function Likes() {
    const [clicked , setClicked] = useState(false)
  return (
    <>
    <div className='flex items-center'>
      <button className=" px-3" onClick={()=>setClicked(!clicked)}>
        <p className={`${clicked ? 'text-red-500' : 'text-gray-500'}`}>
          <FaHeart/>
        </p>
      </button>
      <p>
        168
      </p>
        
    </div>
    </>
  );
}
