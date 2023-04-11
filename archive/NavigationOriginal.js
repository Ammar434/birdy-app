import React, { ReactNode } from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  Icon,
  Menu,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
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


import { ROOT, NOTIFICATION, MESSAGES, AMIS, PROFIL } from './../../../../Root';
import NavItem from './NavItem';


export const LinkItems = [
  { id: 0, name: 'Mon Profil', icon: MdOutlinePerson},
  { id: 1, name: 'Home', icon: MdHome },
  { id: 2, name: 'Notification', icon: GiWireframeGlobe },
  { id: 3, name: 'Message', icon: MdMessage },
  { id: 4, name: 'Mes Amis', icon: MdPeople}
];

const SidebarContent = ({ onClose}) => {
  return (
    <Box
      as="menu"
      w="full"
      h="full"
      maxW={350}
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
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      
    <Menu>
      {/* The avatar */}
      <MenuButton
        as={Button}
        rounded="full"
        variant="link"
        cursor="pointer"
        minW={0}>
        <Avatar
          size={'sm'}
          src={'https://avatars.dicebear.com/api/male/username.svg'}
        />
      </MenuButton>
      {/* The dropdown */}
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            size={'2xl'}
            src={'https://avatars.dicebear.com/api/male/username.svg'}
          />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
    </Box>
  );
};




export default function Navigation({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <> 
       <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

   
      <Link
            as={RouterLink}
            onClick={(() => alert("Vous allez être déconnecté"))}
            to={""}
            fontWeight="medium"
            textDecor="underline"
          >
         <Icon mr="4" fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={MdOutlineLogout}/>

        </Link>{" "}
          
    </>

  );
}

