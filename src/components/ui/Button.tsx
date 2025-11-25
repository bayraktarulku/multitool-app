/**
 * Button component
 * Reusable button with multiple variants
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  accessibilityLabel,
}) => {
  const { theme } = useTheme();

  const getBackgroundColor = (): string => {
    if (disabled) return theme.colors.textDisabled;

    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'outline':
      case 'ghost':
        return 'transparent';
      default:
        return theme.colors.primary;
    }
  };

  const getTextColor = (): string => {
    if (disabled) return theme.colors.surface;

    switch (variant) {
      case 'primary':
      case 'secondary':
        return theme.colors.white;
      case 'outline':
        return theme.colors.primary;
      case 'ghost':
        return theme.colors.text;
      default:
        return theme.colors.white;
    }
  };

  const getSizeStyles = (): { button: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          button: {
            paddingVertical: theme.spacing.xs,
            paddingHorizontal: theme.spacing.sm,
          },
          text: { fontSize: theme.typography.fontSize.sm },
        };
      case 'large':
        return {
          button: {
            paddingVertical: theme.spacing.md,
            paddingHorizontal: theme.spacing.xl,
          },
          text: { fontSize: theme.typography.fontSize.lg },
        };
      default:
        return {
          button: {
            paddingVertical: theme.spacing.sm,
            paddingHorizontal: theme.spacing.lg,
          },
          text: { fontSize: theme.typography.fontSize.md },
        };
    }
  };

  const sizeStyles = getSizeStyles();

  const buttonStyles: ViewStyle[] = [
    styles.button,
    {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.borderRadius.md,
    },
    sizeStyles.button,
    variant === 'outline' && {
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    fullWidth && styles.fullWidth,
    style,
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    { color: getTextColor() },
    sizeStyles.text,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
});

export default Button;
