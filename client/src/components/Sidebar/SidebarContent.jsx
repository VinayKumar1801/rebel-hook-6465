import React, { Fragment } from "react";
import Logo from "../../assets/logo.png";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as Linking, Outlet } from "react-router-dom";
import { FiHome, FiTrendingUp, FiStar, FiHelpCircle } from "react-icons/fi";
import { MdOutlineCampaign, MdContentCopy } from "react-icons/md";
import { BsPeople, BsSearch } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import NavItem from "./NavItem";
import Email from "../../pages/Dashboard/Email";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "#Home" },
  { name: "Campaigns", icon: MdOutlineCampaign, link: "#Campaigns" },
  { name: "Audience", icon: BsPeople, link: "#Audience" },
  { name: "Automations", icon: FiStar, link: "#Automations" },
  { name: "Analytics", icon: FiTrendingUp, link: "#Analytics" },
  { name: "Websites", icon: CgWebsite, link: "#Websites" },
  { name: "Contact", icon: MdContentCopy, link: "/dashboard/contact" },
  { name: "Integrations", icon: GrIntegration, link: "#Integrations" },
  { name: "Help", icon: FiHelpCircle, link: "#Help" },
  { name: "Search", icon: BsSearch, link: "#Search" },
];

export default function SidebarContent({ onClose, ...rest }) {
  return (
    <Fragment>
      <Box
        transition="3s ease"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Linking to="/">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              <Image width={"75%"} src={Logo} />
            </Text>
          </Linking>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((el) => (
          <Linking to={el.link} key={el.name}>
            <NavItem icon={el.icon} link={el.link} text={el.name}>
              {el.name}
            </NavItem>
          </Linking>
        ))}
      </Box>
      {/* Outlet for Displaying Nested components */}

      <Outlet />
    </Fragment>
  );
}
