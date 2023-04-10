import React from 'react';
import { Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

import { LinkItems } from './Navigation';

const NavItem = ({ icon, children, ...rest }) => {
  const link = LinkItems.find((item) => item.name === children).link;
    return (
      <Link 
      // as={RouterLink}
      // to={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="5"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'purple.200',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
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