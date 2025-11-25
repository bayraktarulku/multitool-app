/**
 * Calculator utility functions
 * Safe math operations without using eval()
 */

import { CalculatorOperator } from '../types/calculator';

/**
 * Calculation result type
 */
interface CalculationResult {
  value: number;
  error?: string;
}

/**
 * Perform a calculation with two operands and an operator
 * @param a First operand
 * @param b Second operand
 * @param operator The operator (+, -, ×, ÷)
 * @returns Calculation result with value or error
 */
export const calculate = (
  a: number,
  b: number,
  operator: CalculatorOperator,
): CalculationResult => {
  // Handle NaN inputs
  if (isNaN(a) || isNaN(b)) {
    return { value: 0, error: 'Invalid input' };
  }

  switch (operator) {
    case '+':
      return { value: a + b };
    case '-':
      return { value: a - b };
    case '×':
      return { value: a * b };
    case '÷':
      if (b === 0) {
        return { value: 0, error: 'Division by zero' };
      }
      return { value: a / b };
    default:
      return { value: 0, error: 'Unknown operator' };
  }
};

/**
 * Format a number for display with proper formatting
 * @param num The number to format
 * @returns Formatted string
 */
export const formatDisplayNumber = (num: number): string => {
  // Handle special cases
  if (isNaN(num)) {
    return 'Error';
  }

  if (!isFinite(num)) {
    return num > 0 ? 'Infinity' : '-Infinity';
  }

  // Round to avoid floating point errors
  const rounded = Math.round(num * 1e12) / 1e12;

  // Check if number is too large
  if (Math.abs(rounded) >= 1e12) {
    return rounded.toExponential(6);
  }

  // Format with commas for thousands
  const parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Limit decimal places
  if (parts[1] && parts[1].length > 8) {
    parts[1] = parts[1].substring(0, 8);
  }

  return parts.join('.');
};

/**
 * Parse a display number string back to a number
 * @param displayStr The display string with formatting
 * @returns Parsed number
 */
export const parseDisplayNumber = (displayStr: string): number => {
  // Remove commas and parse
  const cleaned = displayStr.replace(/,/g, '');
  return parseFloat(cleaned) || 0;
};

/**
 * Check if a character is an operator
 * @param char The character to check
 * @returns True if operator
 */
export const isOperator = (char: string): char is CalculatorOperator => {
  return ['+', '-', '×', '÷'].includes(char);
};

/**
 * Check if a string is a valid number for calculator input
 * @param str The string to check
 * @returns True if valid number
 */
export const isValidNumber = (str: string): boolean => {
  const cleaned = str.replace(/,/g, '');
  return !isNaN(parseFloat(cleaned)) && isFinite(parseFloat(cleaned));
};

/**
 * Get the operator symbol for display
 * @param operator The operator
 * @returns Display symbol
 */
export const getOperatorSymbol = (operator: CalculatorOperator): string => {
  switch (operator) {
    case '+':
      return '+';
    case '-':
      return '−';
    case '×':
      return '×';
    case '÷':
      return '÷';
    default:
      return operator;
  }
};
