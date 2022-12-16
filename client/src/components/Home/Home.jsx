import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./home.module.css";
import first from "./first.json";
import rightPlan from "./rightPlan.json";
import integration from "./integration.json";
const Home = () => {
  console.log(first);
  return (
    <div class={Styles.main}>
      {/*----------------- first section------------------------ */}

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
          w={{ base: "90%", sm: "80%", md: "60%", lg: "55%" }}
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

      {/*----------------- Second Section (features) -------------------------*/}

      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {first.map((ele) => (
          <Box>
            <Box position="relative">
              <Image src={ele.image}></Image>
              <Text
                position="absolute"
                top="25px"
                left={{ base: "10px", md: "20px", lg: "50px" }}
                fontSize={{ base: "20px", sm: "22px", md: "24px", lg: "26px" }}
                fontWeight="300"
                fontFamily="Georgia"
              >
                {ele.title}
              </Text>
            </Box>
            <Box padding="35px 35px" bg={ele.bg}>
              <Text marginBottom="20px" fontWeight="500">
                {ele.desc}
              </Text>
              <Button
                bg="transparent"
                border="1px solid"
                borderRadius="5em"
                padding="20px"
              >
                Learn more
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      {/*-------------------------- third section (video)----------------------------*/}

      {/* <Box bg="black" h="50px">
        <video src="" />
      </Box> */}

      {/* -------------------------fourth section (find the right plan)------------------------ */}

      <Box bg="#f6f6f4" padding="40px 0px">
        <Text
          textAlign="center"
          margin="0px 0px 50px 0px"
          fontSize="40px"
          fontFamily="Georgia"
        >
          Find the right plan
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          w="85%"
          margin="auto"
          bg="white"
        >
          {rightPlan.map((ele, index) => (
            <Flex
              border="0.5px solid grey"
              direction="column"
              gap="20px"
              padding="20px"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
              }}
            >
              <Flex direction="column" gap="10px">
                <Text fontSize="20px" fontFamily="Georgia">
                  {ele.title}
                </Text>
                <Text fontSize="14px" h="60px" color="gray">
                  {ele.desc}
                </Text>
                <Flex direction="column">
                  <Text fontSize="13px" color="gray">
                    {ele.p1}
                  </Text>
                  <Text
                    fontSize="35px"
                    fontFamily="Georgia"
                    // border="1px solid"
                    h="40px"
                  >
                    {ele.p2}
                  </Text>
                  <Text fontSize="13px" color="gray">
                    {ele.p3}
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column" paddingBottom="10px" fontSize="13px">
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[1]}
                </Text>
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[2]}
                </Text>
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[3]}
                </Text>
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[4]}
                </Text>
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[5]}
                </Text>
                <Text borderBottom="1px solid grey" padding="20px 0px">
                  {ele[6]}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
        <Text textAlign="center" fontSize="14px" color="gray" marginTop="20px">
          *Overages apply if contact or email send limit is exceeded. Free plan
          sending will be paused if contact or email send limit is exceeded.
          Learn more See all plan details
        </Text>
        <Box textAlign="center" margin="20px 0px">
          <button class={Styles.firstB}>
            <span class={Styles.button_top}>See all paln details</span>
          </button>
        </Box>
      </Box>

      {/*------------------------------- Fifth Section(Automation)-------------------------- */}

      {/* <Box padding="40px 0px">
        <Text textAlign="center" fontSize="40px" fontFamily="Georgia" h="45px">
          Generate up to 4x more orders* with
        </Text>
        <Text textAlign="center" fontSize="40px" fontFamily="Georgia" h="45px">
          Customer Journey Builder
        </Text>
        <Text textAlign="center" fontSize="40px" fontFamily="Georgia" h="45px">
          automations
        </Text>
      </Box> */}

      {/*------------------------------ sixth section -----------------*/}

      {/*------------------------------ seventh section(integrations) -----------------*/}

      <Box w="85%" margin="auto">
        <Text
          textAlign="left"
          fontSize={{ base: "20px", sm: "30px", md: "35px", lg: "40px" }}
          fontFamily="Georgia"
          w={{ base: "100%", sm: "80%", md: "70%", lg: "50%" }}
        >
          Bring in more data, drive more growth with our integrations
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          mt="20px"
        >
          {integration.map((ele) => (
            <Flex padding="20px" gap="15px">
              <Image src={ele.image} boxSize="90px"></Image>
              <Box>
                <Text fontWeight="500">{ele.title}</Text>
                <Text fontSize="14px" color="gray">
                  {ele.desc}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
