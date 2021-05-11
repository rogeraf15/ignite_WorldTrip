import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface FeatureItemProps {
  srcIcon: string;
  text: string;
}

export function FeatureItem({ srcIcon, text }: FeatureItemProps){
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return(
    <Flex direction={["row", "column"]} align="center" justify="center">  
      {
        isMobile 
          ? <Image src={srcIcon} w="85px" h="85px" mb="6"/> 
          : <Text color="yellow" fontSize="4xl" mr="2">·</Text>
      }
      <Text fontWeight="600" fontSize={["md", "xl", "2xl"]}>{text}</Text>
    </Flex>
  )
}