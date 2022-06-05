import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Page2() {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          fontWeight: "900",
          width: "800px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ fontSize: "50px" }}> Technology Jobs </h1>

        <SimpleGrid columns={1} spacing={10}>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            Full-Stack JavaScript Developer (Node.js / React.js / Express.js)
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
          <Box boxShadow="dark-lg" variant="outline" height="100px">
            LEAD GAME DEVELOPER
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
}
