'use client';

import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  FormErrorMessage
} from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleAuth from "@/app/components/buttons/GoogleAuth";
import { usePersonStore } from "@/app/components/buttons/GoogleAuth";
import post from '@/app/helper/post/post';
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  image: z.string(),
  telephone: z.string()
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const { name, email , image } = usePersonStore();
  const router = useRouter()
  useEffect(()=>{
    setValue("name", name)
    setValue("email", email)
    setValue("image", image)
  }, [name, email, image])
  const { handleSubmit, control, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Submitted Data:", data);
      console.log(process.env.baseUrl)
      console.log(image)
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", data.password);
      formData.append("image", image);
      setValue("image", image)
      setValue("name", name)
      setValue("email", email)
      formData.append("telephone", data.telephone);

      const response = await post<FormData, { success: boolean, message: string }>({
        url: '/register',
        data,
      });
      router.push("/loaderPage")
      console.log('Response:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box className="h-screen w-full bg-gray-primary">
      <div className="w-1/2 mx-auto h-full flex items-center">
        <div className="w-full">
          <h1 className="font-bold text-3xl w-full text-center">Welcome</h1>
          <p className="w-full text-center text-sm text-gray-400 mt-3 mb-9">
            Please fill all fields
          </p>
          <div className="mb-5">
            <GoogleAuth />
          </div>
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)} isInvalid={!!errors.name || !!errors.email || !!errors.password}>
            <FormLabel>Name</FormLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputGroup mb={6}>
                  <InputRightElement pointerEvents="none">
                    <MdOutlineMailOutline />
                  </InputRightElement>
                  <Input
                    placeholder="Enter your name"
                    focusBorderColor="gray.400"
                    {...field}
                    value={name}
                  />
                </InputGroup>
              )}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>

            <FormLabel>Email</FormLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputGroup mb={6}>
                  <InputRightElement pointerEvents="none">
                    <MdOutlineMailOutline />
                  </InputRightElement>
                  <Input
                    placeholder="Enter your email address"
                    focusBorderColor="gray.400"
                    {...field}
                    value={email}
                  />
                </InputGroup>
              )}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>

            <FormLabel>Phone number</FormLabel>
            <Controller
              name="telephone"
              control={control}
              render={({ field }) => (
                <InputGroup mb={6}>
                  <InputRightElement pointerEvents="none">
                    <MdOutlineMailOutline />
                  </InputRightElement>
                  <Input
                    placeholder="Enter your phone number"
                    focusBorderColor="gray.400"
                    {...field}
                  />
                </InputGroup>
              )}
            />
            <FormErrorMessage>{errors.telephone?.message}</FormErrorMessage>

            <FormLabel>Password</FormLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputGroup mb={6}>
                  <InputRightElement pointerEvents="none">
                    <IoKeyOutline />
                  </InputRightElement>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    focusBorderColor="gray.400"
                    {...field}
                  />
                </InputGroup>
              )}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>

            <p className="text-xs text-right text-gray-400 mt-2 mb-9">
              Forgot password?
            </p>
            <Button
              className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
              type="submit"
            >
              Sign Up
            </Button>
          </FormControl>
        </div>
      </div>
    </Box>
  );
}
