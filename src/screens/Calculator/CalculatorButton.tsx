/**
 * Calculator Button component
 * Individual calculator button with styling
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../../hooks/useTheme';
import { CalculatorButtonType } from '../../../types/calculator';

interface CalculatorButtonProps {
  label: string;
  type: CalculatorButtonType;
  onPress: () => void;
  span?: number;
  style?: ViewStyle;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  type,
  onPress,
  span = 1,
  style,
}) => {
  const { theme } = useTheme();

  const getBackgroundColor = (): string => {
    switch (type) {
      case 'operator':
        return theme.colors.operatorButton;
      case 'function':
        return theme.colors.functionButton;
      case 'equal':
        return theme.colors.equalButton;
      default:
        return theme.colors.numberButton;
    }
  };

  const getTextColor = (): string => {
    switch (type) {
      case 'operator':
        return theme.colors.white;
      case 'function':
        return theme.colors.text;
      case 'equal':
        return theme.colors.white;
      default:
        return theme.colors.text;
    }
  };

  const buttonStyles: ViewStyle[] = [
    styles.button,
    {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.borderRadius.lg,
      flex: span,
      marginHorizontal: span > 1 ? 0 : 4,
    },
    style,
  ];

  // Render backspace icon
  if (label === '⌫') {
    return (
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityLabel="Backspace"
        accessibilityRole="button"
      >
        <Icon name="backspace-outline" size={28} color={getTextColor()} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`${label} button`}
      accessibilityRole="button"
    >
      <Text
        style={[
          styles.text,
          {
            color: getTextColor(),
            fontSize: type === 'equal' ? 36 : 28,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  text: {
    fontWeight: '500',
  },
});

export default CalculatorButton;
