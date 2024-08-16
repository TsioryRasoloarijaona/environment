import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"

const NotificationList = () => {
    return(
    <Card mt='5 '>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                        2024-01-15
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        You have a new client
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                        2024-01-15
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        You have a new client
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                        2024-01-15
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        You have a new client
                    </Text>
                </Box>
            </Stack>
        </CardBody>
    </Card>
    );
}

export default NotificationList;