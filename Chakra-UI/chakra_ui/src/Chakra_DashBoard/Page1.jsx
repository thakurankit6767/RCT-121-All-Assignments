import React from "react";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

export default function Page1() {
  return (
    <div>
      <Box boxShadow="lg" w="100%" p={5} color="white">
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
          alt=""
        />
        <Stack spacing={4} direction="row" align="right">
          <Button colorScheme="teal" size="md">
            Sign In
          </Button>
          <Button colorScheme="teal" size="md">
            Sign Up
          </Button>
        </Stack>
        <div></div>
      </Box>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "1000",
          marginBottom: "20px",
        }}
      >
        <h1>
          Find The Right
          <br />
          <span style={{ color: "blue" }}>Four-Day </span>
          <span> </span>
          Week Job
        </h1>

        <Input
          style={{ width: "500px" }}
          placeholder="Type Job Title Or keyword"
        />
        <br />
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">🌐 Remote</Button>
          <Button colorScheme="blue">👨‍💻 Tech</Button>
          <Button colorScheme="blue">⬈ Marketing</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
