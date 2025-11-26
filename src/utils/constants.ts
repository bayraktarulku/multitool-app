/**
 * Application constants
 */

import {Theme} from '../types';

/**
 * Light theme configuration
 */
export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#F5F5F7',
    card: '#FFFFFF',
    text: '#000000',
    border: '#C6C6C8',
    notification: '#FF3B30',
    error: '#FF3B30',
    success: '#34C759',
    accent: '#FF9500',
    secondary: '#8E8E93',
    buttonBackground: '#E5E5EA',
    buttonText: '#000000',
    operatorBackground: '#FF9500',
    clearBackground: '#FF3B30',
  },
};

/**
 * Dark theme configuration
 */
export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
    error: '#FF453A',
    success: '#32D74B',
    accent: '#FF9F0A',
    secondary: '#636366',
    buttonBackground: '#333333',
    buttonText: '#FFFFFF',
    operatorBackground: '#FF9F0A',
    clearBackground: '#FF453A',
  },
};

/**
 * Calculator button configurations
 */
export const CALCULATOR_BUTTONS = [
  ['AC', 'C', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '±', '='],
];

/**
 * Storage keys for AsyncStorage
 */
export const STORAGE_KEYS = {
  THEME_PREFERENCE: '@multitool_theme',
  QR_HISTORY: '@multitool_qr_history',
  CALCULATOR_HISTORY: '@multitool_calculator_history',
} as const;

/**
 * QR Code configuration
 */
export const QR_CONFIG = {
  MAX_HISTORY_ITEMS: 10,
  DEFAULT_SIZE: 200,
  MIN_SIZE: 100,
  MAX_SIZE: 300,
} as const;

/**
 * App configuration
 */
export const APP_CONFIG = {
  NAME: 'MultiTool',
  VERSION: '1.0.0',
  PACKAGE_NAME: 'com.multitool.app',
} as const;
