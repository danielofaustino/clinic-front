import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { colors } from '../../styles/colors';
import Link from 'next/link';

export default function ProcedimentosItem({ item }) {
  console.log('carousel ==>', item);
  return (
    <Center py={12} mx={2}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue(colors.background)}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${item.imagem})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Link href={`/Procedimentos/${item.nome}`} passHref>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={item.imagem}
              alt={item.nome}
            />
          </Link>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
            {item.nome}
          </Text>
          <Stack direction={'row'} align={'center'}></Stack>
        </Stack>
      </Box>
    </Center>
  );
}
