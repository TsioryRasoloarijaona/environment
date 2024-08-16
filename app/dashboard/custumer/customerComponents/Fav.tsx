import { Avatar } from '@chakra-ui/react'
import React from 'react'


export default function Fav() {
  return (
    <div>
        <div className="text-center pt-2">
        <Avatar size='xl'  src='https://bit.ly/code-beast' />
        </div>
        <div>
            <ul className="text-center pt-4 space-y-3 text-sm font-bold text-gray-500">
                <li className='text-sm font-bold text-gray-500'>Tsiory</li>
                <li className='text-sm'>@gmail</li>
                <li className='text-sm'>menabe</li>
                <li className='text-sm'>total : 288</li>
            </ul>
        </div>
      </div>
  )
}
