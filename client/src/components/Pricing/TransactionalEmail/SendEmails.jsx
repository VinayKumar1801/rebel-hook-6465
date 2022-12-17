import { Box, Button, Flex } from "@chakra-ui/react";
import { Fragment } from "react";

export default function SendEmail() {
  return (
    <Fragment>
      <Box bg="yellow.400" py="10">
        <Flex direction="column" align="center" gap="6">
          <Box fontSize="3xl"> Start sending transactional emails</Box>
          <Box>
            <Button
              bg="inherit"
              rounded="full"
              border="1px"
              variant="outline"
              borderColor="black"
              _hover={{
                boxShadow: "0px 6px black",
                transform: "translateY(-6px)",
              }}
            >
              Try For Free
            </Button>
          </Box>
        </Flex>
      </Box>
    </Fragment>
  );
}
