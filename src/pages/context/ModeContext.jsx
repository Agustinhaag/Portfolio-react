import { useContext, createContext, useState } from "react";

const DarkContext = createContext();

export const useDarkMode = () => useContext(DarkContext);

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const toogleMode = () => {
    setMode(!mode);
  };

  return (
    <DarkContext.Provider value={{ mode, toogleMode }}>
      {children}
    </DarkContext.Provider>
  );
};
