import Layout from '@/components/Layout';
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <Layout title="Página Não Encontrada">
      <Box p={4} color="white">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} alignItems="center" >
          <Heading fontSize={'3xl'}>Página Não Encontrada</Heading>
          <FaTools  fontSize="50"/>
          <Text color={'white'} fontSize={'xl'}>
            Desculpe ! não existe nada aqui.
          </Text>
        </Stack>
      </Box>
    </Layout>
  );
}
