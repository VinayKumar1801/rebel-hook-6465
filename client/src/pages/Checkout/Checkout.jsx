import { Box, Text, Image, Grid, Flex, Checkbox, Stack } from "@chakra-ui/react";

import "./Checkout.css"




const Checkout = () => {
    return (
        <div className="main">
            {/* payment and addess page part */}
            <Box px={"10px"} border="1px solid black" height="1000px">
                <Text fontSize="2rem" fontWeight="400">Payment method</Text>

                <hr />

                <Box display={"flex"}>
                    <Stack >
                        <Checkbox defaultChecked size='sm' colorScheme='red'>
                   <Box display={"Flex"} >       
                      <Image src="https://us21.admin.mailchimp.com/release/e/assets/mastercard-UXCUKVYI.svg" />
                            <Image src="https://us21.admin.mailchimp.com/release/e/assets/visa-DAJZHNYL.svg" />
                            <Image src="https://us21.admin.mailchimp.com/release/e/assets/american-express-F3NWOJZT.svg" />
                            <Image src="https://us21.admin.mailchimp.com/release/e/assets/discover-RLC2EY7Q.svg" /></Box>
                        </Checkbox>
                    </Stack>
                    
                    <Stack>
                        <Checkbox>
                            <Image src="https://us21.admin.mailchimp.com/release/e/assets/paypal-MDZ4JKZB.svg" />
                        </Checkbox>
                    </Stack>

                </Box>


            </Box>
            {/* Billing part paynow  */}
            <Box border="1px solid green">
                hello2
            </Box>
        </div>
    );
}

export default Checkout
