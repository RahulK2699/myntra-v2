import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isOpacity, setIsOpacity] = useState(false);

  const handleOpacity = (newOpacity) => {
    setIsOpacity(newOpacity);
  };
  return (
    <AppContext.Provider value={{ isOpacity, handleOpacity }}>
      {children}
    </AppContext.Provider>
  );
};
