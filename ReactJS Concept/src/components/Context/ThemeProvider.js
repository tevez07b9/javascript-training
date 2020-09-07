import React, { Component } from "react";
import { themes } from "./themeContext";

const ThemeContext = React.createContext();

class ThemeProvider extends Component {
  // Context state
  state = {
    theme: {},
  };

  // Method to update state
  setTheme = (theme) => {
    this.setState((prevState) => ({ ...themes[theme] }));
  };

  render() {
    const { children } = this.props;
    const theme = this.state;
    const { setTheme } = this;

    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <h1>Provider</h1>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
