import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
const ShowContact = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Stack
        width={{
          base: "80%",
          md: "80%",
        }}
        mb="50px"
        textAlign={"right"}
      >
        <Heading size={"lg"} textAlign={"center"}>
          Your All <Text color="purple.400">Contact Details</Text>
        </Heading>
      </Stack>
      <Stack w="90%" m="auto">
        <Stack
          border="1px solid grey"
          p={3}
          py={3}
          justifyContent={{
            base: "flex-start",
            md: "flex-end",
          }}
          w="90%"
          direction={{
            base: "column",
            md: "row",
          }}
          alignItems={{ md: "center" }}
        >
          <Heading size={"sm"} w="25%">
            Name
          </Heading>

          <Heading size={"sm"} w="25%">
            Email Id
          </Heading>
          <Heading size={"sm"} w="25%">
            Address
          </Heading>
          <Heading size={"sm"} w="25%">
            Contact
          </Heading>
        </Stack>
        {data.length &&
          data.map((el, i) => (
            <Stack
              border="1px solid grey"
              p={3}
              py={3}
              justifyContent={{
                base: "flex-start",
                md: "space-around",
              }}
              w="100%"
              direction={{
                base: "column",
                md: "row",
              }}
              alignItems={{ md: "center" }}
              key={i}
            >
              <Heading size={"sm"} w="25%">
                {el.c_name}
              </Heading>

              <Heading size={"sm"} w="25%">
                {el.c_email}
              </Heading>
              <Heading size={"sm"} w="25%">
                {el.c_address}
              </Heading>
              <Heading size={"sm"} w="25%">
                {el.c_contact}
              </Heading>
              <Stack></Stack>
            </Stack>
          ))}
      </Stack>
    </>
  );
};

export default ShowContact;
