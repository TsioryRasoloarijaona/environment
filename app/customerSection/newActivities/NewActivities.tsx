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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import ButtonComponent from "@/app/components/buttons/ButtonComponent";

export default function NewActivities() {
  return (
    <Card>
      <CardHeader>
        <Heading>Add new plantation</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <form action="">
            <FormControl mt={4}>
              <FormLabel>tree Name</FormLabel>
              <Input
                placeholder="Last name"
                type="email"
                fontSize={"smaller"}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>region</FormLabel>
              <Input
                placeholder="Last name"
                type="email"
                fontSize={"smaller"}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Localisation</FormLabel>
              <Input
                placeholder="Last name"
                type="email"
                fontSize={"smaller"}
              />
              <div className="text-right">
                <button className="px-3 py-1 bg-green-btn text-white rounded-md mt-4 ">
                  locate me
                </button>
              </div>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>picture</FormLabel>
              <Input placeholder="Last name" type="file" fontSize={"smaller"} />
            </FormControl>
            <button className="w-full bg-green-btn py-2 mt-6 rounded-md text-white">save</button>
          </form>
        </Stack>
      </CardBody>
    </Card>
  );
}
