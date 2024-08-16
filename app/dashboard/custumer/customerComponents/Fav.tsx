import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { User } from '@/app/interfaces/userInterface'
import {get} from '@/app/helper/fecth/get'


export default async function Fav() {
const user : User = await get('https://environment-pyv8.onrender.com/actif/user')
  return (
    <div>
        <div className="text-center pt-2">
        <Avatar size='xl'  src={user.image} />
        </div>
        <div>
            <ul className="text-center pt-4 space-y-3 text-sm font-bold text-gray-500">
                <li className='text-sm font-bold text-gray-500'>{user.name}</li>
                <li className='text-sm'>{user.email}</li>
                <li className='text-sm'>{user.telephone}</li>
                <li className='text-sm'>total : {user.plantCount}</li>
            </ul>
        </div>
      </div>
  )
}
