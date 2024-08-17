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
import FetchList from "./FetchList";
import { getCoordinates } from "@/app/dashboard/maps/Map";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const schema = z.object({
  treeType: z.string().nonempty("Tree type is required"),
  treeName: z.string().nonempty("Tree name is required"),
  region: z.string().nonempty("Region is required"),
  lat: z.string(),
  lng: z.string(),
  picture: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: "File is required",
    })
    .optional(),
});

type FormData = z.infer<typeof schema>;

export default function NewActivities() {
  const [lat, setLat] = useState<string>("");
  const [lng, setLng] = useState<string>("");
  const [treeTypeId, setTreeTypeId] = useState<string>("");

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
    setValue("lat", lat ?? "");
    setValue("lng", lng ?? "");
  }, [lat, lng, setValue]);

  const handlePosition = async () => {
    const coords = await getCoordinates();
    if (coords) {
      setLat(coords.latitude.toString());
      setLng(coords.longitude.toString());
    }
  };

  const onTreeTypeSelect = (id: string) => {
    setTreeTypeId(id);
    setValue("treeType", id);
  };

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    const token = localStorage.getItem('token');
    let idUser = '';

    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        idUser = decoded.sub;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }

    // Créer un objet JSON pour les plantes
    const plantsData = [{
      date: new Date().toISOString().split('T')[0],
      name: data.treeName,
      idUser: idUser,
      location: {
        test: "test",
        latitude: parseFloat(data.lat),
        longitude: parseFloat(data.lng),
      },
      idTreeType: treeTypeId,
    }];

    // Convertir l'objet JSON en chaîne JSON
    const jsonString = JSON.stringify(plantsData);

    // Créer un Blob à partir de la chaîne JSON
    const jsonBlob = new Blob([jsonString], { type: 'application/json' });

    // Ajouter le Blob et le fichier au FormData
    formData.append("plants", jsonBlob);
    if (data.picture && data.picture.length > 0) {
      formData.append("images", data.picture[0]);
    }

    try {
      const response = await axios.post(
        'https://environment-pyv8.onrender.com/plants/save',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
          },
        }
      );
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:",error);
    }

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
                <FetchList onTreeTypeSelect={onTreeTypeSelect} />
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
                value={treeTypeId}
                readOnly
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
                  {errors.picture.message}
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
