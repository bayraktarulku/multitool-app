/**
 * Calculator Screen
 */

import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import CalculatorButton from '../components/CalculatorButton';
import {CalculatorState, CalculatorOperator} from '../types';
import {
  getInitialCalculatorState,
  handleDigitInput,
  handleDecimalInput,
  handleOperatorInput,
  handleEqualsInput,
  handleClearInput,
  handleAllClearInput,
  handleToggleSign,
  handlePercentage,
} from '../utils/calculatorLogic';

/**
 * Calculator screen with basic arithmetic operations
 */
const CalculatorScreen: React.FC = () => {
  const {theme, isDark, toggleTheme} = useTheme();
  const [state, setState] = useState<CalculatorState>(getInitialCalculatorState());

  // Handle button press
  const handleButtonPress = useCallback((value: string) => {
    switch (value) {
      case 'AC':
        setState(handleAllClearInput());
        break;
      case 'C':
        setState(prev => handleClearInput(prev));
        break;
      case '±':
        setState(prev => handleToggleSign(prev));
        break;
      case '%':
        setState(prev => handlePercentage(prev));
        break;
      case '=':
        setState(prev => handleEqualsInput(prev));
        break;
      case '.':
        setState(prev => handleDecimalInput(prev));
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        setState(prev => handleOperatorInput(prev, value as CalculatorOperator));
        break;
      default:
        // It's a digit
        if (/^[0-9]$/.test(value)) {
          setState(prev => handleDigitInput(prev, value));
        }
        break;
    }
  }, []);

  // Determine if a button is an operator
  const isOperator = useCallback((value: string): boolean => {
    return ['+', '-', '×', '÷'].includes(value);
  }, []);

  // Determine if a button is the clear button
  const isClear = useCallback((value: string): boolean => {
    return ['AC', 'C'].includes(value);
  }, []);

  // Button rows
  const buttonRows = useMemo(
    () => [
      ['AC', 'C', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '±', '='],
    ],
    [],
  );

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* Header with theme toggle */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: theme.colors.text}]}>Calculator</Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[styles.themeToggle, {backgroundColor: theme.colors.card}]}
          accessibilityLabel="Toggle theme">
          <Icon
            name={isDark ? 'weather-sunny' : 'weather-night'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* Display */}
      <View style={[styles.display, {backgroundColor: theme.colors.card}]}>
        {state.expression ? (
          <Text style={[styles.expression, {color: theme.colors.secondary}]}>
            {state.expression}
          </Text>
        ) : null}
        <Text
          style={[styles.displayText, {color: theme.colors.text}]}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {state.displayValue}
        </Text>
      </View>

      {/* Button Grid */}
      <View style={styles.buttonGrid}>
        {buttonRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map(value => (
              <CalculatorButton
                key={value}
                value={value}
                onPress={handleButtonPress}
                isOperator={isOperator(value)}
                isEquals={value === '='}
                isClear={isClear(value)}
                isWide={value === '0'}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  themeToggle: {
    padding: 10,
    borderRadius: 20,
  },
  display: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    minHeight: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 20,
    marginBottom: 8,
  },
  displayText: {
    fontSize: 56,
    fontWeight: '300',
  },
  buttonGrid: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalculatorScreen;
