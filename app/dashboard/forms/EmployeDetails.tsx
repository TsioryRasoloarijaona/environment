import React from "react";
import { IoMdAdd } from "react-icons/io";
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
import ModalComponent from "@/app/components/Modal/ModalComponent";

export default function EmployeDetails() {
  return (
    <TableContainer background={"white"} >
        <div className="w-fit  h-fit p-3 text-whit ml-3"><ModalComponent/></div>
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
