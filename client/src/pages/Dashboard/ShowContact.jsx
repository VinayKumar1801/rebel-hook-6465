import React from "react";
import {
  Box,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const ShowContact = ({ data }) => {
  return (
    <Box w={{ base: "100%", lg: "80%" }} marginLeft="auto" mt="30px">
      <Stack mb="20px">
        <Heading size={"lg"} textAlign={"center"}>
          Your All <Text color="purple.400">Contact Details</Text>
        </Heading>
      </Stack>

      <Stack w="90%" m="auto" boxShadow={"lg"} p={{base:"5",sm:"7",md:"9",lg:"10"}}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Address</Th>
                <Th>Contact</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length &&
                data.map((el, i) => (
                  <Tr>
                    <Td>{i+1}</Td>
                    <Td>{el.c_name}</Td>
                    <Td> {el.c_email}</Td>
                    <Td> {el.c_address}</Td>
                    <Td>{el.c_contact}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

export default ShowContact;
