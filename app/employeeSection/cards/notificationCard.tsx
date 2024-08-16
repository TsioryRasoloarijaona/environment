import { Button, Card, CardBody, CardHeader, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react"
import NotificationList from "./notificationList"
import { IoIosMore } from "react-icons/io";

const NotificationCard = () => {
    return (
        <Card mt='5'>
            <CardHeader>
                <Heading size='md'>Notifications</Heading>
            </CardHeader>
            <CardBody>
                <Text size='sm'>You received a new notification.</Text>
                <Popover>
                    <PopoverTrigger>
                        <Button mt='2'><IoIosMore /> More</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>< NotificationList /></PopoverBody>
                    </PopoverContent>
                </Popover>
            </CardBody>
        </Card>
    )
}

export default NotificationCard;