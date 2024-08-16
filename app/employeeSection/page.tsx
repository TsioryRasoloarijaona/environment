import React from "react";
import DetailsCard from "./cards/detailsCard";
import WelcomeCard from "./cards/welcomeCard";
import ActivityTable from "./table/ActivityTable";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <Box>
            <Flex className=" p-4" gap='6'>
                <WelcomeCard />
                <DetailsCard />
            </Flex>
            <Box mt='3'>
                <Heading size="xl" ml='35%' my='3'>Activities in your area</Heading>
                <ActivityTable />
            </Box>
        </Box>
    );
}
