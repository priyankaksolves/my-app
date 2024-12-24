import React from "react";
import { UseTheme } from "./ThemeContext";

const ThemeToggler: React.FC = () => {
  const { toggleTheme } = UseTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
