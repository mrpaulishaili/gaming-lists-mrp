import { useContext } from 'react';
import logo from '../assets/images/logo.png';
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../contexts';

const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    // Handle the case when the context value is null
    return null;
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    if (setTheme) {
      if (theme == 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    localStorage.setItem('theme', theme || 'light');
  };

  return (
    <header className="flex justify-between shadow-md px-6 items-center gap-6">
      {/* Logo */}
      <div className="logo h-15 w-15">
        <img
          src={logo}
          alt=""
          className="object-cover"
          height={60}
          width={60}
        />
      </div>
      {/* Search field */}
      <div className="w-full flex items-center bg-slate-200 px-4 py-2 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search games"
          className="w-full bg-transparent px-2 outline-none focus-within:outline-dashed"
        />
      </div>
      {/* Theme changer */}
      <div
        className="theme-changer cursor-pointer bg-slate-100 dark:bg-slate-900 p-2 rounded-full text-xl"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <HiMoon /> : <HiSun />}
      </div>
    </header>
  );
};

export default Header;
