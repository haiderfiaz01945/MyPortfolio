import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create context with default values
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light'
});

export const ToggleColorMode = ({ children }) => {
  // State to check if the theme is loaded
  const [isLoading, setIsLoading] = useState(true);

  // Initialize mode from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? JSON.parse(savedMode) : 'light';
  });

  // Create the theme using the current mode
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode
      }
    }),
    [mode]
  );

  // Toggle theme mode and save to localStorage
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Effect to synchronize mode with localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(JSON.parse(savedMode));
    }
    // Set loading to false once the theme is set
    setIsLoading(false);
  }, []);

  // Return null or a loading spinner until theme is loaded
  if (isLoading) {
    return null; // You can also return a loading spinner or a placeholder if desired
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
