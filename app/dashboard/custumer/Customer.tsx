import React from "react";
import {get} from '@/app/helper/fecth/get'
import {User} from '@/app/interfaces/userInterface'
import {
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";

export default async function Customer() {
    const custumer : User[] = await get('https://environment-pyv8.onrender.com/users')
  return (
    <TableContainer background={"white"} >
      <Table variant="simple" size={'lg'}>
       
        <Thead>
          <Tr>
            <Th>img</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>phone number</Th>
          </Tr>
        </Thead>
        <Tbody>
            {custumer.map((el , index)=>(

          <Tr key={index}>
            <Td>
              <WrapItem>
                <Avatar
                  name="Segun Adebayo"
                  src={el.image}
                />
              </WrapItem>
            </Td>
            <Td>{el.name}</Td>
            <Td>{el.email}</Td>
            <Td>{el.telephone}</Td>
            <Td>{el.plantCount}</Td>
          </Tr>
            ))}
         
        </Tbody>
      </Table>
    </TableContainer>
  );
}
