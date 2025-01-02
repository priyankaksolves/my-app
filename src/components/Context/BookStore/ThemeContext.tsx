import { createContext, useState, useContext, ReactNode } from 'react';

// Initial context value
const initialContext = {
  theme: 'light',  // Default theme
  toggleTheme: () => {},  // Default toggle function (empty, will be updated by the provider)
};

// Create the Theme Context
const ThemeContext = createContext(initialContext);

// Custom Hook to use the Theme Context
export const UseTheme = () => {
  return useContext(ThemeContext);
};

// Theme Context Provider Component
interface ThemeProviderProps {
  children: ReactNode;  // Explicitly type the 'children' prop
}

// Theme Context Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? {
    backgroundColor: '#ffffff',
    color: '#000000',
  } : {
    backgroundColor: '#333333',
    color: '#ffffff',
  };

    // Define theme styles for light and dark themes

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>{children}</div> {/* Apply theme styles dynamically */}
      </ThemeContext.Provider>
  );
};