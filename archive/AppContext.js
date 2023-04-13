import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState("Feed");

  return (
    <AppContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </AppContext.Provider>
  );
};