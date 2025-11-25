/**
 * Calculator Display component
 * Shows the current calculation and result
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface CalculatorDisplayProps {
  expression: string;
  display: string;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  expression,
  display,
}) => {
  const { theme } = useTheme();

  // Calculate font size based on display length
  const getFontSize = (): number => {
    const length = display.length;
    if (length <= 8) return theme.typography.fontSize.display;
    if (length <= 12) return theme.typography.fontSize.xxxl;
    if (length <= 16) return theme.typography.fontSize.xxl;
    return theme.typography.fontSize.xl;
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.lg,
          borderRadius: theme.borderRadius.lg,
        },
        theme.shadow,
      ]}
    >
      {/* Expression display */}
      <Text
        style={[
          styles.expression,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.lg,
          },
        ]}
        numberOfLines={1}
      >
        {expression || ' '}
      </Text>

      {/* Main display */}
      <Text
        style={[
          styles.display,
          {
            color: theme.colors.text,
            fontSize: getFontSize(),
          },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {display}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: 120,
  },
  expression: {
    marginBottom: 8,
  },
  display: {
    fontWeight: '300',
  },
});

export default CalculatorDisplay;
