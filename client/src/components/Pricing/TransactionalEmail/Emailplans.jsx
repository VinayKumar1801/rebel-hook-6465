import {
  Box,
  Button,
  Checkbox,
  Input,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import emailCredits from "../../../assets/email_credits.json";

export default function EmailPlans() {
  return (
    <Fragment>
      <Box>
        <Box maxW="container.lg" m="auto" py="10">
          <Box p="4">
            <Text fontSize="xl">
              Transactional email plans designed for developers
            </Text>
          </Box>
          <Box>
            <Stack direction={{ base: "column", lg: "row" }} gap="6">
              <VStack
                border={{ lg: "1px" }}
                borderColor={{ lg: "gray.400" }}
                gap="4"
                align="start"
              >
                <VStack align="start" p={{ base: "4", lg: "8" }} gap="4">
                  <Box>
                    <Text>Enter your estimated sends per month</Text>
                  </Box>
                  <Box w="full">
                    <Input placeholder="Enter email estimate" w="full" h="16" />
                  </Box>
                  <Box>
                    <Checkbox>
                      Dedicated IP for $29.95 / month (Optional)
                    </Checkbox>
                  </Box>
                </VStack>
                <VStack
                  borderTop="1px"
                  bg="blue.100"
                  w="full"
                  align="start"
                  gap="4"
                  p={{ base: "4", lg: "8" }}
                >
                  <Text>Your Plan</Text>
                  <Text fontSize={{ lg: "xl" }}>
                    $0.00 /month | 0 blocks @ $20/block
                  </Text>
                  <Box>
                    <Text fontSize={{ lg: "3xl" }}>$0.00</Text>
                    <Text>Estimated Cost Per Month</Text>
                    <Text>+ your Mailchimp Monthly Plan</Text>
                  </Box>
                  <Box py="4">
                    <Button
                      variant="solid"
                      colorScheme="yellow"
                      borderRadius="full"
                    >
                      Try for Free
                    </Button>
                  </Box>
                </VStack>
              </VStack>
              <Box
                border={{ lg: "1px" }}
                borderColor={{ lg: "gray.400" }}
                py="4"
                px="2"
                flex="1"
                w="full"
              >
                <Box p="4">
                  <Text fontSize={{ base: "xl", lg: "2xl" }} textAlign="center">
                    Each block is a credit for 25,000 emails
                  </Text>
                </Box>
                <Box w="full">
                  <Table>
                    <Thead borderBottom="2px">
                      <Tr>
                        <Th fontSize="sm">
                          <Box>TOTAL BLOCKS</Box>
                        </Th>
                        <Th fontSize="sm">
                          <Box>EMAILS PER MONTH</Box>
                        </Th>
                        <Th fontSize="sm">
                          <Box>PRICE PER BLOCK</Box>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {emailCredits.map((el) => (
                        <Tr key={el.email}>
                          <Td h="16">{el.block}</Td>
                          <Td>{el.email}</Td>
                          <Td>{el.price}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
