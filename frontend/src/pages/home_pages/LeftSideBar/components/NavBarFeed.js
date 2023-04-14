import {
  Box,
  Flex,
  Button,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',

//     }}
//     href="color">
  
//   </Link>
// );

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
      text = '';
      break;
  }
  return text;
}

export default function Nav( {selectedComponent}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = getText(selectedComponent);
  console.log(selectedComponent)

  return (
    <Box 
      w='full'
      bg="purple.200" 
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
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>

      </Flex>
    </Box>
  );
}

