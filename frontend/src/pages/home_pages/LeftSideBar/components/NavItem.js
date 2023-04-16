import React from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";

const NavItem = ({
  children,
  icon,
  selectedComponent,
  updateSelectedComponent,
  ...rest
}) => {
  function handleClick() {
    const selected = children;
    updateSelectedComponent(selected);
  }

  return (
    <Link
      onClick={handleClick}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "purple.200",
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
    </Link>
  );
};

export default NavItem;
