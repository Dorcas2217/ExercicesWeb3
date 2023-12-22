import React, { createContext, useState } from "react";

const Context = createContext(null);

const ProviderWrapper = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const getCurrentThemeDetails = () => {
    const themeDetails = {
      backgroundColor: isDarkTheme ? "#333" : "#f0f0f0",
      primaryTextColor: isDarkTheme ? "white" : "#333",
      secondaryTextColor: isDarkTheme ? "gray" : "darkgray",
      linkColor: isDarkTheme ? "#646cff" : "#535bf2",
    };

    return themeDetails;
  };

  const setDarkTheme = () => {
    setIsDarkTheme(true);
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const exposedValue = {
    setDarkTheme,
    setIsDarkTheme,
    setLightTheme,
    getCurrentThemeDetails,
    toggleTheme,
    isDarkTheme,
  };

  return (
    <Context.Provider value={exposedValue}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ProviderWrapper };
