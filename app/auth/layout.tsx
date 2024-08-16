import { Box, ChakraProvider, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { FlipWords } from "../components/ui/FlipWord";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <div className=" w-screen h-screen">
        <HStack>
          <div className="relative w-full h-screen">
            <Image
              src="https://i.pinimg.com/564x/a0/9f/d3/a09fd339c4e90ad0a3b92e5de685977c.jpg"
              alt="svg"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            ></Image>
            <div className="text-center h-screen flex items-center justify-center">
              <FlipWords words={["Together","let's" ," make" , "MADAGASCAR" , "GREEN ","AGAIN"]} />
            </div>
          </div>
          {children}
        </HStack>
      </div>
    </ChakraProvider>
  );
}
