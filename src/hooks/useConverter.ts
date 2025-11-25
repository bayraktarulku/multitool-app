/**
 * useConverter hook
 * Manages unit converter state and operations
 */

import { useState, useCallback, useEffect } from 'react';
import { UnitCategory, ConverterState } from '../types/converter';
import {
  convertUnit,
  getUnitsByCategory,
  UNIT_CATEGORIES,
} from '../utils/converter';

const getInitialState = (category: UnitCategory): ConverterState => {
  const units = getUnitsByCategory(category);
  return {
    category,
    fromUnit: units[0]?.id || '',
    toUnit: units[1]?.id || units[0]?.id || '',
    fromValue: '',
    toValue: '',
  };
};

/**
 * Custom hook for unit converter functionality
 */
export const useConverter = (initialCategory: UnitCategory = 'length') => {
  const [state, setState] = useState<ConverterState>(
    getInitialState(initialCategory),
  );

  /**
   * Update conversion when values change
   */
  useEffect(() => {
    if (state.fromValue === '') {
      setState(prev => ({ ...prev, toValue: '' }));
      return;
    }

    const result = convertUnit(
      state.category,
      state.fromUnit,
      state.toUnit,
      parseFloat(state.fromValue),
    );

    if (result.success) {
      setState(prev => ({ ...prev, toValue: result.formattedValue }));
    } else {
      setState(prev => ({ ...prev, toValue: 'Error' }));
    }
  }, [state.fromValue, state.fromUnit, state.toUnit, state.category]);

  /**
   * Change category
   */
  const setCategory = useCallback((category: UnitCategory) => {
    setState(getInitialState(category));
  }, []);

  /**
   * Set from unit
   */
  const setFromUnit = useCallback((unitId: string) => {
    setState(prev => ({ ...prev, fromUnit: unitId }));
  }, []);

  /**
   * Set to unit
   */
  const setToUnit = useCallback((unitId: string) => {
    setState(prev => ({ ...prev, toUnit: unitId }));
  }, []);

  /**
   * Set from value
   */
  const setFromValue = useCallback((value: string) => {
    // Only allow valid number input
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setState(prev => ({ ...prev, fromValue: value }));
    }
  }, []);

  /**
   * Swap units
   */
  const swapUnits = useCallback(() => {
    setState(prev => ({
      ...prev,
      fromUnit: prev.toUnit,
      toUnit: prev.fromUnit,
      fromValue: prev.toValue,
      toValue: prev.fromValue,
    }));
  }, []);

  /**
   * Clear values
   */
  const clearValues = useCallback(() => {
    setState(prev => ({
      ...prev,
      fromValue: '',
      toValue: '',
    }));
  }, []);

  /**
   * Get available units for current category
   */
  const getUnits = useCallback(() => {
    return getUnitsByCategory(state.category);
  }, [state.category]);

  /**
   * Get all categories
   */
  const getCategories = useCallback(() => {
    return UNIT_CATEGORIES;
  }, []);

  return {
    state,
    setCategory,
    setFromUnit,
    setToUnit,
    setFromValue,
    swapUnits,
    clearValues,
    getUnits,
    getCategories,
  };
};

export default useConverter;
