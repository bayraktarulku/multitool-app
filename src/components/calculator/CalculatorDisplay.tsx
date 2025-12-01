import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { formatDisplay } from '../../utils/calculatorLogic';

interface CalculatorDisplayProps {
  value: string;
  expression?: string;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  value,
  expression,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.displayBackground,
          borderRadius: theme.borderRadius.lg,
          padding: theme.spacing.lg,
        },
      ]}
    >
      {expression ? (
        <Text
          style={[
            styles.expression,
            { color: theme.colors.textSecondary, fontSize: theme.typography.body },
          ]}
          numberOfLines={1}
        >
          {expression}
        </Text>
      ) : null}
      <Text
        style={[
          styles.display,
          { color: theme.colors.text, fontSize: theme.typography.h1 * 1.5 },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {formatDisplay(value)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 140,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  expression: {
    marginBottom: 8,
    fontWeight: '400',
  },
  display: {
    fontWeight: '300',
    letterSpacing: 1,
    minHeight: 60,
  },
});

