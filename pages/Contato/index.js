import Layout from '@/components/Layout';
import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';

export default function index() {
  return (
    <Layout title="Contato">
      <Box w="100%" alignItems="center" justifyContent="center">
        <iframe
          width="100%"
          height="500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.900578206055!2d-46.709598185292535!3d-23.572013984677557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5732fdfee793%3A0xd73189e0246b7026!2sFabrine%20Macedo%20Beauty%20Artist!5e0!3m2!1sen!2sbr!4v1615474415034!5m2!1sen!2sbr"
          allowFullScreen
        ></iframe>
      
        <Text color={'white'} fontSize={'xl'} textAlign="center" pt="5">
          Av. Vital Brasil, 305 - Sala 1310 - Butanta - São Paulo - SP
        </Text>
      </Box>
    </Layout>
  );
}
