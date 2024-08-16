import { ChakraProvider , HStack  } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <div className=" w-screen h-screen">
        <HStack>
          <div className="relative w-full h-[90vh]">
            <Image
              src={"/login-pic.png"}
              alt="svg"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            ></Image>
          </div>
          {children}
        </HStack>
      </div>
    </ChakraProvider>
  );
}
