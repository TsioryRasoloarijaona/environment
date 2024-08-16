'use client'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
export default function ModalComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} className='bg-gray-800'><IoMdAdd className='font-bold '/></Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new employer</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel fontSize={'smaller'}>Name</FormLabel>
                <Input ref={initialRef} placeholder='First name' type='text' fontSize={'smaller'}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>mail</FormLabel>
                <Input placeholder='Last name' type='email'  fontSize={'smaller'}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>tel</FormLabel>
                <Input placeholder='Last name' type='email'  fontSize={'smaller'}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>picture</FormLabel>
                <Input placeholder='Last name' type='file'  fontSize={'smaller'}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button  variant="ghost" className="bg-gray-800 text-white" _hover={{background : 'gray.500' , color : 'white'}}>
                <p className='text-white'>save</p>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }