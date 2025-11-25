/**
 * Theme color definitions
 * Contains both light and dark theme color palettes
 */

import { ThemeColors } from '../types/theme';

export const lightColors: ThemeColors = {
  // Primary colors - Indigo
  primary: '#6366F1',
  primaryLight: '#818CF8',
  primaryDark: '#4F46E5',

  // Secondary colors - Teal
  secondary: '#14B8A6',
  secondaryLight: '#2DD4BF',
  secondaryDark: '#0D9488',

  // Background colors
  background: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#FFFFFF',

  // Text colors
  text: '#1E293B',
  textSecondary: '#64748B',
  textDisabled: '#94A3B8',

  // Status colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Border colors
  border: '#E2E8F0',
  divider: '#F1F5F9',

  // Special colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Calculator specific
  operatorButton: '#F59E0B',
  numberButton: '#F1F5F9',
  functionButton: '#E2E8F0',
  equalButton: '#6366F1',
};

export const darkColors: ThemeColors = {
  // Primary colors - Indigo
  primary: '#818CF8',
  primaryLight: '#A5B4FC',
  primaryDark: '#6366F1',

  // Secondary colors - Teal
  secondary: '#2DD4BF',
  secondaryLight: '#5EEAD4',
  secondaryDark: '#14B8A6',

  // Background colors
  background: '#0F172A',
  surface: '#1E293B',
  card: '#334155',

  // Text colors
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  textDisabled: '#64748B',

  // Status colors
  success: '#4ADE80',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',

  // Border colors
  border: '#334155',
  divider: '#1E293B',

  // Special colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Calculator specific
  operatorButton: '#FBBF24',
  numberButton: '#334155',
  functionButton: '#475569',
  equalButton: '#818CF8',
};
