import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface buttonProps {
    text : ReactNode,

}

const ButtonComponent : React.FC<buttonProps> =({text}) => {
  return (
    <>
      <Button variant="ghost" className="bg-purple-primary text-white" _hover={{background : 'gray.500' , color : 'white'}}>
        <p className="text-white text-sm">{text}</p>
      </Button>
    </>
  );
}

export default ButtonComponent
