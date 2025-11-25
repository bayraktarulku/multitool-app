/**
 * Unit Converter utility functions
 * Contains conversion formulas and unit definitions
 */

import {
  UnitCategory,
  UnitDefinition,
  UnitCategoryDefinition,
  ConversionResult,
} from '../types/converter';

/**
 * Unit category definitions with all units
 */
export const UNIT_CATEGORIES: UnitCategoryDefinition[] = [
  {
    id: 'length',
    name: 'Length',
    icon: 'ruler',
    baseUnit: 'm',
    units: [
      { id: 'm', name: 'Meter', symbol: 'm', toBase: 1 },
      { id: 'km', name: 'Kilometer', symbol: 'km', toBase: 1000 },
      { id: 'cm', name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      { id: 'mm', name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      { id: 'ft', name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      { id: 'in', name: 'Inch', symbol: 'in', toBase: 0.0254 },
      { id: 'mile', name: 'Mile', symbol: 'mi', toBase: 1609.344 },
      { id: 'yard', name: 'Yard', symbol: 'yd', toBase: 0.9144 },
    ],
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: 'weight',
    baseUnit: 'kg',
    units: [
      { id: 'kg', name: 'Kilogram', symbol: 'kg', toBase: 1 },
      { id: 'g', name: 'Gram', symbol: 'g', toBase: 0.001 },
      { id: 'mg', name: 'Milligram', symbol: 'mg', toBase: 0.000001 },
      { id: 'lb', name: 'Pound', symbol: 'lb', toBase: 0.453592 },
      { id: 'oz', name: 'Ounce', symbol: 'oz', toBase: 0.0283495 },
      { id: 't', name: 'Metric Ton', symbol: 't', toBase: 1000 },
    ],
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'thermometer',
    baseUnit: 'c',
    units: [
      {
        id: 'c',
        name: 'Celsius',
        symbol: '°C',
        toBase: 1,
        customToBase: (v: number) => v,
        customFromBase: (v: number) => v,
      },
      {
        id: 'f',
        name: 'Fahrenheit',
        symbol: '°F',
        toBase: 1,
        customToBase: (v: number) => ((v - 32) * 5) / 9,
        customFromBase: (v: number) => (v * 9) / 5 + 32,
      },
      {
        id: 'k',
        name: 'Kelvin',
        symbol: 'K',
        toBase: 1,
        customToBase: (v: number) => v - 273.15,
        customFromBase: (v: number) => v + 273.15,
      },
    ],
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: 'beaker',
    baseUnit: 'l',
    units: [
      { id: 'l', name: 'Liter', symbol: 'L', toBase: 1 },
      { id: 'ml', name: 'Milliliter', symbol: 'mL', toBase: 0.001 },
      { id: 'gal', name: 'Gallon (US)', symbol: 'gal', toBase: 3.78541 },
      { id: 'cup', name: 'Cup (US)', symbol: 'cup', toBase: 0.236588 },
      { id: 'pt', name: 'Pint (US)', symbol: 'pt', toBase: 0.473176 },
      { id: 'qt', name: 'Quart (US)', symbol: 'qt', toBase: 0.946353 },
      {
        id: 'floz',
        name: 'Fluid Ounce (US)',
        symbol: 'fl oz',
        toBase: 0.0295735,
      },
      { id: 'm3', name: 'Cubic Meter', symbol: 'm³', toBase: 1000 },
    ],
  },
  {
    id: 'area',
    name: 'Area',
    icon: 'grid',
    baseUnit: 'm2',
    units: [
      { id: 'm2', name: 'Square Meter', symbol: 'm²', toBase: 1 },
      { id: 'km2', name: 'Square Kilometer', symbol: 'km²', toBase: 1000000 },
      { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²', toBase: 0.0001 },
      { id: 'ft2', name: 'Square Foot', symbol: 'ft²', toBase: 0.092903 },
      { id: 'in2', name: 'Square Inch', symbol: 'in²', toBase: 0.00064516 },
      { id: 'acre', name: 'Acre', symbol: 'ac', toBase: 4046.86 },
      { id: 'ha', name: 'Hectare', symbol: 'ha', toBase: 10000 },
    ],
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: 'speedometer',
    baseUnit: 'ms',
    units: [
      { id: 'ms', name: 'Meters per Second', symbol: 'm/s', toBase: 1 },
      {
        id: 'kmh',
        name: 'Kilometers per Hour',
        symbol: 'km/h',
        toBase: 0.277778,
      },
      { id: 'mph', name: 'Miles per Hour', symbol: 'mph', toBase: 0.44704 },
      { id: 'kn', name: 'Knot', symbol: 'kn', toBase: 0.514444 },
      { id: 'fts', name: 'Feet per Second', symbol: 'ft/s', toBase: 0.3048 },
    ],
  },
  {
    id: 'time',
    name: 'Time',
    icon: 'clock',
    baseUnit: 's',
    units: [
      { id: 's', name: 'Second', symbol: 's', toBase: 1 },
      { id: 'ms', name: 'Millisecond', symbol: 'ms', toBase: 0.001 },
      { id: 'min', name: 'Minute', symbol: 'min', toBase: 60 },
      { id: 'h', name: 'Hour', symbol: 'h', toBase: 3600 },
      { id: 'd', name: 'Day', symbol: 'd', toBase: 86400 },
      { id: 'wk', name: 'Week', symbol: 'wk', toBase: 604800 },
      { id: 'mo', name: 'Month (30 days)', symbol: 'mo', toBase: 2592000 },
      { id: 'yr', name: 'Year (365 days)', symbol: 'yr', toBase: 31536000 },
    ],
  },
];

/**
 * Get units for a specific category
 * @param category The category ID
 * @returns Array of unit definitions
 */
export const getUnitsByCategory = (
  category: UnitCategory,
): UnitDefinition[] => {
  const categoryDef = UNIT_CATEGORIES.find(c => c.id === category);
  return categoryDef?.units || [];
};

/**
 * Get a specific unit definition
 * @param category The category ID
 * @param unitId The unit ID
 * @returns Unit definition or undefined
 */
export const getUnit = (
  category: UnitCategory,
  unitId: string,
): UnitDefinition | undefined => {
  const units = getUnitsByCategory(category);
  return units.find(u => u.id === unitId);
};

/**
 * Convert a value from one unit to another
 * @param category The unit category
 * @param fromUnitId Source unit ID
 * @param toUnitId Target unit ID
 * @param value Value to convert
 * @returns Conversion result
 */
export const convertUnit = (
  category: UnitCategory,
  fromUnitId: string,
  toUnitId: string,
  value: number,
): ConversionResult => {
  try {
    // Handle invalid input
    if (isNaN(value)) {
      return {
        success: false,
        value: 0,
        formattedValue: '',
        error: 'Invalid input',
      };
    }

    const fromUnit = getUnit(category, fromUnitId);
    const toUnit = getUnit(category, toUnitId);

    if (!fromUnit || !toUnit) {
      return {
        success: false,
        value: 0,
        formattedValue: '',
        error: 'Unit not found',
      };
    }

    let baseValue: number;
    let result: number;

    // Convert to base unit
    if (fromUnit.customToBase) {
      baseValue = fromUnit.customToBase(value);
    } else {
      baseValue = value * fromUnit.toBase;
    }

    // Convert from base unit to target
    if (toUnit.customFromBase) {
      result = toUnit.customFromBase(baseValue);
    } else {
      result = baseValue / toUnit.toBase;
    }

    // Format the result
    const formattedValue = formatConversionResult(result);

    return {
      success: true,
      value: result,
      formattedValue,
    };
  } catch (error) {
    return {
      success: false,
      value: 0,
      formattedValue: '',
      error: 'Conversion error',
    };
  }
};

/**
 * Format a conversion result for display
 * @param value The numeric value
 * @returns Formatted string
 */
export const formatConversionResult = (value: number): string => {
  if (isNaN(value)) {
    return 'Error';
  }

  if (!isFinite(value)) {
    return value > 0 ? 'Infinity' : '-Infinity';
  }

  // For very small or very large numbers, use scientific notation
  if (Math.abs(value) < 0.000001 && value !== 0) {
    return value.toExponential(6);
  }

  if (Math.abs(value) >= 1e12) {
    return value.toExponential(6);
  }

  // Round to avoid floating point errors
  const rounded = Math.round(value * 1e10) / 1e10;

  // Format with appropriate decimal places
  if (Number.isInteger(rounded)) {
    return rounded.toLocaleString();
  }

  // Limit decimal places based on value magnitude
  const absValue = Math.abs(rounded);
  let decimalPlaces = 6;

  if (absValue >= 100) {
    decimalPlaces = 4;
  } else if (absValue >= 10) {
    decimalPlaces = 5;
  }

  return rounded.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPlaces,
  });
};
