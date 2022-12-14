import { Fragment } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Platform() {
  return (
    <Fragment>
      <Box>
        <Tabs variant="enclosed" w="full">
          <TabList>
            <Tab>Marketing Platform</Tab>
            <Tab>Websites & Commerce</Tab>
            <Tab>Transactional Email</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>One</Box>
            </TabPanel>
            <TabPanel>
              <Box>Two</Box>
            </TabPanel>
            <TabPanel>
              <Box>Three</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Fragment>
  );
}
