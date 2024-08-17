"use client"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  createIcon,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,Link as ChakraLink 
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { SearchIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import LogoImg from "../../../../public/logo.png"
import Image from "next/image";
const MotionBox = motion(Box);

import { useEffect } from 'react';
const HeartIcon = createIcon({
  displayName: 'HeartIcon',
  path: <FaHeart cursor="pointer" color="#fff" />,
});

const CartIcon = createIcon({
  displayName: 'CartIcon',
  path: <FaHeart cursor="pointer" color="#fff" />,
});
export const LogIcon = createIcon({
  displayName: 'LogName',
  path: <FaUserCircle cursor="pointer" color="#fff" />
})
interface CartItem {
  nom: string;
  prix: string;
}
interface NavItem {
  label: string;
  link: string;
  children?: NavItem[]; 
}


interface WithSubnavigationProps {
  isFixed: boolean;
  cart: CartItem[] | null;
}

const WithSubnavigation: React.FC<WithSubnavigationProps> = ({ isFixed, cart }) => {
  const { isOpen, onToggle } = useDisclosure();
  const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  console.log(cart);

  return (
      <Box zIndex={999999} justifyContent="space-between" paddingBlock={0}>
          <Flex
              zIndex={999999}
              color={useColorModeValue('gray', 'gray')}
              minH={'60px'}
              py={{ base: 2 }}
              px={{ base: 4 }}
              align={'center'}
              bg={isFixed ? '#5e5e5ebf' : 'transparent'}
              alignItems="center"
              h="4vh"
              position={isFixed ? 'fixed' : 'relative'}
              w="full"
              backdropFilter={isFixed ? 'blur(6px)' : ''}
              transition="ease .5s"
          >
              <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                  <IconButton
                      onClick={onToggle}
                      icon={isOpen ? <CloseIcon color="#fff" w={3} h={3} /> : <HamburgerIcon color="#fff" w={5} h={5} />}
                      variant={'ghost'}
                      aria-label={'Toggle Navigation'}
                  />
              </Flex>
              <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                  <Box>
                  <Image src={LogoImg} className="w-[9rem] pb-2" alt='' onClick={() => scrollToElement("home")} />
                  </Box>

                  <Flex display={{ base: 'none', md: 'flex' }} marginInline="auto">
                      <DesktopNav />
                  </Flex>
              </Flex>

              <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                  <Flex gap={4} display={"flex"}>
                      <Popover>
                          <PopoverTrigger>
                              <Icon
                                  as={SearchIcon}
                                  w={5}
                                  h={5}
                                  paddingRight={1}
                                  cursor="pointer"
                                  color="#fff"
                                  style={{ transition: 'transform 0.3s ease-in-out' }}
                                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
                                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                              />
                          </PopoverTrigger>
                          <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                              <PopoverArrow />
                              <PopoverCloseButton />
                              <PopoverHeader>Search</PopoverHeader>
                              <PopoverBody>
                                  <Input placeholder="you can search what you want" />
                              </PopoverBody>
                          </PopoverContent>
                      </Popover>
                      <Popover>
                          <PopoverTrigger>
                              <Icon
                                  as={HeartIcon}
                                  w={6}
                                  h={6}
                                  cursor="pointer"
                                  color="#090d1e"
                                  style={{ transition: 'transform 0.3s ease-in-out' }}
                                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
                                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                              />
                          </PopoverTrigger>
                          <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                              <PopoverArrow />
                              <PopoverCloseButton />
                              <PopoverHeader>Your like</PopoverHeader>
                              <PopoverBody>
                                  <Text>Product you've liked</Text>
                              </PopoverBody>
                          </PopoverContent>
                      </Popover>
                      <Popover>
                          <PopoverTrigger>
                              <Icon
                                  as={LogIcon}
                                  w={6}
                                  h={6}
                                  cursor="pointer"
                                  color="#fff"
                                  style={{ transition: 'transform 0.3s ease-in-out' }}
                                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
                                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                              />
                          </PopoverTrigger>
                          <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                              <PopoverArrow />
                              <PopoverCloseButton />
                              <PopoverHeader>Login</PopoverHeader>
                              <PopoverBody>
                              <Text>To contribute to our mission of preserving the environment, please log in or create an account. Your involvement helps us make a greater impact.</Text>
                                <Stack direction="row" spacing={4} mt={4}>
                                    <Button colorScheme="green" onClick={() =>      handleNavigation('/auth/login')}>
                                      Login
                                    </Button>
                                    <Button colorScheme="blue" onClick={() => handleNavigation('/auth/register')}>
                                      Register
                                    </Button>
                                </Stack>
                              </PopoverBody>
                          </PopoverContent>
                      </Popover>
                  </Flex>
              </Stack>
          </Flex>

          <Collapse in={isOpen} animateOpacity>
              <MobileNav isFixed={isFixed} />
          </Collapse>
      </Box>
  );
};

interface DesktopSubNavProps {
  label: string;
  href: string;
  subLabel?: string;
}

const DesktopSubNav: React.FC<DesktopSubNavProps> = ({ label, href, subLabel }) => {
  return (
      <Box
          as="a"
          href={href}
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}
      >
          <Stack direction={'row'} align={'center'}>
              <Box>
                  <Text transition={'all .3s ease'} _groupHover={{ color: 'teal.400' }} fontWeight={500}>
                      {label}
                  </Text>
                  <Text fontSize={'sm'}>{subLabel}</Text>
              </Box>
              <Flex
                  transition={'all .3s ease'}
                  transform={'translateX(-10px)'}
                  opacity={0}
                  _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                  justify={'flex-end'}
                  align={'center'}
                  flex={1}
              >
                  <Icon color={'teal.400'} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
          </Stack>
      </Box>
  );
};

const DesktopNav: React.FC = () => {
  const linkHoverColor = useColorModeValue('white', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <Stack gap={5} direction="row" justifyContent="center" alignItems="center">
          {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                  <Popover trigger={'hover'} placement={'bottom-start'}>
                      <PopoverTrigger>
                          <MotionBox
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => scrollToElement(navItem.link)}
                              p={2}
                              fontSize={'sm'}
                              fontWeight={500}
                              color={"#fff"}
                              _hover={{
                                  textDecoration: 'none',
                                  color: linkHoverColor,
                              }}
                          >
                              <Text color="#fff">
                                  {navItem.label}
                              </Text>
                          </MotionBox>
                      </PopoverTrigger>

                      {navItem.children && (
                          <PopoverContent
                              border={0}
                              boxShadow={'xl'}
                              bg={popoverContentBgColor}
                              p={4}
                              rounded={'xl'}
                              minW={'sm'}
                          >
                              <Stack>
                                  {navItem.children.map((child: any) => (
                                      <DesktopSubNav key={child.label} {...child} />
                                  ))}
                              </Stack>
                          </PopoverContent>
                      )}
                  </Popover>
              </Box>
          ))}
      </Stack>
  );
};

interface MobileNavProps {
  isFixed: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isFixed }) => {
  return (
      <Stack
          position="fixed"
          top={isFixed ? "6vh" : ""}
          zIndex={99999}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          display={{ md: 'none' }}
          w="full"
      >
          {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
          ))}
      </Stack>
  );
};

interface MobileNavItemProps {
  label: string;
  children?: Array<{ label: string; link: string }>;
  link: string;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ label, children, link }) => {
  const { isOpen, onToggle } = useDisclosure();

  const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <Stack spacing={4} onClick={children && onToggle}>
          <Box
              py={2}
              px={4}
              justifyContent="space-between"
              alignItems="center"
              onClick={() => scrollToElement(link)}
              _hover={{
                  textDecoration: 'none',
                  backgroundColor: '#5e5e5ebf',
                  borderRadius: '5px',
              }}
          >
              <Text color={useColorModeValue('#000', '#000')}>
                  {label}
              </Text>
              {children && (
                  <Icon
                      as={ChevronDownIcon}
                      transition={'all .25s ease-in-out'}
                      transform={isOpen ? 'rotate(180deg)' : ''}
                      w={6}
                      h={6}
                  />
              )}
          </Box>

          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
              <Stack
                  mt={2}
                  pl={4}
                  borderLeft={1}
                  borderStyle={'solid'}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                  align={'start'}
              >
                  {children &&
                      children.map((child) => (
                          <Box key={child.label} py={2} onClick={() => scrollToElement(child.link)}>
                              {child.label}
                          </Box>
                      ))}
              </Stack>
          </Collapse>
      </Stack>
  );
};

const NAV_ITEMS: NavItem[] = [
  {
      label: 'Home',
      link: 'home',
  },
  {
      label: 'About',
      link: 'about',
  },
  {
      label: 'Popularization',
      link: 'popularization',
  },
  {
      label: 'Tutor',
      link: 'tutor',
  },
];

export default WithSubnavigation