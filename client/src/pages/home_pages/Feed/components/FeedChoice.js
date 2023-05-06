import React from "react";

import Profil from "./Profil";
import Feed from "./Feed";
import Messages from "./Messages";
import Notification from "./Notification";

const FeedChoice = ({ selectedComponent }) => {
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Home":
        return <Feed />;
      case "Profil":
        return <Profil />;
      case "Messages":
        return <Messages />;
      case "Notification":
        return <Notification />;
      default:
        return <Feed />;
    }
  };
  return <>{renderComponent()}</>;
};

export default FeedChoice;
