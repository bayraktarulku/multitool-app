export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    card: string;
    text: string;
    textSecondary: string;
    border: string;
    notification: string;
    error: string;
    success: string;
    buttonBackground: string;
    buttonText: string;
    operatorBackground: string;
    operatorText: string;
    displayBackground: string;
    gradientStart: string;
    gradientEnd: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    h1: number;
    h2: number;
    h3: number;
    body: number;
    caption: number;
  };
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#f8f9fa',
    surface: '#ffffff',
    card: '#ffffff',
    text: '#1f2937',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    notification: '#ef4444',
    error: '#ef4444',
    success: '#10b981',
    buttonBackground: '#f3f4f6',
    buttonText: '#1f2937',
    operatorBackground: '#6366f1',
    operatorText: '#ffffff',
    displayBackground: '#ffffff',
    gradientStart: '#6366f1',
    gradientEnd: '#8b5cf6',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    h1: 32,
    h2: 24,
    h3: 20,
    body: 16,
    caption: 14,
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#818cf8',
    secondary: '#a78bfa',
    background: '#111827',
    surface: '#1f2937',
    card: '#1f2937',
    text: '#f9fafb',
    textSecondary: '#9ca3af',
    border: '#374151',
    notification: '#f87171',
    error: '#f87171',
    success: '#34d399',
    buttonBackground: '#374151',
    buttonText: '#f9fafb',
    operatorBackground: '#818cf8',
    operatorText: '#ffffff',
    displayBackground: '#1f2937',
    gradientStart: '#818cf8',
    gradientEnd: '#a78bfa',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    h1: 32,
    h2: 24,
    h3: 20,
    body: 16,
    caption: 14,
  },
};

