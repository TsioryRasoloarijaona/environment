import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import ButtonComponent from "@/app/components/buttons/ButtonComponent";

export default function Activities() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <div className="flex gap-3">
            <div className="border px-3 rounded-full">
              <Text py="2">region - Menabe</Text>
            </div>
            <div className="border px-3 rounded-full">
              <Text py="2">tree - cqctus</Text>
            </div>
            <div className="border px-3 rounded-full">
              <Text py="2">number - 10</Text>
            </div>
            
          </div>
        </CardBody>

        <CardFooter>
          <ButtonComponent text="Location" />
        </CardFooter>
      </Stack>
    </Card>
  );
}
