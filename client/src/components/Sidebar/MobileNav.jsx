import Logo from "../../assets/logo.png";
import {
  IconButton,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { userLogout } from "../../redux/userLogin/userLogin.action";
import { useDispatch } from "react-redux";
import { Link as Linking } from "react-router-dom";

export default function MobileNav({ onOpen, ...rest }) {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(userLogout());
  };
  const userData = JSON.parse(localStorage.getItem("userToken"));
  const name = userData?.name;

  return (
    <Flex
      // position="fixed"
      // w="full"
      // top="0"
      bg="white"
      // zIndex="banner"
      // ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      // bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Image width={"25%"} display="block" margin={"auto"} src={Logo} />
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <AiOutlineUser />

                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{name.toUpperCase()}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <Linking to="/pricing">
                <MenuItem>Billing</MenuItem>
              </Linking>

              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleSubmit}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
