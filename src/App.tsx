import { useEffect, useState } from 'react';
import { ThemeContext } from './contexts';
import { Header } from './components';
import Pages from './pages/pages';
// import Home from './pages/Home';
// import { Home } from './pages';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme}  ${
          theme == 'dark' ? 'bg-black text-white' : 'bg-white text-gray-950'
        } h-full min-h-screen`}
      >
        <Header />

        <Pages.Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
