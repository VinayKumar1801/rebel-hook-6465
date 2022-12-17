import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import developerFeatures from "../../../assets/developer_features.json";

export default function DeveloperFeatures() {
  return (
    <Fragment>
      <Box py="10">
        <Box maxW="container.xl" m="auto">
          <Box textAlign="center" fontSize={{ base: "2xl" }} fontWeight="light">
            <Text>Made for developers to send emails that reach inboxes</Text>
          </Box>
          <Box>
            <Flex
              direction={{ base: "column", lg: "row" }}
              wrap="wrap"
              justify={{ lg: "space-around" }}
              align={{ base: "center", lg: "start" }}
              gap={{ base: "10" }}
              p="8"
            >
              {developerFeatures.map((el) => (
                <Box
                  key={el.title}
                  textAlign="center"
                  maxW={{ lg: "xs" }}
                  py={{ lg: "8" }}
                >
                  <Box>
                    <Image src={el.image} m="auto" />
                  </Box>
                  <Box fontSize="xl" fontWeight="semibold" py="2">
                    <Text>{el.title}</Text>
                  </Box>
                  <Box py="2">
                    <Text>{el.desc}</Text>
                  </Box>
                  <Text
                    textDecor="underline"
                    fontWeight="semibold"
                    fontSize="sm"
                  >
                    Learn More
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
