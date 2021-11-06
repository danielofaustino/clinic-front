import Layout from '@/components/Layout';
import { Container } from '@chakra-ui/react';
import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import {
  SimpleGrid,
  Feature,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react';

import { api } from '@/services/api';

export default function ProcedimentoPage({ item }) {
  console.log(item);
  return (
    <Layout title="Sobre Nós">
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>{item.nome}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {item.description}
            </Text>
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={'gray.100'} />}
            ></Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={`/${item.imagem}`}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  let response = await api.get('/api/procedimentos');
  const procedimentos = response.data;

  const paths = procedimentos.map((procedimento) => ({
    params: { slug: procedimento.nome },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await api.get(`/api/procedimentos/${slug}`);

  const procedimentos = res.data;

  return {
    props: {
      item: procedimentos[0],
    },
    revalidate: 1,
  };
}
