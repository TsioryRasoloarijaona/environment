import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, StackDivider, Text } from "@chakra-ui/react"
import Image from "next/image";
import PasswordForm from "../editPassword/passwordForm";

const DetailsCard = () => {
    return (
        <Card width='50%' alignContent='center'>
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
                            Telephone
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            0346985214
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Popover>
                    <PopoverTrigger>
                        <button
                            className="w-full text-center bg-green-btn py-3 font-bold text-white rounded-md"
                        >Edit</button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-gray-primary">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader fontSize='large'>Change Password</PopoverHeader>
                        <PopoverBody><PasswordForm/></PopoverBody>
                    </PopoverContent>
                </Popover>
            </CardFooter>
        </Card>
    );
}

export default DetailsCard;