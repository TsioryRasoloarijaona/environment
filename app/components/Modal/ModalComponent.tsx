"use client";

import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  tel: z.string().nonempty("Phone number is required"),
  picture: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "File is required",
    })
    .optional(), 
});

type FormData = z.infer<typeof schema>;

export default function ModalComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState<FileList | null>(null);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const url=process.env.baseUrl
    const formDT=new FormData()
    if(file){
      formDT.append("image",file[0])
      data.picture=file[0]
    }
    const employeeToSave={
      "name":data.name,
      "email":data.email,
      "role":"employee",
      "telephone":data.tel
    }
   // console.log(data.picture+"io ");
    
    // Convertir l'objet JSON en chaîne JSON
    const jsonString = JSON.stringify(employeeToSave);

  // Créer un Blob à partir de la chaîne JSON
  const jsonBlob = newBlob([jsonString], { type: 'application/json' });
  formDT.append("employee", jsonBlob, "employee.json");
    
    
    try {
      
      const response = await fetch('https://environment-pyv8.onrender.com/create/employee', {
        method: 'POST',
        body: formDT,
       
       
      
      });
      if (response.ok) {
        console.log('Employee created successfully');
        onClose();
        reset();
      } else {
        console.error('Error creating employee:', response);
      }
     
  
     
    } catch (error) {
      console.error('Fetch error:', error);
    }
  
    onClose();
    reset();
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} className="bg-gray-800">
        <IoMdAdd className="font-bold" />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          reset();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new employer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel fontSize={'smaller'}>Name</FormLabel>
                <Input
                  placeholder="First name"
                  type="text"
                  fontSize={'smaller'}
                  {...register('name')}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.email}>
                <FormLabel>Mail</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  fontSize={'smaller'}
                  {...register('email')}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.tel}>
                <FormLabel>Phone</FormLabel>
                <Input
                  placeholder="Phone number"
                  type="text"
                  fontSize={'smaller'}
                  {...register('tel')}
                  
                />
                {errors.tel && (
                  <FormErrorMessage>{errors.tel.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.picture}>
                <FormLabel>Picture</FormLabel>
                <Input
                  placeholder="Upload picture"
                  type="file"
                  fontSize={'smaller'}
                  {...register('picture')}
                  onChange={(e)=>{
                    const file=e.target.files
                    if (e.target.files) {
                      setFile(e.target.files); // Met à jour l'état avec le FileList
                    } else {
                      setFile(null);
                    }
                  }}
          
                />
                {errors.picture && (
                  <FormErrorMessage>
                  {errors.name?.message as React.ReactNode}
                </FormErrorMessage>
                
                )}
              </FormControl>

              <ModalFooter>
                <Button
                  type="submit"
                  variant="ghost"
                  className="bg-gray-800 text-white"
                  _hover={{ background: 'gray.500', color: 'white' }}
                >
                  Save
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
function awaitfetch(arg0: string, arg1: { method: string; body: globalThis.FormData; }) {
  throw new Error('Function not implemented.');
}

function newBlob(arg0: string[], arg1: { type: string; }): Blob {
  return new Blob(arg0, arg1);
}

