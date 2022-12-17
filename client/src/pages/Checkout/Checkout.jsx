import {

    Box, Text, Image, Flex, Button,  InputGroup, InputRightElement,  Input, Radio, RadioGroup, Checkbox, HStack, FormControl,
    FormLabel, Stack, Select, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader
} from "@chakra-ui/react";
import { useState } from "react";

import "./Checkout.css"
import {Link} from "react-router-dom"

import { useDisclosure } from "@chakra-ui/react";

const onClose = () => {
    // Navigate to ="/"
}

const Checkout = () => {

    const [show, SetShow] = useState(1)
    const [showT, SetShowT] = useState(1)
    const [div, Setdiv] = useState(1);
    const [item, Setitem] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const hadlediv = (e) => {
        Setdiv(e)
    }

    const handletax = (e) => {
        SetShowT(e);
    }

    const handleclick = (e) => {
        SetShow(e);

    }

    const [Tax, SetTax] = useState({
        tax: ""
    })
    const [em, Setem] = useState({ b_email: "" })
    const { b_email } = em;

    const [user, setUser] = useState({
        ad_name: "",
        ad_lname: "",
        ad_add: "",
        ad_apt: "",
        ad_City: "",
        ad_country: "",
        ad_State: "",
        ad_code: "",

    })

    const { ad_name, ad_lname, ad_add, ad_apt, ad_City, ad_country, ad_State, ad_code } = user;
    const { tax } = Tax;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        SetTax({ ...Tax, [e.target.name]: e.target.value });
        Setem({ ...em, [e.target.name]: e.target.value });
    };


    const handleEdit = () => {
        SetShow(1)
    }
    const handleEditt = () => {
        SetShowT(1)
    }


    //  multiply

    const price = (23000);
    const taxex = Math.floor(price * 18 / 100);
    const payble = price + taxex;

    const paynow = () => {
        alert("Payment Successfull !!")
    }

    return (
        <div className="main">
            {/* payment and addess page part */}
            <Box w={"105%"} px={"30px"} >
                <Text fontSize="2rem" mb={"15px"} fontWeight="400">Payment method</Text>

                <hr />

                <Box display={"flex"} gap="20px" mt={"15px"}  >


                    <FormControl as='fieldset'>

                        <RadioGroup defaultValue='Itachi'>
                            <HStack spacing='24px'>

                                <Radio onClick={() => Setitem(1)} value='Itachi'>
                                    <Box onClick={() => Setitem(1)} display={"Flex"} size="md" >
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/mastercard-UXCUKVYI.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/visa-DAJZHNYL.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/american-express-F3NWOJZT.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/discover-RLC2EY7Q.svg" /></Box>
                                </Radio>
                                <Radio onClick={() => Setitem(2)} value='Sage of the six Paths'>
                                    <Box onClick={() => Setitem(2)} >

                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/paypal-MDZ4JKZB.svg" />
                                    </Box>
                                </Radio>
                            </HStack>
                        </RadioGroup>

                    </FormControl>

                </Box>
                {/* payment part input  */}

                <Box>
                    {
                        item === 1 ? <div>

                            <Box mt={"20px"} w="80%">
                                <FormControl isRequired>
                                    <FormLabel>Card number</FormLabel>
                                    <Input borderColor={"black"} borderRadius="0px" maxLength="16" size={"lg"} placeholder='' />
                                    <Flex>
                                        <Box mt={"20px"}>
                                            <FormLabel>Expiration date</FormLabel>
                                            <Input borderColor={"black"} borderRadius="0px" size="lg" placeholder='MM/YY' />
                                        </Box>
                                        <Box ml={"20px"} mt={"20px"}>
                                            <FormLabel>Security code</FormLabel>
                                            <Input borderColor={"black"} type="password" borderRadius="0px" maxLength={"4"} size="lg" placeholder='123' />
                                        </Box>



                                    </Flex>

                                </FormControl>
                            </Box>

                        </div> : <div>

                            <Box mt={"1rem"}>
                                <Flex>
                                    <Image w={"5rem"} src="https://us21.admin.mailchimp.com/release/e/assets/paypal-MDZ4JKZB.svg" />
                                    <Text> _PayPal balance, eCheck, credit, and more</Text>
                                </Flex>
                                <button className="paypal">Connect to PayPal</button>
                            </Box>


                        </div>
                    }
                </Box>

                {/* contact address part  */}

                <Box mt={"3rem"}>
                    <Text fontSize="2rem" mb={"15px"} fontWeight="400">Contact address</Text>

                    <hr />

                    <Box>
                        {
                            show === 1 ? <div>

                                <FormControl isRequired >

                                    <Flex>
                                        <Box mt={"20px"}>
                                            <FormLabel>First Name</FormLabel>
                                            <Input value={ad_name} name="ad_name" onChange={e => onInputChange(e)} borderColor={"black"} borderRadius="0px" size="lg" />
                                        </Box>
                                        <Box ml={"20px"} mt={"20px"}>
                                            <FormLabel>Last Name</FormLabel>
                                            <Input value={ad_lname} name="ad_lname" onChange={e => onInputChange(e)} borderColor={"black"} borderRadius="0px" size="lg" />
                                        </Box>
                                    </Flex>
                                    <br />
                                    <FormLabel>Address</FormLabel>
                                    <Input value={ad_add} name="ad_add" onChange={e => onInputChange(e)} w={"90%"} borderColor={"black"} borderRadius="0px" size={"lg"} />
                                    <Flex>
                                        <Box mt={"20px"}>
                                            <FormLabel>Apt, unit, suite (optional)</FormLabel>
                                            <Input value={ad_apt} name="ad_apt" onChange={e => onInputChange(e)} borderColor={"black"} borderRadius="0px" size="lg" />
                                        </Box>
                                        <Box ml={"20px"} mt={"20px"}>
                                            <FormLabel>City</FormLabel>
                                            <Input value={ad_City} name="ad_City" onChange={e => onInputChange(e)} borderColor={"black"} type="text" borderRadius="0px" size="lg" />
                                        </Box>
                                    </Flex>
                                    <Flex w="90%">
                                        <Box mt={"20px"}>
                                            <FormLabel>Country</FormLabel>
                                            <Input value={ad_country} name="ad_country" placeholder="India" onChange={e => onInputChange(e)} borderColor={"black"} borderRadius="0px" size="lg" />
                                        </Box>
                                        <Box ml={"20px"} mt={"20px"}>
                                            <FormLabel>State</FormLabel>
                                            <Input value={ad_State} name="ad_State" onChange={e => onInputChange(e)} borderColor={"black"} type="text" borderRadius="0px" size="lg" />
                                        </Box>
                                        <Box ml={"20px"} mt={"20px"}>
                                            <FormLabel>Postal code</FormLabel>
                                            <Input value={ad_code} name="ad_code" onChange={e => onInputChange(e)} borderColor={"black"} type="Number" borderRadius="0px" maxLength={"5"} size="lg" />
                                        </Box>
                                    </Flex>
                                </FormControl>
                                <button onClick={() => handleclick(2)} className="save-btn1">Save</button>
                                <button className="save-btn2">Cancel</button>

                            </div> : <div>
                                <Box>
                                    <Flex w="100%" justifyContent="space-between" >
                                        <Box mt={"10px"}>
                                            <Text>{ad_name} {ad_lname}</Text>
                                            <Text>{ad_add} {ad_apt}</Text>
                                            <Text>{ad_City} {ad_State} {ad_country}</Text>
                                            <Text>{ad_code}</Text>
                                        </Box>
                                        <Button mt={"10px"} w={"20%"} color="#005963" bg="none" borderRadius={"0px"} onClick={() => handleEdit(1)}>Edit</Button>
                                    </Flex>

                                </Box>


                            </div>
                        }
                    </Box>


                </Box>
                <Box mt={"3rem"}>
                    <Text fontSize="2rem" mb={"15px"} fontWeight="400">Billing address</Text>

                    <hr />
                    <Stack mt={"20px"} spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox size='lg' colorScheme='green' defaultChecked>
                            Same as contact address
                        </Checkbox>
                    </Stack>

                </Box>

                <Box mt={"3rem"}>
                    <Text fontSize="2rem" mb={"15px"} fontWeight="400">Tax settings</Text>

                    <hr />
                    <Box>
                        {
                            showT === 1 ?

                                <div>
                                    <Stack spacing={4} w="66%" mt={"20px"} >
                                        <Flex justifyContent={"space-between"}>
                                            <Text fontWeight="600">Registered VAT/GST/Tax ID</Text>
                                            <Text color={"gray.600"}>optional</Text>
                                        </Flex>

                                        <InputGroup>

                                            <InputRightElement
                                                pointerEvents='none'
                                                color='black.300'
                                                fontSize='1.2em'
                                                children='?'
                                            />
                                            <Input value={tax} name="tax" onChange={e => onInputChange(e)} borderColor={"black"} borderRadius="0px" size={"lg"} mt="-10px" />
                                        </InputGroup>
                                    </Stack>
                                    <Flex>

                                        <button onClick={() => handletax(2)} className="save-btn1">Save</button>
                                        <button className="save-btn2">Cancel</button>
                                    </Flex>
                                </div> : <div>
                                    <Text mt={"5px"} fontWeight="600">Registered VAT/GST/Tax ID</Text>
                                    <Flex justifyContent={"space-between"} >
                                        <Text>{tax}</Text>
                                        <Button w={"20%"} color="#005963" bg="none" borderRadius={"0px"} onClick={() => handleEditt(1)}>Edit</Button>
                                    </Flex>

                                </div>
                        }
                    </Box>
                </Box>

            </Box>
            {/* Billing part paynow  */}


            <Box ml={"7rem"} w="80%" bg={"#f6f6f4"}>
                <Box m={"auto"} mt="30px" w={"80%"}>
                    <Text fontWeight={"400"} fontSize={"2rem"}>Purchase summary</Text>

                    <Flex alignItems={"center"}>
                        <Text fontSize="17px" fontWeight={400}>Billed in</Text>
                        <Select w={"50%"} fontSize="17px" fontWeight={500} color="green.600" border="none">
                            <option>Indian Rupee</option>
                            <option>US Dollars</option>
                        </Select>
                    </Flex>

                    <Flex mt="2rem" justifyContent={"space-between"}>
                        <Text fontWeight={"600"}>Premium plan</Text>
                        <Text fontWeight={"600"}>₹{price}/ month</Text>
                    </Flex>
                    <Box>
                        <Text>10,000 contacts*</Text>
                        <Text>150,000 email sends*</Text>
                    </Box>

                    <Flex mt={"2rem"} mb="1rem" justifyContent={"space-between"}>
                        <Text fontWeight={"600"}>Tax</Text>
                        <Text fontWeight={"600"}>₹{taxex}</Text>
                    </Flex>
                    <hr />
                    <Flex mt={"2rem"} justifyContent={"space-between"}>
                        <Text fontSize={"17px"} fontWeight={"600"}>Total</Text>
                        <Text fontSize={"17px"} fontWeight={"600"}>₹{payble}/ month</Text>
                    </Flex>




                   <Link to='/dashboard'>
                    <button onClick={paynow} className="paybuton"> Pay now </button>
                    </Link> 

                    <Box>


                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent height="70%" >



                                <Image w={"30%"} margin="auto" src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" />
                                <ModalCloseButton />
                                <ModalBody>
                                    <ModalHeader textAlign={"center"} mt="-1rem" fontWeight={"bold"} color={"green.600"} fontSize="3rem">Thank You!</ModalHeader>
                                    <Text textAlign={"center"} color="gray.600" fontWeight={"bold"} fontSize="18px" mt={"-1rem"} >Payment done Successfully</Text>
                                    <Text textAlign={"center"} color="gray.600" fontWeight={"400"} mt={"1rem"} fontSize="14px" >You will be redirected to the home page shortly or click here to return home page </Text>
                                    <Button onClick={onClose} w={"10rem"} color="white" bg="green.400" _hover={{ bg: "green.500" }} fontSize="18px" h="8vh" borderRadius="20px" ml="8rem" padding={"10px"} mt={"2rem"}  >Home</Button>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Text fontSize={"12px"} mt="2rem" mb="2rem">By selecting “Pay now”, I understand that I am enrolling in a subscription plan and I authorize Mailchimp to charge my payment method each month at the then-current list price (plus applicable taxes) unless I cancel. I can cancel anytime by going to my Billing page in the Account Settings.</Text>
                    <Text fontSize={"12px"}>*When you exceed your limit, you incur additional charges of $37.29/mo per additional 1,000 contacts (comes with additional 15,000 email sends).
                        <Text fontSize="14px" color={"#138691"} >Learn More</Text> </Text>
                    <Box mt="2rem">


                        {
                            div === 1 ? <div>
                                <Box>
                                    <Text fontWeight={600}>Billing Email Address</Text>
                                    <Input value={b_email} name="b_email" onChange={e => onInputChange(e)} borderRadius={"0px"} borderColor="black" bg={"white"} size="lg" mt={"4px"} type={"email"} />
                                    <Flex mt={"10px"}>
                                        <Button w={"30%"} borderRadius="0px" border={"1px solid #005963"} color="#005963" bg="none" onClick={() => hadlediv(2)}>Save</Button>
                                        <Button w={"30%"} color="#005963" bg="none">Cancel</Button>
                                    </Flex>
                                </Box>


                            </div> : <div>
                                <Text fontSize={"14px"}>Your receipt will be sent to</Text>
                                <Flex justifyContent={"space-between"} >
                                    <Text w={"60%"} fontWeight={600} mt={"5px"}>{b_email}</Text>
                                    <Button w={"30%"} color="#005963" bg="none" borderRadius={"0px"} onClick={() => Setdiv(1)} >Edit</Button>
                                </Flex>
                            </div>
                        }

                        <Text fontSize={"14px"} mt="2rem" mb="2rem">Actual price may vary. Prices displayed are estimates based on current exchange rates. Exact amount charged will vary and depends on the exchange rate at the time of payment processing. Prices displayed exclude any applicable taxes and fees, which will be added to the cost of all services purchased. For exact base pricing please refer to prices listed in USD.</Text>
                    </Box>

                </Box>




            </Box>
            {/* footer par */}
            <Box w={"120%"} mt={"5rem"}>
                <Text fontSize={"14px"}>©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC.</Text>
                <Text fontSize={"14px"} color="#005963" cursor={"pointer"}>Privacy and Terms.</Text>
            </Box>


        </div>
    );
}

export default Checkout
