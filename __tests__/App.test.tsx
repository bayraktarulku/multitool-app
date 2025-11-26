/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';

// Import calculator logic for testing
import {
  calculate,
  formatDisplayValue,
  getInitialCalculatorState,
  handleDigitInput,
  handleOperatorInput,
  handleEqualsInput,
} from '../src/utils/calculatorLogic';

// Import unit conversions for testing
import {convertUnit, formatConversionResult, conversionCategories} from '../src/utils/unitConversions';

describe('Calculator Logic', () => {
  it('should perform basic addition', () => {
    expect(calculate(5, 3, '+')).toBe(8);
  });

  it('should perform basic subtraction', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });

  it('should perform basic multiplication', () => {
    expect(calculate(7, 6, '×')).toBe(42);
  });

  it('should perform basic division', () => {
    expect(calculate(20, 4, '÷')).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(calculate(10, 0, '÷')).toBe(0);
  });

  it('should format display value correctly', () => {
    expect(formatDisplayValue(123)).toBe('123');
    expect(formatDisplayValue(1.5)).toBe('1.5');
  });

  it('should get initial calculator state', () => {
    const state = getInitialCalculatorState();
    expect(state.displayValue).toBe('0');
    expect(state.operator).toBeNull();
    expect(state.previousValue).toBeNull();
  });

  it('should handle digit input', () => {
    const state = getInitialCalculatorState();
    const newState = handleDigitInput(state, '5');
    expect(newState.displayValue).toBe('5');
  });

  it('should handle operator input', () => {
    const state = {
      ...getInitialCalculatorState(),
      displayValue: '5',
    };
    const newState = handleOperatorInput(state, '+');
    expect(newState.operator).toBe('+');
    expect(newState.previousValue).toBe(5);
  });

  it('should handle equals input', () => {
    const state = {
      displayValue: '3',
      operator: '+' as const,
      previousValue: 5,
      waitingForOperand: false,
      expression: '5 +',
    };
    const newState = handleEqualsInput(state);
    expect(newState.displayValue).toBe('8');
  });
});

describe('Unit Conversions', () => {
  it('should have 8 conversion categories', () => {
    expect(conversionCategories.length).toBe(8);
  });

  it('should convert meters to kilometers', () => {
    const lengthCategory = conversionCategories.find(c => c.id === 'length');
    if (lengthCategory) {
      const meterUnit = lengthCategory.units.find(u => u.symbol === 'm');
      const kmUnit = lengthCategory.units.find(u => u.symbol === 'km');
      if (meterUnit && kmUnit) {
        const result = convertUnit(1000, meterUnit, kmUnit);
        expect(result).toBe(1);
      }
    }
  });

  it('should convert Celsius to Fahrenheit', () => {
    const tempCategory = conversionCategories.find(c => c.id === 'temperature');
    if (tempCategory) {
      const celsiusUnit = tempCategory.units.find(u => u.symbol === '°C');
      const fahrenheitUnit = tempCategory.units.find(u => u.symbol === '°F');
      if (celsiusUnit && fahrenheitUnit) {
        const result = convertUnit(0, celsiusUnit, fahrenheitUnit);
        expect(result).toBe(32);
      }
    }
  });

  it('should format conversion result correctly', () => {
    expect(formatConversionResult(100)).toBe('100');
    expect(formatConversionResult(3.14159)).toBe('3.14159');
  });
});

describe('Conversion Categories', () => {
  it('should have length category with correct units', () => {
    const lengthCategory = conversionCategories.find(c => c.id === 'length');
    expect(lengthCategory).toBeDefined();
    expect(lengthCategory?.units.length).toBeGreaterThanOrEqual(8);
  });

  it('should have weight category', () => {
    const weightCategory = conversionCategories.find(c => c.id === 'weight');
    expect(weightCategory).toBeDefined();
  });

  it('should have temperature category', () => {
    const tempCategory = conversionCategories.find(c => c.id === 'temperature');
    expect(tempCategory).toBeDefined();
  });

  it('should have area category', () => {
    const areaCategory = conversionCategories.find(c => c.id === 'area');
    expect(areaCategory).toBeDefined();
  });

  it('should have volume category', () => {
    const volumeCategory = conversionCategories.find(c => c.id === 'volume');
    expect(volumeCategory).toBeDefined();
  });

  it('should have speed category', () => {
    const speedCategory = conversionCategories.find(c => c.id === 'speed');
    expect(speedCategory).toBeDefined();
  });

  it('should have time category', () => {
    const timeCategory = conversionCategories.find(c => c.id === 'time');
    expect(timeCategory).toBeDefined();
  });

  it('should have data category', () => {
    const dataCategory = conversionCategories.find(c => c.id === 'data');
    expect(dataCategory).toBeDefined();
  });
});
