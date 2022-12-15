import {
    Box, Text, Image, Grid, Flex, Button, Option, InputGroup, InputRightElement, Form, Input, Radio, RadioGroup, Checkbox, HStack, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Stack, Container, Select
} from "@chakra-ui/react";

import "./Checkout.css"




const Checkout = () => {
    return (
        <div className="main">
            {/* payment and addess page part */}
            <Box w={"105%"} px={"30px"} height="900px">
                <Text fontSize="2rem" mb={"15px"} fontWeight="400">Payment method</Text>

                <hr />

                <Box display={"flex"} gap="20px" mt={"15px"}  >


                    <FormControl as='fieldset'>

                        <RadioGroup defaultValue='Itachi'>
                            <HStack spacing='24px'>

                                <Radio value='Itachi'>
                                    <Box display={"Flex"} size="md" >
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/mastercard-UXCUKVYI.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/visa-DAJZHNYL.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/american-express-F3NWOJZT.svg" />
                                        <Image src="https://us21.admin.mailchimp.com/release/e/assets/discover-RLC2EY7Q.svg" /></Box>
                                </Radio>
                                <Radio value='Sage of the six Paths'>
                                    <Image src="https://us21.admin.mailchimp.com/release/e/assets/paypal-MDZ4JKZB.svg" />
                                </Radio>
                            </HStack>
                        </RadioGroup>

                    </FormControl>

                </Box>
                {/* payment part input  */}

                <Box mt={"20px"} w="80%">
                    <FormControl isRequired>
                        <FormLabel>Card number</FormLabel>
                        <Input borderColor={"black"} borderRadius="0px" maxLength="16" size={"lg"} placeholder='' />
                        <Flex>
                            <Box mt={"20px"}>
                                <FormLabel>Expiration date</FormLabel>
                                <Input borderColor={"black"} type="month" borderRadius="0px" size="lg" placeholder='MM/YY' />
                            </Box>
                            <Box ml={"20px"} mt={"20px"}>
                                <FormLabel>Security code</FormLabel>
                                <Input borderColor={"black"} type="password" borderRadius="0px" maxLength={"4"} size="lg" placeholder='123' />
                            </Box>



                        </Flex>

                    </FormControl>
                </Box>

                {/* contact address part  */}

                <Box mt={"3rem"}>
                    <Text fontSize="2rem" mb={"15px"} fontWeight="400">Contact address</Text>

                    <hr />

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
                            <Input borderColor={"black"} borderRadius="0px" size={"lg"} mt="-10px" />
                        </InputGroup>
                    </Stack>
                    <Flex>

                        <button className="save-btn1">Save</button>
                        <button className="save-btn2">Cancel</button>
                    </Flex>
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
                        <Text fontWeight={"600"}>$276.66 / month</Text>
                    </Flex>
                    <Box>
                        <Text>10,000 contacts*</Text>
                        <Text>150,000 email sends*</Text>
                    </Box>

                    <Flex mt={"2rem"} mb="1rem" justifyContent={"space-between"}>
                        <Text fontWeight={"600"}>Tax</Text>
                        <Text fontWeight={"600"}>$344</Text>
                    </Flex>
                    <hr />
                    <Flex mt={"2rem"} justifyContent={"space-between"}>
                        <Text fontSize={"17px"} fontWeight={"600"}>Total</Text>
                        <Text fontSize={"17px"} fontWeight={"600"}>$276.66 / month</Text>
                    </Flex>



                    <button className="paybuton"> Pay now </button>

                    <Text fontSize={"12px"} mt="2rem" mb="2rem">By selecting “Pay now”, I understand that I am enrolling in a subscription plan and I authorize Mailchimp to charge my payment method each month at the then-current list price (plus applicable taxes) unless I cancel. I can cancel anytime by going to my Billing page in the Account Settings.</Text>
                    <Text fontSize={"12px"}>*When you exceed your limit, you incur additional charges of $37.29/mo per additional 1,000 contacts (comes with additional 15,000 email sends).
                        <Text fontSize="14px" color={"#138691"} >Learn More</Text> </Text>
                    <Box mt="2rem">
                        <Text fontSize={"12px"}>Your receipt will be sent to</Text>
                    </Box>

                </Box>




            </Box>
        </div>
    );
}

export default Checkout
