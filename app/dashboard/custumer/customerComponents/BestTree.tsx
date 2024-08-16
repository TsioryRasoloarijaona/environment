import { Avatar } from '@chakra-ui/react'
import React from 'react'


export default function BestTree() {
  return (
    <div>
        <div className="text-center pt-2">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7-57d9iBcoQi-eylidMru2oG856BajLn2g&s' size={'xl'}/>
        </div>
        <div>
            <ul className="text-center pt-4 space-y-3 text-sm font-bold text-gray-500">
                <li className='text-sm font-bold text-gray-500'>Cactus</li>
                <li className='text-sm'>pinus</li>
                <li className='text-sm'>bio</li>
                <li className='text-sm'>total : 288</li>
            </ul>
        </div>
      </div>
  )
}
