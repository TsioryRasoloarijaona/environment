"use client"

import { CheckIcon } from "@chakra-ui/icons";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Card, Icon, Button } from "@chakra-ui/react"
import { useState } from "react";

const ActivityTable = () => {
    const [confirmed, setConfirmed] = useState<boolean>(false)

    const handleClick = () => {
        setConfirmed(true)
    }
    return (
        <Card>
            <TableContainer mx='10%'>
                <Table size='md' bgColor='white'>
                    <Thead>
                        <Tr>
                            <Th fontSize='md'>Date</Th>
                            <Th fontSize='md'>Tree Name</Th>
                            <Th fontSize='md'>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2024-01-15</Td>
                            <Td>Ravintsara</Td>
                            <Td>{confirmed ? (
                                <Icon as={CheckIcon} color="green.500" /> 
                            ) : (<button
                                className="w-20 text-center bg-green-btn py-3 text-white rounded-md" onClick={handleClick}
                            >Confirm</button>)}</Td>
                        </Tr>
                        <Tr>
                            <Td>2024-01-16</Td>
                            <Td>Eucalyptus</Td>
                            <Td>{confirmed ? (
                                <Icon as={CheckIcon} color="green.500" /> 
                            ) : (<button
                                className="w-20 text-center bg-green-btn py-3 text-white rounded-md" onClick={handleClick}
                            >Confirm</button>)}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default ActivityTable;