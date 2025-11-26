/**
 * Calculator Button Component
 */

import React, {useCallback} from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {useTheme} from '../context/ThemeContext';

interface CalculatorButtonProps {
  value: string;
  onPress: (value: string) => void;
  isOperator?: boolean;
  isEquals?: boolean;
  isClear?: boolean;
  isWide?: boolean;
}

/**
 * Reusable calculator button component with theme-aware styling
 */
const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  value,
  onPress,
  isOperator = false,
  isEquals = false,
  isClear = false,
  isWide = false,
}) => {
  const {theme} = useTheme();

  const handlePress = useCallback(() => {
    onPress(value);
  }, [onPress, value]);

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.button,
      backgroundColor: theme.colors.buttonBackground,
    };

    if (isWide) {
      baseStyle.flex = 2;
    }

    if (isOperator) {
      baseStyle.backgroundColor = theme.colors.operatorBackground;
    }

    if (isEquals) {
      baseStyle.backgroundColor = theme.colors.success;
    }

    if (isClear) {
      baseStyle.backgroundColor = theme.colors.clearBackground;
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.buttonText,
      color: theme.colors.buttonText,
    };

    if (isOperator || isEquals || isClear) {
      baseStyle.color = '#FFFFFF';
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityLabel={`Calculator button ${value}`}
      accessibilityRole="button">
      <Text style={getTextStyle()}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 6,
    minHeight: 70,
    maxHeight: 80,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '500',
  },
});

export default CalculatorButton;
