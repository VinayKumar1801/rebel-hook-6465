import { Fragment } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Featured() {
  return (
    <Fragment>
      <Box w="full" bg="gray.100">
        <Box p="4" maxW="container.lg" m="auto" textAlign="center">
          <Heading as="h3" fontSize="2xl" py="6">
            Featured Product:
          </Heading>
          <Box maxW="sm" m="auto">
            <Text fontWeight="medium">
              Create unlimited one-on-one and group services with our new
              <Box as="span" color="blue.500" px="2">
                Advanced Scheduling
              </Box>
              add-on for $8/month.
            </Text>
          </Box>
          <Box py="6">
            <Button
              variant="solid"
              colorScheme="blue"
              borderRadius="full"
              h="12"
              p="4"
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
