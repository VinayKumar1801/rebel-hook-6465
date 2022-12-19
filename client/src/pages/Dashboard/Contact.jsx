import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import ShowContact from "./ShowContact";
import SidebarWithHeader from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
const url = process.env.REACT_APP_MAIN_URL;

const Contact = () => {
  const [name, setName] = useState(null);
  const [contactemail, setContactEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [contact, setContact] = useState(null);
  const [allContact, setAllContact] = useState([]);
  const [num, setNum] = useState(0);
  const { email: userEmail } = useSelector((store) => store.userLogin);
  const userData = JSON.parse(localStorage.getItem("userToken"));
  const email = userEmail || userData.email;

  const addContact = async () => {
    console.log(email);
    if (!name || !contactemail || !address || !contact) {
      return alert("Please fill all the details");
    }
    let response = await axios.post(`${url}/contact`, {
      u_email: email,
      name: name,
      email: contactemail,
      address: address,
      contact: contact,
    });
    if (response.data.msg === `Contact Already Exist`) {
      alert(`contact already exist`);
    } else {
      alert("Contact Added Successfully");
      setNum((prev) => prev + 1);
      console.log(response);
    }
    setName("");
    setContactEmail("");
    setAddress("");
    setContact("");

    // console.log(name,contactemail,address,contact,email)
  };
  const getContact = async () => {
    try {
      let res = await axios.get(`${url}/contact?user_email=${email}`);

      setAllContact(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getContact();
  }, [num]);
  return (
    <Box py={15} w="100%">
      <SidebarWithHeader />
      <Flex
        w={{ base: "100%", lg: "80%" }}
        marginLeft="auto"
        minH={"100vh"}
        align={"right"}
        justify={"right"}
      >
        <Stack spacing={8} mx={"auto"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              User Detail Form
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Add your All close Contacts here 👇
            </Text>
          </Stack>

          <Box
            // border="1px solid"
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={{ base: "5", sm: "7", md: "9", lg: "10" }}
          >
            <Stack
              spacing={4}
              // border="1px solid blue"
              w={{ base: "", sm: "350px", md: "500px", lg: "500px" }}
            >
              {/* <HStack> */}
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="contact" isRequired>
                  <FormLabel>Contact</FormLabel>
                  <Input
                    type="number"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              {/* </HStack> */}
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={contactemail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Box w="full">
                  <Button
                    w="full"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => addContact()}
                  >
                    Add Contact
                  </Button>
                </Box>
                <Box w="full">
                  <Link to="/dashboard">
                    <Button
                      w="full"
                      loadingText="Submitting"
                      size="lg"
                      bg={"yellow"}
                      color={"blackAlpha.800"}
                      _hover={{ bg: "#ffff43" }}
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ShowContact data={allContact} />
    </Box>
  );
};

export default Contact;
