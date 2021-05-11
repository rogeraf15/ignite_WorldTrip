import { Grid, GridItem } from '@chakra-ui/react';
import { FeatureItem } from './FeatureItem';

export function Features(){
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <FeatureItem srcIcon="cocktail.svg" text="vida noturna"/>
      </GridItem>
      <GridItem>
        <FeatureItem srcIcon="surf.svg" text="praia"/>
      </GridItem>
      <GridItem>
        <FeatureItem srcIcon="building.svg" text="moderno"/>
      </GridItem>
      <GridItem>
        <FeatureItem srcIcon="museum.svg" text="clássico"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <FeatureItem srcIcon="earth.svg" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}
