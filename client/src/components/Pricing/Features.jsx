import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import features from "../../assets/pricing_features.json";

export default function Features() {
  return (
    <Fragment>
      <Box
        py="8"
        px={{ base: "8", lg: "4" }}
        maxW={{ lg: "container.lg" }}
        m="auto"
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          wrap="wrap"
          gap={{ base: "8", lg: "16" }}
        >
          {features.map((el, i) => (
            <Stack
              direction="column"
              m="-1"
              align="start"
              justify="space-between"
              key={el.title}
              gap="4"
              p="4"
              py="8"
              borderBottom={{ base: "1px" }}
              maxW="md"
              minW={{ lg: "md" }}
              borderRight={{ lg: "2px" }}
              borderColor={{ lg: "blackAlpha.600" }}
            >
              <Text fontWeight={{ base: "semibold" }} fontSize={{ lg: "3xl" }}>
                {el.title}
              </Text>
              <Text>{el.details}</Text>
              <Box>
                <Button
                  border="1px"
                  borderRadius="full"
                  variant="outline"
                  borderColor="blackAlpha.500"
                  _hover={{ boxShadow: "0px 5px black" }}
                >
                  {el.btn_text}
                </Button>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Fragment>
  );
}
