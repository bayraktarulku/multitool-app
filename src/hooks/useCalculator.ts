/**
 * useCalculator hook
 * Manages calculator state and operations
 */

import { useState, useCallback, useMemo } from 'react';
import {
  CalculatorState,
  CalculatorOperator,
  CalculatorAction,
} from '../types/calculator';
import {
  calculate,
  formatDisplayNumber,
  parseDisplayNumber,
} from '../utils/calculator';

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
  expression: '',
  memory: 0,
  isScientificMode: false,
};

/**
 * Maximum number of digits allowed
 */
const MAX_DIGITS = 12;

/**
 * Custom hook for calculator functionality
 */
export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  /**
   * Input a digit (0-9)
   */
  const inputDigit = useCallback((digit: string) => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: digit,
          waitingForOperand: false,
        };
      }

      // Prevent leading zeros and limit digits
      const currentDisplay = prev.display === '0' ? '' : prev.display;
      const cleanDisplay = currentDisplay.replace(/,/g, '');

      if (cleanDisplay.length >= MAX_DIGITS) {
        return prev;
      }

      const newDisplay =
        prev.display === '0' ? digit : currentDisplay + digit;
      return {
        ...prev,
        display: formatDisplayNumber(parseDisplayNumber(newDisplay)),
      };
    });
  }, []);

  /**
   * Input decimal point
   */
  const inputDecimal = useCallback(() => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: '0.',
          waitingForOperand: false,
        };
      }

      if (!prev.display.includes('.')) {
        return {
          ...prev,
          display: prev.display + '.',
        };
      }

      return prev;
    });
  }, []);

  /**
   * Input operator (+, -, ×, ÷)
   */
  const inputOperator = useCallback((operator: CalculatorOperator) => {
    setState(prev => {
      const inputValue = parseDisplayNumber(prev.display);

      if (prev.previousValue === null) {
        return {
          ...prev,
          previousValue: prev.display,
          operator,
          waitingForOperand: true,
          expression: `${prev.display} ${operator}`,
        };
      }

      if (prev.waitingForOperand) {
        return {
          ...prev,
          operator,
          expression: `${prev.previousValue} ${operator}`,
        };
      }

      const result = calculate(
        parseDisplayNumber(prev.previousValue),
        inputValue,
        prev.operator!,
      );

      if (result.error) {
        return {
          ...initialState,
          display: 'Error',
        };
      }

      const formattedResult = formatDisplayNumber(result.value);
      return {
        ...prev,
        display: formattedResult,
        previousValue: formattedResult,
        operator,
        waitingForOperand: true,
        expression: `${formattedResult} ${operator}`,
      };
    });
  }, []);

  /**
   * Calculate result
   */
  const performCalculation = useCallback(() => {
    setState(prev => {
      if (prev.operator === null || prev.previousValue === null) {
        return prev;
      }

      const result = calculate(
        parseDisplayNumber(prev.previousValue),
        parseDisplayNumber(prev.display),
        prev.operator,
      );

      if (result.error) {
        return {
          ...initialState,
          display: 'Error',
        };
      }

      return {
        ...initialState,
        display: formatDisplayNumber(result.value),
        expression: '',
      };
    });
  }, []);

  /**
   * Clear current entry
   */
  const clear = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: '0',
    }));
  }, []);

  /**
   * Clear all
   */
  const clearAll = useCallback(() => {
    setState(initialState);
  }, []);

  /**
   * Toggle sign (+/-)
   */
  const toggleSign = useCallback(() => {
    setState(prev => {
      const value = parseDisplayNumber(prev.display);
      return {
        ...prev,
        display: formatDisplayNumber(-value),
      };
    });
  }, []);

  /**
   * Calculate percentage
   */
  const percentage = useCallback(() => {
    setState(prev => {
      const value = parseDisplayNumber(prev.display);
      return {
        ...prev,
        display: formatDisplayNumber(value / 100),
      };
    });
  }, []);

  /**
   * Backspace - remove last digit
   */
  const backspace = useCallback(() => {
    setState(prev => {
      if (prev.waitingForOperand || prev.display === 'Error') {
        return prev;
      }

      const cleanDisplay = prev.display.replace(/,/g, '');
      if (cleanDisplay.length === 1 || cleanDisplay === '-0') {
        return {
          ...prev,
          display: '0',
        };
      }

      const newDisplay = cleanDisplay.slice(0, -1);
      return {
        ...prev,
        display: formatDisplayNumber(parseDisplayNumber(newDisplay)),
      };
    });
  }, []);

  /**
   * Toggle scientific mode
   */
  const toggleScientificMode = useCallback(() => {
    setState(prev => ({
      ...prev,
      isScientificMode: !prev.isScientificMode,
    }));
  }, []);

  /**
   * Handle button press
   */
  const handleButtonPress = useCallback(
    (action: CalculatorAction) => {
      switch (action.type) {
        case 'INPUT_DIGIT':
          inputDigit(action.payload!);
          break;
        case 'INPUT_DECIMAL':
          inputDecimal();
          break;
        case 'INPUT_OPERATOR':
          inputOperator(action.payload as CalculatorOperator);
          break;
        case 'CALCULATE':
          performCalculation();
          break;
        case 'CLEAR':
          clear();
          break;
        case 'CLEAR_ALL':
          clearAll();
          break;
        case 'TOGGLE_SIGN':
          toggleSign();
          break;
        case 'PERCENTAGE':
          percentage();
          break;
        case 'BACKSPACE':
          backspace();
          break;
        case 'TOGGLE_SCIENTIFIC':
          toggleScientificMode();
          break;
      }
    },
    [
      inputDigit,
      inputDecimal,
      inputOperator,
      performCalculation,
      clear,
      clearAll,
      toggleSign,
      percentage,
      backspace,
      toggleScientificMode,
    ],
  );

  return {
    state,
    inputDigit,
    inputDecimal,
    inputOperator,
    performCalculation,
    clear,
    clearAll,
    toggleSign,
    percentage,
    backspace,
    toggleScientificMode,
    handleButtonPress,
  };
};

export default useCalculator;
