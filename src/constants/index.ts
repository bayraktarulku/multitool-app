/**
 * Application constants
 */

/**
 * App information
 */
export const APP_INFO = {
  name: 'MultiTool',
  version: '0.1.0',
  description: 'All-in-one utility app',
  author: 'Ülkü Bayraktar',
  email: 'contact@multitool.app',
  website: 'https://github.com/bayraktarulku/multitool-app',
};

/**
 * Screen names for navigation
 */
export const SCREENS = {
  CALCULATOR: 'Calculator',
  CONVERTER: 'Converter',
  QRCODE: 'QRCode',
  QR_SCANNER: 'Scanner',
  QR_GENERATOR: 'Generator',
} as const;

/**
 * Storage keys for AsyncStorage
 */
export const STORAGE_KEYS = {
  THEME_MODE: '@multitool/theme_mode',
  CALCULATOR_HISTORY: '@multitool/calculator_history',
  CONVERTER_FAVORITES: '@multitool/converter_favorites',
  QR_HISTORY: '@multitool/qr_history',
};

/**
 * Animation durations
 */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

/**
 * Default QR code configuration
 */
export const QR_CONFIG = {
  DEFAULT_SIZE: 200,
  MIN_SIZE: 100,
  MAX_SIZE: 400,
  LOGO_SIZE: 50,
  QUIET_ZONE: 10,
};

/**
 * Calculator button layout
 */
export const CALCULATOR_BUTTONS = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '⌫', '='],
];

/**
 * Maximum lengths for inputs
 */
export const MAX_INPUT_LENGTH = {
  CALCULATOR_DISPLAY: 15,
  CONVERTER_VALUE: 20,
  QR_TEXT: 2000,
};

export default {
  APP_INFO,
  SCREENS,
  STORAGE_KEYS,
  ANIMATION,
  QR_CONFIG,
  CALCULATOR_BUTTONS,
  MAX_INPUT_LENGTH,
};
