import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="green.900"
      color="gray.200"
      py={10}
      px={{ base: 5, md: 20 }}
      mt={10}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
      >
        {/* Colonne pour les liens de navigation */}
        <Stack
          spacing={4}
          mb={{ base: 5, md: 0 }}
          width={{ base: "100%", md: "30%" }}
        >
          <Text fontWeight="bold" fontSize="lg" color="green.300">
            Navigation
          </Text>
          <HStack spacing={6} flexWrap="wrap">
            <Link href="/" _hover={{ color: "green.300" }} fontSize="sm">
              Home
            </Link>
            <Link href="/about" _hover={{ color: "green.300" }} fontSize="sm">
              About Us
            </Link>
            <Link
              href="/services"
              _hover={{ color: "green.300" }}
              fontSize="sm"
            >
              Services
            </Link>
            <Link href="/contact" _hover={{ color: "green.300" }} fontSize="sm">
              Contact
            </Link>
          </HStack>
        </Stack>

        <Stack
          spacing={4}
          mb={{ base: 5, md: 0 }}
          width={{ base: "100%", md: "30%" }}
        >
          <Text fontWeight="bold" fontSize="lg" color="green.300">
            Contact Us
          </Text>
          <Text fontSize="sm">Email: contact@environment.com</Text>
          <Text fontSize="sm">Phone: +261 38 13 277 37</Text>
          <Text fontSize="sm">Address: Antananarivo 101</Text>
        </Stack>

        <Stack spacing={4} width={{ base: "100%", md: "30%" }}>
          <Text fontWeight="bold" fontSize="lg" color="green.300">
            Follow Us
          </Text>
          <HStack spacing={6}>
            <IconButton
              as={Link}
              href="https://www.facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook />}
              isRound
              variant="outline"
              colorScheme="green"
              _hover={{ bg: "green.300", color: "white" }}
            />
            <IconButton
              as={Link}
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              isRound
              variant="outline"
              colorScheme="green"
              _hover={{ bg: "green.300", color: "white" }}
            />
            <IconButton
              as={Link}
              href="https://www.instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              isRound
              variant="outline"
              colorScheme="green"
              _hover={{ bg: "green.300", color: "white" }}
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              isRound
              variant="outline"
              colorScheme="green"
              _hover={{ bg: "green.300", color: "white" }}
            />
          </HStack>
        </Stack>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        mt={8}
        borderTop="1px"
        borderColor="gray.600"
        pt={4}
      >
        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} Environment. All rights reserved.
        </Text>
        <HStack spacing={6}>
          <Link href="/privacy" _hover={{ color: "green.300" }} fontSize="sm">
            Privacy Policy
          </Link>
          <Link href="/terms" _hover={{ color: "green.300" }} fontSize="sm">
            Terms of Service
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
