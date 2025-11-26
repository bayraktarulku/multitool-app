/**
 * Calculator logic utilities
 */

import {CalculatorOperator, CalculatorState} from '../types';

/**
 * Performs calculation between two numbers with the given operator
 * @param num1 - First operand
 * @param num2 - Second operand
 * @param operator - The operator to apply
 * @returns The result of the calculation
 */
export const calculate = (num1: number, num2: number, operator: CalculatorOperator): number => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '×':
      return num1 * num2;
    case '÷':
      return num2 !== 0 ? num1 / num2 : 0;
    case '%':
      return (num1 * num2) / 100;
    default:
      return num2;
  }
};

/**
 * Formats a number for display, handling large numbers and decimals
 * @param value - The number to format
 * @returns Formatted string representation
 */
export const formatDisplayValue = (value: number): string => {
  // Handle special cases
  if (!isFinite(value)) {
    return 'Error';
  }

  // Convert to string and handle precision
  const stringValue = value.toString();

  // If the number is too long, use scientific notation
  if (stringValue.length > 12) {
    return value.toExponential(6);
  }

  // Round to avoid floating point precision issues
  const rounded = Math.round(value * 1e10) / 1e10;
  return rounded.toString();
};

/**
 * Gets the initial calculator state
 * @returns Initial calculator state object
 */
export const getInitialCalculatorState = (): CalculatorState => ({
  displayValue: '0',
  operator: null,
  previousValue: null,
  waitingForOperand: false,
  expression: '',
});

/**
 * Handles digit input in the calculator
 * @param state - Current calculator state
 * @param digit - The digit pressed
 * @returns Updated calculator state
 */
export const handleDigitInput = (state: CalculatorState, digit: string): CalculatorState => {
  const {displayValue, waitingForOperand} = state;

  if (waitingForOperand) {
    return {
      ...state,
      displayValue: digit,
      waitingForOperand: false,
    };
  }

  // Prevent multiple zeros at the start
  if (displayValue === '0' && digit === '0') {
    return state;
  }

  // Limit display length
  if (displayValue.length >= 12 && displayValue !== '0') {
    return state;
  }

  const newValue = displayValue === '0' ? digit : displayValue + digit;

  return {
    ...state,
    displayValue: newValue,
  };
};

/**
 * Handles decimal point input
 * @param state - Current calculator state
 * @returns Updated calculator state
 */
export const handleDecimalInput = (state: CalculatorState): CalculatorState => {
  const {displayValue, waitingForOperand} = state;

  if (waitingForOperand) {
    return {
      ...state,
      displayValue: '0.',
      waitingForOperand: false,
    };
  }

  // Prevent multiple decimal points
  if (displayValue.includes('.')) {
    return state;
  }

  return {
    ...state,
    displayValue: displayValue + '.',
  };
};

/**
 * Handles operator input
 * @param state - Current calculator state
 * @param nextOperator - The operator pressed
 * @returns Updated calculator state
 */
export const handleOperatorInput = (
  state: CalculatorState,
  nextOperator: CalculatorOperator,
): CalculatorState => {
  const {displayValue, operator, previousValue, expression} = state;
  const currentValue = parseFloat(displayValue);

  if (previousValue === null) {
    return {
      ...state,
      previousValue: currentValue,
      operator: nextOperator,
      waitingForOperand: true,
      expression: `${displayValue} ${nextOperator}`,
    };
  }

  if (operator && !state.waitingForOperand) {
    const result = calculate(previousValue, currentValue, operator);
    const formattedResult = formatDisplayValue(result);

    return {
      displayValue: formattedResult,
      operator: nextOperator,
      previousValue: result,
      waitingForOperand: true,
      expression: `${formattedResult} ${nextOperator}`,
    };
  }

  return {
    ...state,
    operator: nextOperator,
    expression: expression.slice(0, -1) + nextOperator,
  };
};

/**
 * Handles equals button press
 * @param state - Current calculator state
 * @returns Updated calculator state
 */
export const handleEqualsInput = (state: CalculatorState): CalculatorState => {
  const {displayValue, operator, previousValue} = state;

  if (operator === null || previousValue === null) {
    return state;
  }

  const currentValue = parseFloat(displayValue);
  const result = calculate(previousValue, currentValue, operator);
  const formattedResult = formatDisplayValue(result);

  return {
    displayValue: formattedResult,
    operator: null,
    previousValue: null,
    waitingForOperand: true,
    expression: '',
  };
};

/**
 * Handles clear (C) button - clears current display only
 * @param state - Current calculator state
 * @returns Updated calculator state
 */
export const handleClearInput = (state: CalculatorState): CalculatorState => {
  return {
    ...state,
    displayValue: '0',
  };
};

/**
 * Handles all clear (AC) button - resets everything
 * @returns Initial calculator state
 */
export const handleAllClearInput = (): CalculatorState => {
  return getInitialCalculatorState();
};

/**
 * Handles plus/minus toggle
 * @param state - Current calculator state
 * @returns Updated calculator state
 */
export const handleToggleSign = (state: CalculatorState): CalculatorState => {
  const {displayValue} = state;
  const currentValue = parseFloat(displayValue);
  const newValue = currentValue * -1;

  return {
    ...state,
    displayValue: formatDisplayValue(newValue),
  };
};

/**
 * Handles percentage calculation
 * @param state - Current calculator state
 * @returns Updated calculator state
 */
export const handlePercentage = (state: CalculatorState): CalculatorState => {
  const {displayValue, previousValue, operator} = state;
  const currentValue = parseFloat(displayValue);

  if (previousValue !== null && operator) {
    // Calculate percentage of the previous value
    const percentValue = (previousValue * currentValue) / 100;
    return {
      ...state,
      displayValue: formatDisplayValue(percentValue),
    };
  }

  // Just divide by 100
  const percentValue = currentValue / 100;
  return {
    ...state,
    displayValue: formatDisplayValue(percentValue),
  };
};
