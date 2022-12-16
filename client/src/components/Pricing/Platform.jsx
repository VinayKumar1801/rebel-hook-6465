import { Fragment } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MarketingPlatform from "./Marketing/Marketing";
import WebsiteCommerce from "./Website/WebsiteCommerce";

export default function Platform() {
  return (
    <Fragment>
      <Box>
        <Tabs variant="enclosed">
          <TabList
            w="full"
            justifyContent="space-between"
            maxW="container.lg"
            m="auto"
            py="4"
            fontSize="2xl"
          >
            <Tab>Marketing Platform</Tab>
            <Tab>Websites & Commerce</Tab>
            <Tab>Transactional Email</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MarketingPlatform />
            </TabPanel>
            <TabPanel>
              <WebsiteCommerce />
            </TabPanel>
            <TabPanel>
              <Box textAlign="center">Three</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Fragment>
  );
}
