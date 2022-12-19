import { Flex, Icon } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NavItem({ icon, children, ...rest }) {
  return (
    <Fragment>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Fragment>
  );
}
