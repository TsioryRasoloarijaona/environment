import React from "react";
import DetailsCard from "./cards/detailsCard";
import WelcomeCard from "./cards/welcomeCard";
import ActivityTable from "./table/ActivityTable";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import getDecodedId from "../hooks/getId";

export default function page() {
    const id = getDecodedId()
    return (
            <Box>
                <Flex className=" p-4" gap='6'>
                    <WelcomeCard />
                    <DetailsCard id={id}/>
                </Flex>
                <Box mt='3'>
                    <Heading size="xl" ml='35%' my='3'>Activities in your area</Heading>
                    <ActivityTable />
                </Box>
            </Box>
    );
}
