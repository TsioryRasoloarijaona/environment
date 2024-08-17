import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Box,
  Text,
  StackDivider,
  Avatar,
} from "@chakra-ui/react";
import { User } from "@/app/interfaces/userInterface";
import {get} from "@/app/helper/fecth/get"

export default async function Profile({ id }: { id: string }) {
  const user : User = await get('https://environment-pyv8.onrender.com/employee/'+id)
  
  return (
    <Card>
      <CardHeader>
        <div className="">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src={user.image}
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
              {user.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              email
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              REGION
            </Heading>
            <Text pt="2" fontSize="sm">
              Menabe
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              total plantations
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.plantCount}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
