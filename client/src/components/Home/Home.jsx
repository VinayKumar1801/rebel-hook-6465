import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./home.module.css";
const Home = () => {
  return (
    <div class={Styles.main}>
      <Box
        // border="1px solid red"
        textAlign="center"
        //   h="380px"
        padding="70px 0px"
      >
        <Text fontSize="48px" fontWeight="300" fontFamily="Georgia">
          Turn Emails into Revenue
        </Text>
        <Text
          fontSize="24px"
          letterSpacing="-0.32px"
          w="55%"
          //   border="1px solid"
          padding="5px 0px 30px 0px"
          margin="auto"
        >
          Win new customers with the #1 email marketing and automations brand*
          that recommends ways to get more opens, clicks, and sales.
        </Text>
        <button class={Styles.firstB}>
          <span class={Styles.button_top}> Sign Up</span>
        </button>
      </Box>
    </div>
  );
};

export default Home;
