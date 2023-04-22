import { Text, Box } from "@chakra-ui/react";
import React from "react"; 


const Notification = () => {
    return (
    <Box
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
    >
        <Text fontSize={50} color="purple.100"> 
        Notifications bientôt disponible . . . 
        </Text>
    </Box>
    );
}; 

export default Notification; 

// //ideé pour la suite : 
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Connect to your backend server

// const Notification = ({ message }) => {
//   return <div className="notification">{message}</div>;
// };

// const Notifications = ({ notifications }) => {
//   return (
//     <div className="notifications">
//       {notifications.map(notification => (
//         <Notification key={notification.id} message={notification.message} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch friends' activity when the app loads
//     fetchFriendsActivity();
    
//     // Listen for activity updates via the WebSocket connection
//     socket.on('activity', handleActivityUpdate);

//     return () => {
//       socket.off('activity', handleActivityUpdate);
//     };
//   }, []);

//   const fetchFriendsActivity = async () => {
//     // Fetch friends' activity from your backend server
//     const activity = await fetch('/api/activity/friends');

//     // Update notification state with any relevant activity
//     setNotifications(activity.filter(activity => activity.type === 'like' || activity.type === 'repost'));
//   };

//   const handleActivityUpdate = (activity) => {
//     // Update notification state with new activity
//     if (activity.type === 'like' || activity.type === 'repost') {
//       setNotifications([...notifications, activity]);
//     }
//   };

//   return (
//     <div>
//       <h1>Notifications</h1>
//       <Notifications notifications={notifications} />
//     </div>
//   );
// };

// export default App;
