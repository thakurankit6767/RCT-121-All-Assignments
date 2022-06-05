import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Three() {
  return (
    <div>
      <Grid
        h="300px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={5}
      >
        <GridItem rowSpan={[1, 2]} colSpan={[5, 3]} bg="orange" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 3]} bg="orange" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 6]} bg="red" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="blue" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="blue" />
        <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="blue" />
      </Grid>
    </div>
  );
}
