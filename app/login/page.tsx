'use client'
import {
  HStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { log } from "console";

export default function page() {
  return (
    <div className=" w-screen h-screen">
      <HStack>
        <div className="relative w-full h-[90vh]">
          <Image
            src={"/work.jpg"}
            alt="svg"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          ></Image>
        </div>
        <Box className="h-screen w-full bg-gray-primary">
          <div className="w-1/2 mx-auto h-full flex items-center">
            <div className="w-full">
              <h1 className="font-bold text-3xl w-full text-center">
                Welcome Back
              </h1>
              <p className="w-full text-center text-sm text-gray-400 mt-3 mb-9">
                please enter your credentials
              </p>
              <FormControl onSubmit={()=> {console.log('submited')}}>
                <FormLabel>Email</FormLabel>
                <InputGroup mb={6}>
                  <InputRightElement pointerEvents="none">
                    <MdOutlineMailOutline/>
                  </InputRightElement>
                  <Input type="email" placeholder="Enter your email address" focusBorderColor="gray.400"/>
                </InputGroup>
                <FormLabel>password</FormLabel>
                <InputGroup>
                  <InputRightElement pointerEvents="none">
                    <IoKeyOutline/>
                  </InputRightElement>
                  <Input type="password" placeholder="Enter your password" focusBorderColor="gray.400"/>
                </InputGroup>
                <p className="text-xs text-right text-gray-400 mt-2 mb-9">forgot password?</p>
                <button className="w-full text-center bg-purple-primary py-3 font-bold text-white rounded-md" type="submit">sign in</button>
              </FormControl>
            </div>
          </div>
        </Box>
      </HStack>
    </div>
  );
}
