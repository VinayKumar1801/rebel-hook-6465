import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { Fragment } from "react";
import plandata from "../../assets/website_plans.json";

export default function WebsitePlans() {
  return (
    <Fragment>
      <Box>
        <Box maxW="container.lg" m="auto" p="4">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "10", lg: "1" }}
          >
            {plandata.map((el) => (
              <VStack
                key={el.title}
                align="start"
                border="1px"
                borderColor="gray.400"
                borderRadius="md"
                gap="6"
                p="6"
                py="8"
                minW="xs"
                justify="space-between"
              >
                <Box fontSize="2xl" fontWeight="semibold">
                  {el.title}
                </Box>
                <Box>{el.desc}</Box>
                <Box>
                  <Text>Starts at </Text>
                  <Flex>
                    <Box>
                      <BiRupee />
                    </Box>
                    <Box fontSize="4xl" fontWeight="semibold">
                      {el.price}
                    </Box>
                  </Flex>
                  <Text>/month</Text>
                  <Text>+{el.fee} transaction fee and</Text>
                  <Text>Stripe processing fees*</Text>
                </Box>
                <Box w="full">
                  <Button
                    variant="solid"
                    w="full"
                    colorScheme="telegram"
                    py="2"
                    h="12"
                    fontWeight="medium"
                    borderRadius="full"
                    _hover={{
                      boxShadow: "0px 5px #27546a",
                      transform: "translateY(-8px)",
                    }}
                  >
                    {el.btn_text}
                  </Button>
                </Box>
              </VStack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Fragment>
  );
}
