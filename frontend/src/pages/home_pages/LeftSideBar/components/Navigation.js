import React from "react";
import {
  Divider,
  Box,
  CloseButton,
  Flex,
  Text,
  Icon,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Center,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { GiWireframeGlobe } from "react-icons/gi";
import { MdHome, MdMessage, MdOutlineLogout } from "react-icons/md";

import NavItem from "./NavItem";
import { useLogout } from "../../../../hooks/useLogout.js";
export const LinkItems = [
  { id: 1, name: "Home", icon: MdHome },
  { id: 2, name: "Notification", icon: GiWireframeGlobe },
  { id: 3, name: "Messages", icon: MdMessage },
];

const Navigation = ({ selectedComponent, updateSelectedComponent }) => {
  const { logout } = useLogout();

  const handleClick = (newComponent) => {
    updateSelectedComponent(newComponent);
    console.log("selectedComponent in Navigation", selectedComponent);
  };

  return (
    <Box
      as="menu"
      w="full"
      h="full"
      maxW={350}
      justifyContent="center"
      maxH={500}
      borderRadius="3xl"
    >
      {/* Ici le logo de l'app */}
      <Flex h="100" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="5xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} />
      </Flex>

      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onClick={() => handleClick("Profil")}
        _hover={{
          bg: "purple.200",
          color: "white",
        }}
      >
        {/* The avatar */}
        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
          >
            <Avatar
              size="sm"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
          </MenuButton>
          {/* The dropdown */}
          <MenuList alignItems="center" color="black">
            <br />
            <Center>
              <Avatar
                size="2xl"
                src="https://avatars.dicebear.com/api/male/username.svg"
              />
            </Center>
            <br />
            <Center>
              <p>User.name</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Paramètres</MenuItem>
            <MenuItem>
              <Link
                as={RouterLink}
                onClick={() => logout()}
                to={""}
                fontWeight="medium"
                textDecor="underline"
              >
                <Icon
                  mr="6"
                  fontSize="16"
                  _groupHover={{
                    color: "black",
                  }}
                  as={MdOutlineLogout}
                />
                Logout
              </Link>{" "}
            </MenuItem>
          </MenuList>
        </Menu>
        <Text ml="4" fontWeight="large">
          user.name
        </Text>
      </Flex>

      <Divider my="6" borderColor="purple.400" />

      {/* The other buttons */}

      {LinkItems.map((link) => (
        <NavItem
          onClick={handleClick}
          key={link.name}
          icon={link.icon}
          selectedComponent={selectedComponent}
          updateSelectedComponent={updateSelectedComponent}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default Navigation;
