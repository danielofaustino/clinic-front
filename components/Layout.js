import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import { colors } from '../styles/colors';

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Header />
      <Flex>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>

        <Flex
          width="100vw"
          backgroundColor={colors.background}
          p={15}
          color="#222"
        >
          {children}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Fabrine Macedo Beauty Clinic',
  description:
    'Clinica de Estética com especialidades como: micropigmentação, extensão de cílios, podologia, estética facial entre outros.',
  keywords: 'micropigmentação,extensão de cílios,podologia,botox',
};
