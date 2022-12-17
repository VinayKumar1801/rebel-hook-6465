import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import developerFeatures from "../../../assets/developer_features.json";

export default function DeveloperFeatures() {
  return (
    <Fragment>
      <Box py="10">
        <Box maxW="container.lg" m="auto">
          <Box textAlign="center">
            <Text>Made for developers to send emails that reach inboxes</Text>
          </Box>
          <Box>
            <Flex direction={{ base: "column", lg: "row" }} wrap="wrap">
              {developerFeatures.map((el) => (
                <Box>
                  <Image src={el.image} />
                  <Box>
                    <Text>{el.title}</Text>
                  </Box>
                  <Box>
                    <Text>{el.desc}</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
