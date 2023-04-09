import React, { ReactNode } from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  Box,
  Center,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Spacer,
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

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { ROOT, NOTIFICATION, MESSAGES, AMIS, PROFIL } from './../../../../Root';
import NavItem from './NavItem';


const LinkItems = [
  { name: 'Home', icon: MdHome},
  { name: 'Notification', icon: GiWireframeGlobe },
  { name: 'Message', icon: MdMessage },
  { name: 'Mes Amis', icon: MdPeople},
  { name: 'Mon Profil', icon: MdOutlinePerson}
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      as="menu"
      w="full"
      h="full"
      maxW={350}
      bg="white"
      alignItems="center"
      padding={6}
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="3xl"
      {...rest}>

      {/* Ici le logo de l'app */}
      <Flex h="100" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="5xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />

      </Flex>
     
     {/* add on click items with a link component  */}


      {/* Ici les boutons du menu  */}
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
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


      <Box 
      ml={{ base: 0, md: 10 }} p="4">
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
          
      </Box>
    </>
  );
}

