"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  MenuButton,
  Menu,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import TreeList from "./TreeList";
import FetchList from "./FetchList";
import { useStoreTypeTree } from "./TreeList";
import { getCoordinates } from "@/app/dashboard/maps/Map";

export default function NewActivities() {
  const { type } = useStoreTypeTree();
  const [lat, setLat] = useState(0);
  const [lng, setlng] = useState(0);

  const handlePosition = async () => {
    const coords = await getCoordinates();
    if (coords) {
      const { latitude, longitude } = coords;
      setLat(coords.latitude);
      setlng(coords.longitude);
    }
  };
  return (
    <Card>
      <CardHeader>
        <Heading>Add new plantation</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <div className="border py-2 px-3 rounded-md">
            <Menu isLazy>
              <MenuButton fontSize={"small"}>chose a type Of tree</MenuButton>
              <MenuList>
                <FetchList />
              </MenuList>
            </Menu>
          </div>
          <button
            className="px-3 py-1 bg-green-btn text-white rounded-md mt-4 "
            onClick={handlePosition}
          >
            locate me
          </button>
          <form action="">
            <FormControl mt={4}>
              <FormLabel>tree type</FormLabel>
              <Input
                placeholder="tree type"
                type="text"
                fontSize={"smaller"}
                value={type}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>tree Name</FormLabel>
              <Input
                placeholder="tree name"
                type="text"
                fontSize={"smaller"}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>region</FormLabel>
              <Input
                placeholder="Last name"
                type="text"
                fontSize={"smaller"}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <HStack>
                <Input
                  placeholder="Lattitude"
                  type=""
                  fontSize={"smaller"}
                  value={lat}
                />
                <Input
                  placeholder="longitude"
                  type="number"
                  fontSize={"smaller"}
                  value={lng}
                />
              </HStack>
              <div className="text-right"></div>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>picture</FormLabel>
              <Input placeholder="Last name" type="file" fontSize={"smaller"} />
            </FormControl>
            <button className="w-full bg-green-btn py-2 mt-6 rounded-md text-white">
              save
            </button>
          </form>
        </Stack>
      </CardBody>
    </Card>
  );
}
