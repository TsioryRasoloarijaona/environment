import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Employee } from "@/app/interfaces/EmployeIntefaces";
import { get } from "@/app/helper/fecth/get";
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

export default async function EmployeDetails() {
  const employe: Employee[] = await get(
    "https://environment-pyv8.onrender.com/employees"
  );
  return (
    <TableContainer background={"white"}>
      <div className="w-fit  h-fit p-3 text-whit ml-3">
        <ModalComponent />
      </div>
      <Table variant="simple" size={"lg"}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>img</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>phone number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employe.map((el, index) => (
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
              <Td>{el.role}</Td>
              <Td>{el.telephone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
