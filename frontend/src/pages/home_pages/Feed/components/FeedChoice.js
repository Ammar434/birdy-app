import React from "react";
import Feed from "./Feed";
import Profil from "./Profil";
import Messages from "./Messages";
import Notification from "./Notification";

const FeedChoice = ({ selectedComponent }) => {
  return (
    <>
      {selectedComponent === "Home" && <Feed />}
      {selectedComponent === "Profil" && <Profil />}
      {selectedComponent === "Messages" && <Messages />}
      {selectedComponent === "Notification" && <Notification />}
    </>
  );
};

export default FeedChoice;
