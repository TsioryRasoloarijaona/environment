import React, { useState , useEffect } from "react";
import axios from "axios";
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



export default function Profile({ id }: { id: string }) {
 
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`https://environment-pyv8.onrender.com/employee/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);
  
  return (
    <Card>
      <CardHeader>
        <div className="">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src={user?.image}
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
              {user?.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              email
            </Heading>
            <Text pt="2" fontSize="sm">
              {user?.email}
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
              {user?.plantCount}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
