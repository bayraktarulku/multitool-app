import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

interface CalculatorButtonProps {
  value: string;
  onPress: (value: string) => void;
  type?: 'number' | 'operator' | 'equals' | 'function';
  size?: 'normal' | 'wide';
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  value,
  onPress,
  type = 'number',
  size = 'normal',
}) => {
  const { theme } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    let backgroundColor = theme.colors.buttonBackground;

    if (type === 'operator' || type === 'equals') {
      backgroundColor = theme.colors.operatorBackground;
    }

    return {
      ...styles.button,
      backgroundColor,
      borderRadius: theme.borderRadius.lg,
      ...(size === 'wide' && styles.wideButton),
    };
  };

  const getTextColor = () => {
    if (type === 'operator' || type === 'equals') {
      return theme.colors.operatorText;
    }
    return theme.colors.text;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={() => onPress(value)}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: getTextColor() }]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  wideButton: {
    flex: 2.2,
    aspectRatio: 2.2,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '500',
  },
});

