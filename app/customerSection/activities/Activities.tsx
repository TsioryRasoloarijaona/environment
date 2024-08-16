import React from "react";
import { Card, Stack, CardBody, Text, CardFooter } from "@chakra-ui/react";
import ButtonComponent from "@/app/components/buttons/ButtonComponent";
import Image from "next/image";

export default function Activities() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <div className="w-[250px] relative">
        <Image
          src="https://i.pinimg.com/564x/2b/b6/f9/2bb6f9b59bd5c43c76b31f3f135be7bc.jpg"
          alt="Caffe Latte"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>

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
