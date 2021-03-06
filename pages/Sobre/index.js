import Layout from '@/components/Layout';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function index() {
  return (
    <Layout title="Sobre Nós">
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
         
            <Heading>Sobre nós</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Fabrine Macedo teve seu primeiro contato com o mundo da beleza aos
              12 anos mas foi em 2014 cursando a faculdade de Publicidade e
              Propaganda que percebeu sua vocação e verdadeira paixão pela
              Estetica, a partir daí iniciando de fato sua jornada profissional.
              Com muita dedicação e especializações, sempre está em busca de
              conhecimento para evoluir as técnicas de trabalho com foco em
              Embelezamento do Olhar em seus procedimentos e consolidando o
              conceito de “Atendimento Personalizado” para as clientes em um
              ambiente tranquilo e aconchegante. Além de Master em Design de
              sobrancelhas, Micropigmentação, Revitalização Labial e Extensão de
              Cílios também ministra Cursos Profissionalizantes com uma teoria
              Sólida e Prática Consistente inserindo assim novos Profissionais
              qualificados no mercado da beleza.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.100'}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={'yellow.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={'yellow.100'}
                text={'Mais de 2 mil Clientes atendidas'}
              />
            
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={'purple.100'}
                text={'90% das Alunas abriram seu próprio negócio'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/imagens/sobre/fabrine.jpeg'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
