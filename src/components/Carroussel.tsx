import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import { Heading, Flex } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination]);

export function Carroussel(){
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
      }}
      scrollbar={{ draggable: true }}
      style={{
        width: "100%",
        flex: '1'
      }}
    >
      
      <SwiperSlide>
        <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(europe.svg)"
            bgRepeat="no-repeat"
            bgSize= "cover"
            textAlign= "center"
          >
          <Link href="continents/europa">
            <Heading color="white" fontSize={["3xl", "4xl", "4xl"]} cursor="pointer">Europa</Heading>
          </Link>
          <Heading fontWeight="semibold" color="white" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo.</Heading>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justify="center"
          direction="column"
          bgImage="url(america.jpg)"
          bgRepeat="no-repeat"
          bgSize= "cover"
          textAlign= "center"
        >
          <Heading color="white" lineHeight="80px">America</Heading>
        </Flex>
      </SwiperSlide>
    </Swiper> 
  );
};
