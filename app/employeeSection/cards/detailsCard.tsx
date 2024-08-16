import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import Image from "next/image";

const DetailsCard = () => {
    return (
        <Card width='50%' alignItems='center'>
            <CardHeader>
                <div className="">
                    <Avatar
                        size="xl"
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                    />
                </div>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Name
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            RASOLOARIJAONA Nahoma Fy tsiory
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            email
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            hei.tsiory@gmail
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            REGION
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            Menabe
                        </Text>
                    </Box>
                    <button
                        className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
                        type="submit"
                    >Edit</button>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default DetailsCard;