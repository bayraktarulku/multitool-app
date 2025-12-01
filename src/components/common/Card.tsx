import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, style, elevated = true }) => {
  const { theme } = useTheme();

  const cardStyle: ViewStyle = {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...(elevated && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme.dark ? 0.3 : 0.1,
      shadowRadius: 8,
      elevation: 4,
    }),
  };

  return <View style={[cardStyle, style]}>{children}</View>;
};

