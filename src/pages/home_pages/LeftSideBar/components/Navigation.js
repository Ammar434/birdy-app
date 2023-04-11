import React, { ReactNode } from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Divider,
  Box,
  CloseButton,
  Flex,
  Icon,
  Menu,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center
} from '@chakra-ui/react';
import { 
  GiWireframeGlobe,
  } from "react-icons/gi";
import {
  MdHome, 
  MdMessage, 
  MdPeople,
  MdOutlinePerson,
  MdOutlineLogout
  } from "react-icons/md";


import { ROOT, NOTIFICATION, MESSAGES, AMIS, PROFIL } from "../../../../Root.js";
import NavItem from './NavItem';


export const LinkItems = [
  { id: 1, name: 'Home', icon: MdHome, link: "/profil"},
  { id: 2, name: 'Notification', icon: GiWireframeGlobe, link: "/notification" },
  { id: 3, name: 'Message', icon: MdMessage, link: "/messages"},
  { id: 4, name: 'Mes Amis', icon: MdPeople, link: "/amis"},
];

const SidebarContent = ({ onClose}) => {
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
      
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
  
      {/* Ici les boutons du menu  */}
      {/* User */}
      <Divider my="6" borderColor="purple.400" />
        <Flex
          align="center"
          p="5"
          mx="4"
          borderRadius="lg"
          cursor="pointer"
          _hover={{
            bg: 'purple.200',
            color: 'white',
          }}>   
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
                  src='https://avatars.dicebear.com/api/male/username.svg'
                />
            
              </MenuButton>
        {/* The dropdown */}
              <MenuList 
              alignItems='center'
              color="black"
              >
                <br />
                <Center>
                  <Avatar
                    size="2xl"
                    src='https://avatars.dicebear.com/api/male/username.svg'
                  />
                </Center>
                <br />
                <Center>
                  <p>User.name</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Paramètre</MenuItem>
                <MenuItem>
                <Link
                  as={RouterLink}
                  onClick={(() => alert("Vous allez être déconnecté"))}
                  to={""}
                  fontWeight="medium"
                  textDecor="underline"
                >
                  <Icon mr="6" fontSize="16"
                        _groupHover={{
                          color: 'black',
                        }}
                        as={MdOutlineLogout}/>
                Logout
                </Link>{" "}
                </MenuItem>
              </MenuList>
            </Menu>
            <Text ml="4" fontWeight="large">
              user.name
                </Text>
        </Flex>
{/* The other buttons */}

          {LinkItems.map((link) => (
            <NavItem key={link.id} icon={link.icon} name={link.name} />
          ))}


  </Box>
  );
};




export default function Navigation({ children }) {

  return (
    <SidebarContent
        display={{ base: 'none', md: 'block' }}
      />  

  );
}

