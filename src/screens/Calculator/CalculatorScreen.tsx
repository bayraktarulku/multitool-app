/**
 * Calculator Screen
 * Main calculator with basic operations
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaContainer, ScreenHeader } from '../../components';
import { useTheme } from '../../hooks/useTheme';
import { useCalculator } from '../../hooks/useCalculator';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKeypad } from './CalculatorKeypad';

export const CalculatorScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { state, handleButtonPress } = useCalculator();

  return (
    <SafeAreaContainer>
      <ScreenHeader
        title="Calculator"
        rightAction={{
          icon: theme.isDark ? 'white-balance-sunny' : 'moon-waning-crescent',
          onPress: toggleTheme,
          accessibilityLabel: 'Toggle theme',
        }}
      />

      <View style={[styles.container, { paddingHorizontal: theme.spacing.md }]}>
        {/* Display area */}
        <View style={styles.displayContainer}>
          <CalculatorDisplay
            expression={state.expression}
            display={state.display}
          />
        </View>

        {/* Keypad */}
        <View style={styles.keypadContainer}>
          <CalculatorKeypad onAction={handleButtonPress} />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 0.35,
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },
  keypadContainer: {
    flex: 0.65,
  },
});

export default CalculatorScreen;
