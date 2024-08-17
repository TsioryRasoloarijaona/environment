import { Button, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react"

export default function PasswordForm() {
    return (
        <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input type='password' />
            <FormLabel>New Password</FormLabel>
            <Input type='password' />
            <Button>Submit</Button>
        </FormControl>
    )
}

