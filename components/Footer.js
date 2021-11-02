import Links from 'next/link';
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';

const Logo = (props) => {
  return <Image src="/logobranco.png" width="95" height="40" alt="logo"/>;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'grey'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      backgroundColor="#343a40"
      color={'gray.700'}
    >
      <Container
        as={Stack}
        color="white"
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>Fabrine Macedo Beauty Clinic - 2021</Text>
        <Stack direction={'row'} spacing={6}>
          <Link
            href="https://www.instagram.com/fabrinemacedobeautyclinic"
            passHref={true}
            target="_blank"
          >
            <SocialButton label={'Instagram'}>
              <FaInstagram />
            </SocialButton>
          </Link>
          <Link
            href="https://www.facebook.com/fabrinemacedobeautyclinic"
            passHref={true}
            target="_blank"
          >
            <SocialButton label={'Facebook'}>
              <FaFacebookSquare />
            </SocialButton>
          </Link>
          <Link
            href="https://wa.me/5511970433870"
            passHref={true}
            target="_blank"
          >
            <SocialButton label={'WhatsApp'}>
              <FaWhatsapp />
            </SocialButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
