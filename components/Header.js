import Links from 'next/link';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AtSignIcon } from '@chakra-ui/icons';
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { route } from 'next/dist/server/router';

const Linkss = [
  'Procedimentos',
  'Cursos',
  'Sobre',
  'Especialidades',
  'Contato',
];

const NavLink = ({ children }) => (
  <Links
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={children}
  >
    {children}
  </Links>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor="#343a40" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} color="white">
            <Box cursor={'pointer'}>
              <Links href="/">
                <img
                  width="95"
                  height="40"
                  src="https://www.fabrinemacedo.com.br/img/logobranco.png"
                  alt="Logo"
                />
              </Links>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              color="white"
              display={{ base: 'none', md: 'flex' }}
            >
              {Linkss.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <AtSignIcon w={6} h={6} color="white" />
              </MenuButton>
              <MenuList>
                <Link
                  href="https://wa.me/5511970433870"
                  passHref={true}
                  target="_blank"
                >
                  <MenuItem minH="48px">
                    <Flex mr="12px">
                      <FaWhatsapp w={8} h={8} />
                    </Flex>
                    <span ml="12px">+55 11 97043-3870</span>
                  </MenuItem>
                </Link>
                <Link
                  href="https://www.facebook.com/fabrinemacedobeautyclinic"
                  passHref={true}
                  target="_blank"
                >
                  <MenuItem minH="48px">
                    <Flex mr="12px">
                      <FaFacebookSquare w={8} h={8} />
                    </Flex>
                    <span ml="12px">@fabrinemacedobeautyclinic</span>
                  </MenuItem>
                </Link>
                <Link
                  href="https://www.instagram.com/fabrinemacedobeautyclinic"
                  passHref={true}
                  target="_blank"
                >
                  <MenuItem minH="48px">
                    <Flex mr="12px">
                      <FaInstagram w={8} h={8} />
                    </Flex>
                    <span ml="12px">@fabrinemacedobeautyclinic</span>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack
              color="white"
              as={'nav'}
              spacing={4}
              onClick={isOpen ? onClose : onOpen}
            >
              {Linkss.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
