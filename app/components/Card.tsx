import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  HStack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import ButtonComponent from "./buttons/ButtonComponent";
import Likes from "./buttons/Likes";
import Share from "./buttons/Share";
import Link from "next/link";

export default function CardComponent() {
  return (
    <div className="mb-9">
      <Card maxW="sm" border={"none"} borderRadius={0}>
        <CardBody>
          <div className="w-full h-[200px] relative p-0">
            <Image
              src="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
              alt="Green double couch with wooden legs"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <HStack mt="4" spacing="7" align={"top"}>
            <Box marginX={"auto"}>
              <Heading size="sm" mb={3} className="text-purple-primary">
                SEPT
              </Heading>
              <Text className="font-bold text-sm">17</Text>
            </Box>
            <Box>
              <Heading size="sm" mb={3}>
                Live Hei
              </Heading>
              <Text fontSize={"small"}>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              
              <ButtonGroup spacing="3" marginTop={5}>
                <ButtonComponent text="intrested"></ButtonComponent>
                <Likes />
                <Share/>
              </ButtonGroup>
            </Box>
          </HStack>
        </CardBody>
       
      </Card>
    </div>
  );
}
