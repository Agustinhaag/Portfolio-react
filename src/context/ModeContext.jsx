import { useContext, createContext, useState, useEffect } from "react";

const DarkContext = createContext();

export const useDarkMode = () => useContext(DarkContext);

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const toogleMode = () => {
    setMode(!mode);
  };
useEffect(()=>{
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toogleMode();
}
},[])
  return (
    <DarkContext.Provider value={{ mode, toogleMode }}>
      {children}
    </DarkContext.Provider>
  );
};
