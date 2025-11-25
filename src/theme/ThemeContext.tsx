/**
 * Theme context and provider
 * Provides theme access throughout the app
 */

import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';
import { Theme, ThemeMode, ThemeContextType } from '../types/theme';
import { lightColors, darkColors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, lightShadow, darkShadow } from './spacing';

/**
 * Create light theme object
 */
const createLightTheme = (): Theme => ({
  isDark: false,
  colors: lightColors,
  typography,
  spacing,
  borderRadius,
  shadow: lightShadow,
});

/**
 * Create dark theme object
 */
const createDarkTheme = (): Theme => ({
  isDark: true,
  colors: darkColors,
  typography,
  spacing,
  borderRadius,
  shadow: darkShadow,
});

/**
 * Default theme context value
 */
const defaultThemeContext: ThemeContextType = {
  theme: createLightTheme(),
  themeMode: 'system',
  toggleTheme: () => {},
  setThemeMode: () => {},
};

/**
 * Theme context
 */
export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

/**
 * Theme provider props
 */
interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}

/**
 * Theme provider component
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = 'system',
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialMode);

  /**
   * Determine if dark mode should be active
   */
  const isDarkMode = useMemo(() => {
    if (themeMode === 'system') {
      return systemColorScheme === 'dark';
    }
    return themeMode === 'dark';
  }, [themeMode, systemColorScheme]);

  /**
   * Create theme object based on mode
   */
  const theme = useMemo(
    () => (isDarkMode ? createDarkTheme() : createLightTheme()),
    [isDarkMode],
  );

  /**
   * Toggle between light and dark mode
   */
  const toggleTheme = useCallback(() => {
    setThemeMode(currentMode => {
      if (currentMode === 'system') {
        return systemColorScheme === 'dark' ? 'light' : 'dark';
      }
      return currentMode === 'dark' ? 'light' : 'dark';
    });
  }, [systemColorScheme]);

  /**
   * Context value
   */
  const contextValue = useMemo(
    () => ({
      theme,
      themeMode,
      toggleTheme,
      setThemeMode,
    }),
    [theme, themeMode, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
