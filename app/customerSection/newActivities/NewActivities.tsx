"use client";

import React, { useState, useEffect } from "react";
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
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import TreeList from "./TreeList";
import FetchList from "./FetchList";
import { useStoreTypeTree } from "./TreeList";
import { getCoordinates } from "@/app/dashboard/maps/Map";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  treeType: z.string().nonempty("Tree type is required"),
  treeName: z.string().nonempty("Tree name is required"),
  region: z.string().nonempty("Region is required"),
  lat: z.string(),
  lng: z.string(),
  picture: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "File is required",
    })
    .optional(), 
});

type FormData = z.infer<typeof schema>;

export default function NewActivities() {
  const { type } = useStoreTypeTree();
  const [lat, setLat] = useState<string>();
  const [lng, setLng] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("treeType", type);
  }, [type, setValue]);

  const handlePosition = async () => {
    const coords = await getCoordinates();
    if (coords) {
      setLat(coords.latitude.toString());
      setLng(coords.longitude.toString());
      setValue("lat", coords.latitude.toString());
      setValue("lng", coords.longitude.toString());
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    reset(); 
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
              <MenuButton fontSize={"small"}>Choose a type of tree</MenuButton>
              <MenuList>
                <FetchList />
              </MenuList>
            </Menu>
          </div>

          <Button
            className="px-3 py-1 bg-green-400 text-white rounded-md mt-4"
            onClick={handlePosition}
          >
            Locate me
          </Button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt={4} isInvalid={!!errors.treeType}>
              <FormLabel>Tree Type</FormLabel>
              <Input
                placeholder="Tree Type"
                type="text"
                fontSize={"smaller"}
                {...register("treeType")}
              />
              {errors.treeType && (
                <FormErrorMessage>{errors.treeType.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.treeName}>
              <FormLabel>Tree Name</FormLabel>
              <Input
                placeholder="Tree Name"
                type="text"
                fontSize={"smaller"}
                {...register("treeName")}
              />
              {errors.treeName && (
                <FormErrorMessage>{errors.treeName.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.region}>
              <FormLabel>Region</FormLabel>
              <Input
                placeholder="Region"
                type="text"
                fontSize={"smaller"}
                {...register("region")}
              />
              {errors.region && (
                <FormErrorMessage>{errors.region.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.lat || !!errors.lng}>
              <FormLabel>Location</FormLabel>
              <HStack>
                <Input
                  placeholder="Latitude"
                  fontSize={"smaller"}
                  {...register("lat")}
                />
                <Input
                  placeholder="Longitude"
                  fontSize={"smaller"}
                  {...register("lng")}
                />
              </HStack>
              {(errors.lat || errors.lng) && (
                <FormErrorMessage>
                  {errors.lat?.message || errors.lng?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.picture}>
              <FormLabel>Picture</FormLabel>
              <Input
                type="file"
                fontSize={"smaller"}
                {...register("picture")}
              />
              {errors.picture && (
                <FormErrorMessage>
                "error"
              </FormErrorMessage>
              )}
            </FormControl>

            <Button
              type="submit"
              className="w-full bg-green-btn text-white mt-4"
            >
              Save
            </Button>
          </form>
        </Stack>
      </CardBody>
    </Card>
  );
}
