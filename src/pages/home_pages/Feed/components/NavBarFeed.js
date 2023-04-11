import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = () => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href="color">
    
    </Link>
  );


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box 
      w='full'
      bg="purple.100" 
      px={50}>
        <Flex 
            h={16} 
            alignItems="center" 
            justifyContent="space-between">
          <Box>Logo</Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}