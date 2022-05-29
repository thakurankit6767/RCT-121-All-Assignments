import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import AppContextProvider from "./AppContextProvider";

const ToggleButton = () => {
  const [theme, toggleTheme] = useContext(AppContext);
  return (
    <div>
      <AppContextProvider />
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default ToggleButton;
