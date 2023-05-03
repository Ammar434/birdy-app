import {
  Box,
  Flex,
  Button,
  Link,
  Icon,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import theme from '../../../../utils/theme.js';
import { Link as RouterLink } from 'react-router-dom';
import { useLogout } from '../../../../hooks/useLogout.js';

import { MdOutlineLogout } from 'react-icons/md';

function getText(selectedComponent) {
  let text = '';
  switch (selectedComponent) {
    case 'Home':
      text = 'Home';
      break;
    case 'Profil':
      text = 'Profil';
      break;
    case 'Messages':
      text = 'Messages';
      break;
    case 'Notification':
      text = 'Notification';
      break;
    default:
      text = 'Home';
      break;
  }
  return text;
}

export default function Nav( {selectedComponent}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = getText(selectedComponent);
  const { logout } = useLogout();


  return (
    <Box 
      w='full'
      bg={colorMode === "light" ? "white" : "black"}

      borderRadius="3xl"
      px={50}>
      <Flex 
        h={16} 
        alignItems="center" 
        justifyContent="space-between">

        <Text fontSize="30px" fontFamily="monospace" >
          {text}
        </Text>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? 
                <MoonIcon style={{ backgroundColor: 'transparent' }} /> 
                : 
                  <SunIcon style={{ backgroundColor: 'transparent' }}  />}
            </Button>
          </Stack>
        </Flex>
       
      </Flex>
    </Box>
  );
}

