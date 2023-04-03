import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
    MdOutlineSpaceDashboard,
    MdOutlineChatBubbleOutline,
    MdOutlineNotificationsActive,
  } from "react-icons/md";
import { ROOT, NOTIFICATION, MESSAGES } from "../../../Root.js";

const MenuNavigation = () => {  
    const handleDashboardClick = () => {
    // Navigate to root route when dashboard icon is clicked
    window.location.href = ROOT;
  };

  const handleNotificationsClick = () => {
    // Navigate to notifications route when notifications icon is clicked
    window.location.href = NOTIFICATION;
  };

  const handleMessagesClick = () => {
    // Navigate to messages route when messages icon is clicked
    window.location.href = MESSAGES;
  };

  return (
    <Box w="full" bgColor="gray.100">
      <Box as="nav">
        <Box as="ul">
          <Box as="li" onClick={handleDashboardClick}>
            <MdOutlineSpaceDashboard size={24} />
            <Link as={RouterLink} to={ROOT} color="teal.800" fontWeight="medium" textDecor="underline" ml={2}>
              Dashboard
            </Link>
          </Box>
          <Box as="li" onClick={handleNotificationsClick}>
            <MdOutlineNotificationsActive size={24} />
            <Link
              as={RouterLink}
              to={NOTIFICATION}
              color="teal.800"
              fontWeight="medium"
              textDecor="underline"
              ml={2}
            >
              Notifications
            </Link>
          </Box>
          <Box as="li" onClick={handleMessagesClick}>
            <MdOutlineChatBubbleOutline size={24} />
            <Link as={RouterLink} to={MESSAGES} color="teal.800" fontWeight="medium" textDecor="underline" ml={2}>
              Messages
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 


export default MenuNavigation; 