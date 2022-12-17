import {
  Box,
  Button,
  Heading,
  HStack,
  Select,
  Show,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";

import { useState } from "react";
import { Fragment } from "react";
import plans from "../../../assets/plans.json";
import PlanDetails from "./PlanDetails";

const contactList = [500, 1500, 2500, 5000, 10000, 50000, 100000];

export default function PlanVariants() {
  const [contacts, setContacts] = useState(500);
  return (
    <Fragment>
      <Box>
        <HStack justify={{ lg: "center" }} w="full" py="6">
          <Stack
            direction={{ base: "column", lg: "row" }}
            justify="center"
            align={{ lg: "center" }}
            border={{ lg: "1px" }}
            w={{ base: "full", lg: "max-content" }}
            textAlign="center"
            gap="4"
          >
            <Box px="4">How many contacts do you have?</Box>
            <Box
              border={{ base: "1px", lg: "none" }}
              borderLeft={{ lg: "1px" }}
            >
              <Select
                value={contacts}
                onChange={(e) => setContacts(e.target.value)}
              >
                {contactList.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
        </HStack>
        <Box position="sticky" top="0" bgColor="white" py="1">
          <Table
            maxW={{ base: "full", lg: "container.lg" }}
            m="auto"
            border="1px"
          >
            <Thead></Thead>
            <Tbody>
              <Tr>
                <Td
                  textAlign="center"
                  px="0"
                  border="1px"
                  minW={{ base: "20", lg: "sm" }}
                >
                  <Heading as="h3" fontSize="lg">
                    Plans
                  </Heading>
                </Td>
                {plans.map((el) => (
                  <Td
                    key={el.variant}
                    border="1px"
                    px={{ base: "0", lg: "4" }}
                    textAlign={{ base: "center", lg: "start" }}
                  >
                    <Heading as="h3" py="2" fontSize="2xl" mt="0" pt="0">
                      {el.variant}
                    </Heading>
                    <Show above="lg">
                      <Text py="4">{el.desc} </Text>
                    </Show>
                    <Box py="2">Starts at</Box>
                    <HStack
                      fontWeight={{ base: "bold", lg: "normal" }}
                      fontSize={{ base: "2xl", lg: "4xl" }}
                      align="start"
                      justify={{ base: "center", lg: "start" }}
                    >
                      <Text>
                        <BiRupee size="1rem" />
                      </Text>
                      <Text>{el.starts_at}</Text>
                    </HStack>
                    <Box py="2">/month*</Box>
                    <Box py="4">
                      <Button
                        variant="solid"
                        colorScheme="yellow"
                        px={{ base: "4", lg: "10" }}
                        border="1px"
                        borderRadius="2xl"
                        fontWeight="semibold"
                        _hover={{
                          boxShadow: "0px 5px black",
                        }}
                      >
                        {el.button_text}
                      </Button>
                    </Box>
                    <Show above="lg">
                      <Text py="4">{el.conditions}</Text>
                    </Show>
                  </Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <PlanDetails />
      </Box>
    </Fragment>
  );
}
