import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import ShowContact from "./ShowContact";

const Contact = () => {
  const [name, setName] = useState(null);
  const [contactemail, setContactEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [contact, setContact] = useState(null);
  const [allContact,setAllContact] =useState([])
  const [num,setNum] = useState(0);
  const { email } = useSelector((store) => store.userLogin);
  const addContact = async () => {
    if (!name || !contactemail || !address || !contact) {
        return alert("Please fill all the details");
    }
    let response = await axios.post("http://localhost:8080/contact", {
      u_email: "Rakesh@gmail.com",
      name: name,
      email: contactemail,
      address: address,
      contact: contact,
    });
    if (response.data.msg == `Contact Already Exist`) {
      alert(`contact already exist`);
    } else {
      alert("Contact Added Successfully");
      setNum((prev)=>prev+1)
      console.log(response);
    }
    setName("");
    setContactEmail("");
    setAddress("");
    setContact("");

    // console.log(name,contactemail,address,contact,email)
  };
  const getContact = async()=>{
    try {
            let res = await axios.get(`http://localhost:8080/contact?user_email=Rakesh@gmail.com`)
            
            setAllContact(res.data)
    } catch (error) {
        console.log(error.message)
    }
  }
  useEffect(()=>{
    getContact()
  },[num])
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              User Detail
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
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
              </HStack>
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
                <Button
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
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ShowContact data = {allContact}/>
    </>
  );
};

export default Contact;
