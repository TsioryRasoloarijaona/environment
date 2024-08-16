"use client";
import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import GoogleAuth from "@/app/components/buttons/GoogleAuth";
import { usePersonStore } from "@/app/components/buttons/GoogleAuth";

export default function page() {
    const { name, email } = usePersonStore();
  return (
    <Box className="h-screen w-full bg-gray-primary">
      <div className="w-1/2 mx-auto h-full flex items-center">
        <div className="w-full">
          <h1 className="font-bold text-3xl w-full text-center">Welcome</h1>
          <p className="w-full text-center text-sm text-gray-400 mt-3 mb-9">
            please fill all fields
          </p>
          <div className="mb-5">
            <GoogleAuth/>
          </div>
          <FormControl
            onSubmit={() => {
              console.log("submited");
            }}
        
          >
            <FormLabel>Name</FormLabel>
            <InputGroup mb={6}>
              <InputRightElement pointerEvents="none">
                <MdOutlineMailOutline />
              </InputRightElement>
              <Input
                type="email"
                placeholder="Enter your email address"
                focusBorderColor="gray.400"
                defaultValue={name}
              />
            </InputGroup>

            <FormLabel>Email</FormLabel>
            <InputGroup mb={6}>
              <InputRightElement pointerEvents="none">
                <MdOutlineMailOutline />
              </InputRightElement>
              <Input
                type="email"
                placeholder="Enter your email address"
                focusBorderColor="gray.400"
                value={email}
                readOnly
              />
            </InputGroup>
            <FormLabel>password</FormLabel>
            <InputGroup>
              <InputRightElement pointerEvents="none">
                <IoKeyOutline />
              </InputRightElement>
              <Input
                type="password"
                placeholder="Enter your password"
                focusBorderColor="gray.400"
              />
            </InputGroup>
            <FormLabel>select file</FormLabel>
            <InputGroup>
              <InputRightElement pointerEvents="none">
                <IoKeyOutline />
              </InputRightElement>
              <Input
                type="file"
                placeholder="Enter your password"
                focusBorderColor="gray.400"
              />
            </InputGroup>
            
            <p className="text-xs text-right text-gray-400 mt-2 mb-9">
              forgot password?
            </p>
            <button
              className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
              type="submit"
            >
              sign up
            </button>
          </FormControl>
        </div>
      </div>
    </Box>
  );
}
