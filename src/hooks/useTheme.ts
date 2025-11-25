/**
 * useTheme hook
 * Provides access to theme context throughout the app
 */

import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { ThemeContextType } from '../types/theme';

/**
 * Custom hook to access theme context
 * @returns ThemeContextType - theme, themeMode, toggleTheme, setThemeMode
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default useTheme;
