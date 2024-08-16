'use client';

import React from 'react';
import { Box, FormControl, FormLabel, InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoKeyOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

type FormValues = z.infer<typeof schema>;

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormValues) => {
    console.log('Submitted Data:', data);
  };

  return (
    <Box className="h-screen w-full bg-gray-primary">
      <div className="w-1/2 mx-auto h-full flex items-center">
        <div className="w-full">
          <h1 className="font-bold text-3xl w-full text-center">
            Welcome Back
          </h1>
          <p className="w-full text-center text-sm text-gray-400 mt-3 mb-9">
            Please enter your credentials
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <InputGroup mb={6}>
                <InputRightElement pointerEvents="none">
                  <MdOutlineMailOutline />
                </InputRightElement>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  focusBorderColor="gray.400"
                  {...register('email')}
                />
              </InputGroup>
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <IoKeyOutline />
                </InputRightElement>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  focusBorderColor="gray.400"
                  {...register('password')}
                />
              </InputGroup>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </FormControl>
            <p className="text-xs text-right text-gray-400 mt-2 mb-9">Forgot password?</p>
            <Button
              className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
}
