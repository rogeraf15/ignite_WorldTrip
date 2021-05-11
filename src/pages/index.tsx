import { Box, Flex, Heading } from '@chakra-ui/react';
import { Carroussel } from '../components/Carroussel';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Features } from '../components/Features';

export default function Home() {
  return (
    <Box h="100vh" direction="column">
      <Header />

      <Banner />

      <Features />

      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray" my={["9", "20"]}/>

      <Flex alignItems="center" justifyContent="center" direction="column"> 
        <Heading
          textAlign="center" 
          fontWeight="500"
          mb={["5", "14"]} 
          fontSize={["lg", "3xl", "4xl"]}
          >
            Vamos nessa?<br />Então escolha seu continente
          </Heading>
      </Flex>

      <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
        <Carroussel />
      </Flex>

    </Box>
  )
}
