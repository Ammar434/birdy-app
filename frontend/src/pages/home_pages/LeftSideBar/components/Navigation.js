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
import { useAuthContext } from "../../../../hooks/useAuthContext";

export const LinkItems = [
  { id: 1, name: "Home", icon: MdHome },
  { id: 2, name: "Notification", icon: GiWireframeGlobe },
  { id: 3, name: "Messages", icon: MdMessage },
];

const Navigation = ({ selectedComponent, updateSelectedComponent }) => {
  const { logout } = useLogout();
  const { pseudo, avatar } = useAuthContext();
  

  const handleClick = (newComponent) => {
    updateSelectedComponent(newComponent);
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
        {/* L'avatar */}
        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
          >
            <Avatar
              size="sm"
              src={avatar}
            />
          </MenuButton>
          {/* Le menu */}
          <MenuList alignItems="center" color="black">
            <br />
            <Center>
              <Avatar
                size="2xl"
                src={avatar}
                />
            </Center>
            <br />
            <Center>
              <p>{pseudo}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Paramètres</MenuItem>
            <MenuItem>

            </MenuItem>
          </MenuList>
        </Menu>
        <Text ml="4" fontWeight="large">
          {pseudo}
        </Text>
      </Flex>

      <Divider my="6" borderColor="purple.400" />

      {/* L'autre boutton */}

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
      <Link
        as={RouterLink}
        onClick={() => logout()}
        to="/"
      >
        <Flex 
          align="center"
          p="5"
          mx="4"
          //can you add the flex down the box 
          my="auto"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            borderColor: "purple.200",
            borderWidth: "2px",
            color: "white",
          }}>
          <Icon
            mr="2"
            fontSize="16"
            as={MdOutlineLogout}
          />
          Deconnexion
        </Flex>
      </Link>{" "}
        

    </Box>
  );
};

export default Navigation;
