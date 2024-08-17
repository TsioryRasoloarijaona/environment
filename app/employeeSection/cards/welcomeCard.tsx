import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

const WelcomeCard = () => {
    return (
        <Card alignItems='center' 
        bgImage='/forest-bg.jpg'
        bgRepeat='no-repeat'
        bgSize='cover' >
            <CardBody alignItems='center' mt='5'>
                <Heading size='xl' color='white'>Here is your employee space. View all your informations</Heading>
            </CardBody>
        </Card>
    )
}

export default WelcomeCard;