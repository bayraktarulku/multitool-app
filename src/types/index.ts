/**
 * Theme types for the application
 */
export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    error: string;
    success: string;
    accent: string;
    secondary: string;
    buttonBackground: string;
    buttonText: string;
    operatorBackground: string;
    clearBackground: string;
  };
}

/**
 * Calculator types
 */
export type CalculatorOperator = '+' | '-' | '×' | '÷' | '%' | null;

export interface CalculatorState {
  displayValue: string;
  operator: CalculatorOperator;
  previousValue: number | null;
  waitingForOperand: boolean;
  expression: string;
}

/**
 * Unit Converter types
 */
export interface Unit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface ConversionCategory {
  id: string;
  name: string;
  icon: string;
  units: Unit[];
}

/**
 * QR Code types
 */
export interface QRHistoryItem {
  id: string;
  data: string;
  timestamp: number;
  type: 'scanned' | 'generated';
}

export type QRMode = 'scanner' | 'generator';

/**
 * Navigation types
 */
export type RootTabParamList = {
  Calculator: undefined;
  Converter: undefined;
  QRCode: undefined;
};

/**
 * Theme Context types
 */
export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}
