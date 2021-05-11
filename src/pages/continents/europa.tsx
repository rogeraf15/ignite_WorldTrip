import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Cities } from '../../components/Cities';


export default function Europa() {
  return(
    <Flex direction="column">
      <Header />
      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        backgroundImage="url(/europe2.svg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          color="white"
          fontSize={["1.75rem", "5xl"]}
          fontWeight="medium"
        >
          Europa
        </Heading>
      </Flex>
      
      <Flex
        direction="column"
        maxWidth="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <Details />
        <Cities />
      </Flex>
    </Flex>
  )
}