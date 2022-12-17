import { Fragment } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MarketingPlatform from "./Marketing/Marketing";
import WebsiteCommerce from "./Website/WebsiteCommerce";
import TransactionalEmail from "./TransactionalEmail/TransactionalEmail";

export default function Platform() {
  return (
    <Fragment>
      <Box py="4">
        <Tabs>
          <TabList
            w="full"
            justifyContent="space-around"
            maxW="container.xl"
            m="auto"
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
              <TransactionalEmail />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Fragment>
  );
}
