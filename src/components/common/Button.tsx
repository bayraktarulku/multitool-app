import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  ...props
}) => {
  const { theme } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    };

    const sizeStyles: Record<string, ViewStyle> = {
      small: { paddingVertical: theme.spacing.sm, paddingHorizontal: theme.spacing.md },
      medium: { paddingVertical: theme.spacing.md, paddingHorizontal: theme.spacing.lg },
      large: { paddingVertical: theme.spacing.lg, paddingHorizontal: theme.spacing.xl },
    };

    const variantStyles: Record<string, ViewStyle> = {
      primary: { backgroundColor: theme.colors.primary },
      secondary: { backgroundColor: theme.colors.secondary },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.primary,
      },
    };

    return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: '600',
    };

    const sizeStyles: Record<string, TextStyle> = {
      small: { fontSize: theme.typography.caption },
      medium: { fontSize: theme.typography.body },
      large: { fontSize: theme.typography.h3 },
    };

    const variantStyles: Record<string, TextStyle> = {
      primary: { color: '#ffffff' },
      secondary: { color: '#ffffff' },
      outline: { color: theme.colors.primary },
    };

    return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

