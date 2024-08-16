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

interface CardComponentProps {
  heading: string;
  src: string;
  title: string;
  description: string;
}

export default function CardComponent({ heading, src, title, description }: CardComponentProps) {
  return (
    <div className="mb-9">
      <Card mx={"auto"} border={"none"} borderRadius={0} p={3}>
        <CardBody >
          <div className="w-full h-[200px] relative p-0">
            <Image
              src={src}
              alt="Green double couch with wooden legs"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <HStack mt="4" spacing="7" w={"100%"} display={"flex"} flexDirection={"column"} align={"top"}>
            <Box marginX={"auto"}>
              <Heading size="sm" mb={3} className="text-purple-primary">
                {heading}
              </Heading>
            </Box>
            <Box w={"100%"}  >
              <Heading size="sm" mb={3}>
                {title}
              </Heading>
              <Text w={"100%"} fontSize={"small"}>
                {description}
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
