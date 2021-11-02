import Layout from '@/components/Layout';
import ProcedimentosItem from '@/components/ProcedimentosItem';
import { Container, Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import { api } from '@/services/api';

export default function index({ procedimentos }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  console.log(procedimentos);
  return (
    <Layout>
      
      <Container maxW="container.xl"  >
        
          <Slider {...settings}>
            {procedimentos.map((item) => (
              <ProcedimentosItem key={item.id} item={item} />
            ))}
          </Slider>
        
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  let response = await api.get('/api/procedimentos');
  let procedimentos = response.data;
  return {
    props: { procedimentos },
    revalidate: 1,
  };
}
