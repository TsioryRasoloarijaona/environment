import { Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosShareAlt } from "react-icons/io";

export default function Share() {
  return (
    <Button background={'transparent'}>
      <IoIosShareAlt className='text-3xl font-bold'/>
    </Button>
  )
}
