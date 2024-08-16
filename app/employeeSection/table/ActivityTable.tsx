import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Card } from "@chakra-ui/react"

const ActivityTable = () => {
    return (
        <Card>
            <TableContainer mx='10%'>
                <Table size='md' bgColor='white'>
                    <Thead>
                        <Tr>
                            <Th fontSize='md'>Date</Th>
                            <Th fontSize='md'>Tree Name</Th>
                            <Th isNumeric fontSize='md'>Number</Th>
                            <Th fontSize='md'>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2024-01-15</Td>
                            <Td>Ravintsara</Td>
                            <Td isNumeric>25</Td>
                            <Td><button
                                className="w-20 text-center bg-green-btn py-3 text-white rounded-md"
                            >Confirm</button></Td>
                        </Tr>
                        <Tr>
                            <Td>2024-01-15</Td>
                            <Td>Ravintsara</Td>
                            <Td isNumeric>25</Td>
                            <Td><button
                                className="w-20 text-center bg-green-btn py-3  text-white rounded-md"
                            >Confirm</button></Td>
                        </Tr>
                        <Tr>
                            <Td>2024-01-15</Td>
                            <Td>Ravintsara</Td>
                            <Td isNumeric>25</Td>
                            <Td><button
                                className="w-20 text-center bg-green-btn py-3  text-white rounded-md"
                            >Confirm</button></Td>
                        </Tr>
                        <Tr>
                            <Td>2024-01-15</Td>
                            <Td>Ravintsara</Td>
                            <Td isNumeric>25</Td>
                            <Td><button
                                className="w-20 text-center bg-green-btn py-3  text-white rounded-md"
                            >Confirm</button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default ActivityTable;