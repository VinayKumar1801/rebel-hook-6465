import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
    <Grid
      className="bgimage"
      templateColumns={{
        lg: "1.5fr 3fr",
        md: "1.5fr 3fr",
        sm: "1fr",
        base: "1fr",
      }}
      gap={6}
    >
      <GridItem p={"20px"} className="signleft" w="100%">
        <Image width={"30%"} mb="3rem" src={logo} />
        <Container>
          <Heading m={"5px 0"}>Log In</Heading>
          <Text m={"5px 0"}>
            Need a Mailchimp account? <u>Create an account</u>
          </Text>
          <FormControl isRequired>
            <FormLabel  m={"10px 0"}>Email</FormLabel>
            <Input />
            <FormLabel m={"10px 0"}>Password</FormLabel>
            <Input type={"password"} />
            <Button w={"100%"} m={"2rem 0"} colorScheme="teal" type="submit">
              Login
            </Button>
            <Container textAlign={"center"}>
              <Checkbox colorScheme="teal" defaultChecked>
                <Text>Keep me logged in</Text>
              </Checkbox>
            </Container>
            <Container m={"10px 0"} textAlign={"center"}>
              <Text>Forgot username? · Forgot password?</Text>
              <Text>Can't Log In?</Text>
            </Container>
            <Text fontSize={'xs'} textAlign='justify'>©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</Text>
          </FormControl>
        </Container>
      </GridItem>
      <GridItem className="signright" w="100%">
        <Image
          className="image"
          src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg"
        />
      </GridItem>
    </Grid>
  );
};

export default Login;
