import { UseTheme } from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggler">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggler;

