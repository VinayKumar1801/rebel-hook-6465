import { Fragment } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import PlanVariants from "./PlanVariants";
import Features from "./Features";
import Questions from "./Questions";
import WebsitePlans from "./WebsitePlans";
import WebsiteFeatures from "./WebsiteFeatures";

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
              <Box>
                <PlanVariants />
                <Features />
                <Questions />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <WebsitePlans />
                <WebsiteFeatures />
              </Box>
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
