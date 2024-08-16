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

export default function Profile() {
  return (
    <Card>
      <CardHeader>
        <div className="">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
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
              RASOLOARIJAONA Nahoma Fy tsiory
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              email
            </Heading>
            <Text pt="2" fontSize="sm">
              hei.tsiory@gmail
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
              200
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
