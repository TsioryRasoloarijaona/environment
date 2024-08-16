import React from "react";
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

export default function customer() {
  return (
    <TableContainer background={"white"} >
      <Table variant="simple" size={'lg'}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>img</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Region</Th>
            <Th>phone number</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <WrapItem>
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </WrapItem>
            </Td>
            <Td>Tsiory</Td>
            <Td>hei.tsiory</Td>
            <Td>Antananarivo</Td>
            <Td>Antananarivo</Td>
          </Tr>
          <Tr>
            <Td>
              <WrapItem>
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </WrapItem>
            </Td>
            <Td>Tsiory</Td>
            <Td>hei.tsiory</Td>
            <Td>Antananarivo</Td>
            <Td>Antananarivo</Td>
          </Tr>
          <Tr>
            <Td>
              <WrapItem>
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </WrapItem>
            </Td>
            <Td>Tsiory</Td>
            <Td>hei.tsiory</Td>
            <Td>Antananarivo</Td>
            <Td>+263 0348674323</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
