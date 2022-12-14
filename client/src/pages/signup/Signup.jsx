import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../../redux/userSignup/userSignup.action";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
const Signup = () => {
  const { isAuth, isError } = useSelector((store) => store.userSignup);
  const navigate= useNavigate()
  const dispatch = useDispatch();
  // console.log(isAuth, token, isError, process.env.REACT_APP_MAIN_URL)
  const [form, setForm] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form))
    
  
    // .then(()=>(
    // ))
  };
  if(isAuth){
    navigate('/login')

  }
  return (
    <>
    <Grid
      className="bgimage"
      templateColumns={{
        lg: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        sm: "1fr",
        base: "1fr",
      }}
      gap={6}
    >
      <GridItem className="signleft" w="100%">
        <Container p={"2rem"}>
        <Link to='/'>
            <Image display={"block"} margin="auto" width={"50%"} src={logo} />
          </Link>
          <Heading>Sign up for Emailomatic</Heading>
          <Text display={"inline-block"}>
            Create a free account or{" "}
            <Link to='/login' style={{color:"blue"}}>
              log in
            </Link>
          </Text>

          <form onSubmit={handleSubmit}>
          <FormControl m={"30px 0"} isRequired >

            <FormLabel m={"10px 0"}>Email</FormLabel>
            <Input onChange={handleChange} value={form.email} name="email" />
            <FormLabel m={"10px 0"}>Name</FormLabel>
            <Input onChange={handleChange} value={form.name} name="name" />
            <FormLabel m={"10px 0"}>Username</FormLabel>
            <Input onChange={handleChange} value={form.username} name="username" />
            <FormLabel m={"10px 0"}>Password</FormLabel>
            <Input
              type={"password"}
              onChange={handleChange}
              value={form.password}
              name="password"
            />
            <Checkbox m={"1rem"} colorScheme="teal" defaultChecked>
              <Text fontSize={"sm"}>
                I don't want to receive emails about Emailomatic and related
                Intuit product and feature updates, marketing best practices,
                and promotions from Emailomatic.
              </Text>
            </Checkbox>
            <Text fontSize={"sm"} m="10px" display={"inline-block"}>
              By creating an account, you agree to our <u>Terms</u> and have
              read and acknowledge the <u> Global Privacy Statement.</u>
            </Text>
            <Button
              // m={4}
              colorScheme="teal"
              type="submit"

            >
              Submit
            </Button>
            <Text fontSize={"xs"} m="10px">
              Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.
            </Text>
          </FormControl>
          </form>
          <Text fontSize={"xs"} mt="2rem">
            ??2001???2022 All Rights Reserved. Emailomatic?? is a registered
            trademark of The Rocket Science Group, LLC. Cookie Preferences,
            Privacy, and Terms.
          </Text>
        </Container>
      </GridItem>
      <GridItem
        className="signright"
        w="100%"
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
      >
        <Image
          className="image"
          mt={{ lg: "7rem", md: "10rem" }}
          src="https://login.mailchimp.com/release/1.1.1d9e8c1276f5fc85f98946c075ca113164ea85732/images/brand_assets/illos/art-hero-flowers.png"
        />
      </GridItem>

    </Grid>
    {isError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Wrong Credentials</AlertTitle>
          <AlertDescription>
            Please Check Credentials
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}

    </>
  );
};

export default Signup;
