import { useNavigate } from "react-router-dom";

import React from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        marginLeft="200px"
        marginTop="20px"
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            navigate("/company");
          }}
        >
         Company
        </Button>

        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            navigate("/employee");
          }}
        >
         Employee
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
