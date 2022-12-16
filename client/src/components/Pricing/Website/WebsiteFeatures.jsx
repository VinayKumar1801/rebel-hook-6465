import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import planImages from "../../../assets/pricing_images.json";
import Questions from "../Marketing/Questions";

export default function WebsiteFeatures() {
  return (
    <Fragment>
      <Box>
        <Box maxW="container.lg" m="auto">
          <Box py="8">
            <Box textAlign="center">
              <Button
                h="12"
                variant="outline"
                borderRadius="full"
                border="1px"
                borderColor="blackAlpha.500"
                _hover={{
                  boxShadow: "0px 6px gray",
                  transform: "translateY(-8px)",
                }}
              >
                Compare our plans
              </Button>
            </Box>
            <Box p="2" py="4" maxW="3xl" m="auto">
              <Text>
                *All Websites & Commerce plans include access to our Mailchimp
                stores product. If you create and publish a store, transaction
                fees will be charged to you on a per transaction basis based on
                the total order value (minus promotions and discounts, plus tax
                and shipping) for each transaction. These transaction fees are
                non-refundable. You will also be charged fees by Stripe. See
                Stripe.com for details about Stripe fees.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box w="full" bg="gray.100">
          <Box p="4" maxW="container.lg" m="auto" textAlign="center">
            <Heading as="h3" fontSize="2xl" py="6">
              Featured Product:
            </Heading>
            <Box maxW="sm" m="auto">
              <Text fontWeight="medium">
                Create unlimited one-on-one and group services with our new
                <Box as="span" color="blue.500" px="2">
                  Advanced Scheduling
                </Box>
                add-on for $8/month.
              </Text>
            </Box>
            <Box py="6">
              <Button
                variant="solid"
                colorScheme="blue"
                borderRadius="full"
                h="12"
                p="4"
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box maxW="container.lg" m="auto" py="10" px="4">
          <Stack direction={{ base: "column", lg: "row" }} gap="10">
            <Box>
              <Image src={planImages.marketing_tools} minW={{ lg: "md" }} />
            </Box>
            <VStack gap="4" align="start">
              <Heading>Also included: Free, built-in marketing tools</Heading>
              <Text>
                All Websites & Commerce plans come with Free marketing features
                like email and social posting, so you can find new customers and
                drive sales. But if you want more advanced marketing tools, like
                our Customer Journey Builder, try a paid Marketing plan.
              </Text>
              <Box>
                <Button
                  variant="outline"
                  colorScheme="white"
                  borderRadius="full"
                  h="12"
                  border="1px"
                  borderColor="gray.500"
                  _hover={{ boxShadow: "0px 6px black" }}
                >
                  Explore Marketing plans
                </Button>
              </Box>
            </VStack>
          </Stack>
        </Box>

        <Box bg="blue.100" py={{ base: "4", lg: "8" }}>
          <Box textAlign="center" p="12">
            <Heading>Add on powerful features</Heading>
          </Box>
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "4", lg: "12" }}
            bg="white"
            maxW="container.xl"
            m="auto"
            py="6"
            px={{ lg: "24" }}
            align={{ base: "center" }}
          >
            <Box py="6" order={{ lg: "2" }}>
              <Image
                src={planImages.features}
                maxW={{ base: "sm", lg: "lg" }}
              />
            </Box>
            <VStack gap="6" align="start">
              <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                Add on a domain
              </Heading>
              <Text>
                Buy a custom domain to help people find you on the web. Plus, a
                consistently branded online presence builds trust across email
                and other channels. Choose from over 200 domain extensions,
                including .com, .org, and .net.
              </Text>
              <Box w="full">
                <Input
                  w="full"
                  h="16"
                  placeholder="Start your search here"
                  border="1px"
                  borderColor="blackAlpha.700"
                />
              </Box>
              <Box w="full">
                <Button
                  w={{ base: "full", lg: "max-content" }}
                  h="12"
                  borderRadius="full"
                  colorScheme="blue"
                >
                  Find Your Domain
                </Button>
              </Box>
            </VStack>
          </Stack>
        </Box>
        <Questions />
      </Box>
    </Fragment>
  );
}
