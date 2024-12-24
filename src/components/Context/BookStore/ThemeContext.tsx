import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  themeStyles: {
    light: React.CSSProperties;
    dark: React.CSSProperties;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const ToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: { backgroundColor: "#f9f9f9", color: "#333" },
    dark: { backgroundColor: "#333", color: "#f9f9f9" },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: ToggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
