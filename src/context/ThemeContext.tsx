import React, { createContext, useState, useCallback } from "react";
import { Theme } from "../types/theme";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("isDarkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = useCallback(() => {
    setIsDark((prev: boolean) => {
      const newValue = !prev;
      localStorage.setItem("isDarkMode", JSON.stringify(newValue));
      return newValue;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
