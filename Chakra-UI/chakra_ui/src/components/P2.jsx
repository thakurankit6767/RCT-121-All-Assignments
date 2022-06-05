import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Two() {
  return (
    <div>
      <Grid
        h="300px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={5}
      >
        <GridItem rowSpan={[1, 3]} colSpan={[5, 4]} bg="purple" />
        <GridItem rowSpan={[1, 5]} colSpan={[5, 1]} bg="tomato" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 4]} bg="skyblue" />
      </Grid>
    </div>
  );
}
