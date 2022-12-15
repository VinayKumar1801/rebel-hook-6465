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
import "./Signup.css";
const signup = () => {
  return (

    <Grid className="bgimage" templateColumns={{lg:"3fr 1.5fr",md:"3fr 1.5fr",sm:"1fr",base:"1fr"}} gap={6}>
      <GridItem className="signleft" w="100%">
        <Container p={"2rem"}>
          <Image display={"block"} margin='auto' width={"50%"} src={logo} />
          <Heading>Sign up for Emailomatic</Heading>
          <Text display={"inline-block"}>
            Create a free account or{" "}
            <Text color={"blue"} display={"inline-block"}>
              log in
            </Text>
          </Text>
       
          <FormControl m={"30px 0"} isRequired>
            <FormLabel m={"10px 0"}>Email</FormLabel>
            <Input />
            <FormLabel m={"10px 0"}>Username</FormLabel>
            <Input />
            <FormLabel m={"10px 0"}>Password</FormLabel>
            <Input type={"password"} />
            <Checkbox m={"1rem"} colorScheme="teal" defaultChecked>
           <Text fontSize={'sm'} >
             I don't want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Emailomatic.
            </Text>
            </Checkbox>
            <Text fontSize={'sm'} m="10px" display={'inline-block'}>By creating an account, you agree to our <u>Terms</u> and have read and acknowledge the <u> Global Privacy Statement.</u></Text>
            <Button
    
            // m={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
          <Text fontSize={'xs'} m='10px'>Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.</Text>
          </FormControl>
          <Text fontSize={'xs'} mt="2rem">©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</Text>
        </Container>
      </GridItem>
      <GridItem className="signright" w="100%">
    <Image  className="image" src='https://login.mailchimp.com/release/1.1.1d9e8c1276f5fc85f98946c075ca113164ea85732/images/brand_assets/illos/art-hero-flowers.png'/>
      </GridItem>
    </Grid>
  
  );
};

export default signup;
