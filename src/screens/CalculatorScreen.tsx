import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { CalculatorDisplay } from '../components/calculator/CalculatorDisplay';
import { CalculatorButton } from '../components/calculator/CalculatorButton';
import {
  CalculatorState,
  initialState,
  handleNumberPress,
  handleOperationPress,
  handleEqualsPress,
  handleClear,
  handleBackspace,
  handlePercentage,
  handleToggleSign,
  Operation,
} from '../utils/calculatorLogic';

export const CalculatorScreen: React.FC = () => {
  const { theme } = useTheme();
  const [state, setState] = useState<CalculatorState>(initialState);

  const handlePress = (value: string) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        setState(handleNumberPress(state, value));
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        setState(handleOperationPress(state, value as Operation));
        break;
      case '=':
        setState(handleEqualsPress(state));
        break;
      case 'C':
        setState(handleClear());
        break;
      case '⌫':
        setState(handleBackspace(state));
        break;
      case '%':
        setState(handlePercentage(state));
        break;
      case '±':
        setState(handleToggleSign(state));
        break;
      default:
        break;
    }
  };

  const getExpression = () => {
    if (state.previousValue && state.operation) {
      return `${state.previousValue} ${state.operation}`;
    }
    return '';
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <CalculatorDisplay
          value={state.currentValue}
          expression={getExpression()}
        />

        <View style={styles.buttonsContainer}>
          {/* Row 1 */}
          <View style={styles.row}>
            <CalculatorButton value="C" onPress={handlePress} type="function" />
            <CalculatorButton value="±" onPress={handlePress} type="function" />
            <CalculatorButton value="%" onPress={handlePress} type="function" />
            <CalculatorButton value="÷" onPress={handlePress} type="operator" />
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <CalculatorButton value="7" onPress={handlePress} />
            <CalculatorButton value="8" onPress={handlePress} />
            <CalculatorButton value="9" onPress={handlePress} />
            <CalculatorButton value="×" onPress={handlePress} type="operator" />
          </View>

          {/* Row 3 */}
          <View style={styles.row}>
            <CalculatorButton value="4" onPress={handlePress} />
            <CalculatorButton value="5" onPress={handlePress} />
            <CalculatorButton value="6" onPress={handlePress} />
            <CalculatorButton value="-" onPress={handlePress} type="operator" />
          </View>

          {/* Row 4 */}
          <View style={styles.row}>
            <CalculatorButton value="1" onPress={handlePress} />
            <CalculatorButton value="2" onPress={handlePress} />
            <CalculatorButton value="3" onPress={handlePress} />
            <CalculatorButton value="+" onPress={handlePress} type="operator" />
          </View>

          {/* Row 5 */}
          <View style={styles.row}>
            <CalculatorButton value="0" onPress={handlePress} size="wide" />
            <CalculatorButton value="." onPress={handlePress} />
            <CalculatorButton value="=" onPress={handlePress} type="equals" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

