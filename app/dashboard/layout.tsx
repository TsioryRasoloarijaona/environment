import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Slidebar from "./slidebar/Slidebar";
import HeadDash from "./header/HeadDash";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <div className="flex w-screen">
        <div className="w-1/6">
          <Slidebar></Slidebar>
        </div>

        <div className="w-5/6 bg-gray-primary overflow-y-auto h-screen ">
          <div className="fixed top-0 left-1/6 w-5/6">
            <HeadDash />
          </div>
          <div className="mt-16 w-full">{children}</div>
        </div>
      </div>
    </ChakraProvider>
  );
}
