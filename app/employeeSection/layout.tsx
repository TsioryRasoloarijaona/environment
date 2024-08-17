import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./sideBar/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
            <div className="flex w-screen">
                <div className="w-1/6">
                    <Sidebar></Sidebar>
                </div>

                <div className="w-5/6 bg-gray-primary overflow-y-auto  h-screen ">
                    <div className="fixed top-0 left-1/6 w-5/6">
                    </div>
                    <div className="w-full">{children}</div>                
                </div>
            </div>
        </ChakraProvider>
    );
}
