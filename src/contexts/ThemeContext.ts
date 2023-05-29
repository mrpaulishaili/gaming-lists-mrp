import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeContextType {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
