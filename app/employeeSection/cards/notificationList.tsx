import { Box, Card, CardBody, CardHeader, Divider, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"

const NotificationList = () => {
    return (
        <Box mt='5 '>
            <Box mt='2'>
                <Heading size='xs' textTransform='uppercase'>
                    2024-01-15
                </Heading>
                <Text fontSize='sm' mb='2'>
                    You have a new client
                </Text>
                <Divider />
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    2024-01-15
                </Heading>
                <Text fontSize='sm' mb='2'>
                    You have a new client
                </Text>
                <Divider />
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    2024-01-15
                </Heading>
                <Text fontSize='sm' mb='2'>
                    You have a new client
                </Text>
                <Divider />
            </Box>
        </Box>
    );
}

export default NotificationList;