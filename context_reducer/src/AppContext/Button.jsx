import React, { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import style from "./button.module.css"

const Button = ({ text,onClick }) => {
  const [theme,toggleTheme] = useContext(AppContext);
  return (
    <button
      className={`${style.buttonBase} ${
        theme === "light" ? style.buttonLight : style.buttonDark
      }`}
      
    >
      {text}
    </button>
  );
};

export default Button;
