"use client"

import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, StackDivider, Text } from "@chakra-ui/react"
import Image from "next/image";
import PasswordForm from "../editPassword/passwordForm";
import getDecodedId from "@/app/hooks/getId";
import { useEffect, useState } from "react";
import axios from "axios";

interface Employee {
    id: string,
    name: string,
    email: string,
    telephone: string,
    image: string
}

const DetailsCard = () => {
    const [employee, setEmployee] = useState<Employee>();
    const id = getDecodedId()

    useEffect(() => {
        const fetchTrees = async () => {
          try {
            const response = await axios.get<Employee>('https://environment-pyv8.onrender.com/employee/'+id);
            setEmployee(response.data);
          } catch (error) {
            console.error('Error fetching tree data:', error);
          }
        };
    
        fetchTrees();
      }, []);
    return (
        <Card width='50%' alignContent='center'>
            <CardHeader>
                <div className="">
                    <Avatar
                        size="xl"
                        name="Christian Nwamba"
                        src={employee?.image}
                    />
                </div>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Name
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {employee?.name}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Email
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {employee?.email}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Telephone
                        </Heading>
                        <Text pt="2" fontSize="sm">
                           {employee?.telephone}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Popover>
                    <PopoverTrigger>
                        <button
                            className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
                        >Edit</button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-gray-primary">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader fontSize='large'>Change Password</PopoverHeader>
                        <PopoverBody><PasswordForm/></PopoverBody>
                    </PopoverContent>
                </Popover>
            </CardFooter>
        </Card>
    );
}

export default DetailsCard;