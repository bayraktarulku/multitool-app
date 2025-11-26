/**
 * Unit conversion utilities
 */

import {ConversionCategory} from '../types';

/**
 * Length conversions (base unit: meter)
 */
const lengthUnits = [
  {
    name: 'Millimeter',
    symbol: 'mm',
    toBase: (v: number) => v / 1000,
    fromBase: (v: number) => v * 1000,
  },
  {
    name: 'Centimeter',
    symbol: 'cm',
    toBase: (v: number) => v / 100,
    fromBase: (v: number) => v * 100,
  },
  {name: 'Meter', symbol: 'm', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Kilometer',
    symbol: 'km',
    toBase: (v: number) => v * 1000,
    fromBase: (v: number) => v / 1000,
  },
  {
    name: 'Inch',
    symbol: 'in',
    toBase: (v: number) => v * 0.0254,
    fromBase: (v: number) => v / 0.0254,
  },
  {
    name: 'Foot',
    symbol: 'ft',
    toBase: (v: number) => v * 0.3048,
    fromBase: (v: number) => v / 0.3048,
  },
  {
    name: 'Yard',
    symbol: 'yd',
    toBase: (v: number) => v * 0.9144,
    fromBase: (v: number) => v / 0.9144,
  },
  {
    name: 'Mile',
    symbol: 'mi',
    toBase: (v: number) => v * 1609.344,
    fromBase: (v: number) => v / 1609.344,
  },
];

/**
 * Weight/Mass conversions (base unit: kilogram)
 */
const weightUnits = [
  {
    name: 'Milligram',
    symbol: 'mg',
    toBase: (v: number) => v / 1000000,
    fromBase: (v: number) => v * 1000000,
  },
  {name: 'Gram', symbol: 'g', toBase: (v: number) => v / 1000, fromBase: (v: number) => v * 1000},
  {name: 'Kilogram', symbol: 'kg', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Metric Ton',
    symbol: 't',
    toBase: (v: number) => v * 1000,
    fromBase: (v: number) => v / 1000,
  },
  {
    name: 'Ounce',
    symbol: 'oz',
    toBase: (v: number) => v * 0.0283495,
    fromBase: (v: number) => v / 0.0283495,
  },
  {
    name: 'Pound',
    symbol: 'lb',
    toBase: (v: number) => v * 0.453592,
    fromBase: (v: number) => v / 0.453592,
  },
];

/**
 * Temperature conversions (special handling - not linear)
 */
const temperatureUnits = [
  {
    name: 'Celsius',
    symbol: '°C',
    toBase: (v: number) => v,
    fromBase: (v: number) => v,
  },
  {
    name: 'Fahrenheit',
    symbol: '°F',
    toBase: (v: number) => (v - 32) * (5 / 9),
    fromBase: (v: number) => v * (9 / 5) + 32,
  },
  {
    name: 'Kelvin',
    symbol: 'K',
    toBase: (v: number) => v - 273.15,
    fromBase: (v: number) => v + 273.15,
  },
];

/**
 * Area conversions (base unit: square meter)
 */
const areaUnits = [
  {
    name: 'Square Millimeter',
    symbol: 'mm²',
    toBase: (v: number) => v / 1000000,
    fromBase: (v: number) => v * 1000000,
  },
  {
    name: 'Square Centimeter',
    symbol: 'cm²',
    toBase: (v: number) => v / 10000,
    fromBase: (v: number) => v * 10000,
  },
  {name: 'Square Meter', symbol: 'm²', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Square Kilometer',
    symbol: 'km²',
    toBase: (v: number) => v * 1000000,
    fromBase: (v: number) => v / 1000000,
  },
  {
    name: 'Acre',
    symbol: 'ac',
    toBase: (v: number) => v * 4046.8564224,
    fromBase: (v: number) => v / 4046.8564224,
  },
  {
    name: 'Hectare',
    symbol: 'ha',
    toBase: (v: number) => v * 10000,
    fromBase: (v: number) => v / 10000,
  },
];

/**
 * Volume conversions (base unit: liter)
 */
const volumeUnits = [
  {
    name: 'Milliliter',
    symbol: 'ml',
    toBase: (v: number) => v / 1000,
    fromBase: (v: number) => v * 1000,
  },
  {name: 'Liter', symbol: 'L', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Cubic Meter',
    symbol: 'm³',
    toBase: (v: number) => v * 1000,
    fromBase: (v: number) => v / 1000,
  },
  {
    name: 'US Gallon',
    symbol: 'gal',
    toBase: (v: number) => v * 3.78541,
    fromBase: (v: number) => v / 3.78541,
  },
  {
    name: 'US Cup',
    symbol: 'cup',
    toBase: (v: number) => v * 0.236588,
    fromBase: (v: number) => v / 0.236588,
  },
  {
    name: 'Fluid Ounce',
    symbol: 'fl oz',
    toBase: (v: number) => v * 0.0295735,
    fromBase: (v: number) => v / 0.0295735,
  },
];

/**
 * Speed conversions (base unit: meters per second)
 */
const speedUnits = [
  {name: 'Meters per Second', symbol: 'm/s', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Kilometers per Hour',
    symbol: 'km/h',
    toBase: (v: number) => v / 3.6,
    fromBase: (v: number) => v * 3.6,
  },
  {
    name: 'Miles per Hour',
    symbol: 'mph',
    toBase: (v: number) => v * 0.44704,
    fromBase: (v: number) => v / 0.44704,
  },
  {
    name: 'Knot',
    symbol: 'kn',
    toBase: (v: number) => v * 0.514444,
    fromBase: (v: number) => v / 0.514444,
  },
];

/**
 * Time conversions (base unit: second)
 */
const timeUnits = [
  {name: 'Second', symbol: 's', toBase: (v: number) => v, fromBase: (v: number) => v},
  {name: 'Minute', symbol: 'min', toBase: (v: number) => v * 60, fromBase: (v: number) => v / 60},
  {name: 'Hour', symbol: 'h', toBase: (v: number) => v * 3600, fromBase: (v: number) => v / 3600},
  {name: 'Day', symbol: 'd', toBase: (v: number) => v * 86400, fromBase: (v: number) => v / 86400},
  {
    name: 'Week',
    symbol: 'wk',
    toBase: (v: number) => v * 604800,
    fromBase: (v: number) => v / 604800,
  },
  {
    name: 'Month (30 days)',
    symbol: 'mo',
    toBase: (v: number) => v * 2592000,
    fromBase: (v: number) => v / 2592000,
  },
  {
    name: 'Year (365 days)',
    symbol: 'yr',
    toBase: (v: number) => v * 31536000,
    fromBase: (v: number) => v / 31536000,
  },
];

/**
 * Data conversions (base unit: byte)
 */
const dataUnits = [
  {name: 'Bit', symbol: 'b', toBase: (v: number) => v / 8, fromBase: (v: number) => v * 8},
  {name: 'Byte', symbol: 'B', toBase: (v: number) => v, fromBase: (v: number) => v},
  {
    name: 'Kilobyte',
    symbol: 'KB',
    toBase: (v: number) => v * 1024,
    fromBase: (v: number) => v / 1024,
  },
  {
    name: 'Megabyte',
    symbol: 'MB',
    toBase: (v: number) => v * 1048576,
    fromBase: (v: number) => v / 1048576,
  },
  {
    name: 'Gigabyte',
    symbol: 'GB',
    toBase: (v: number) => v * 1073741824,
    fromBase: (v: number) => v / 1073741824,
  },
  {
    name: 'Terabyte',
    symbol: 'TB',
    toBase: (v: number) => v * 1099511627776,
    fromBase: (v: number) => v / 1099511627776,
  },
];

/**
 * All conversion categories
 */
export const conversionCategories: ConversionCategory[] = [
  {id: 'length', name: 'Length', icon: 'ruler', units: lengthUnits},
  {id: 'weight', name: 'Weight', icon: 'scale-balance', units: weightUnits},
  {id: 'temperature', name: 'Temperature', icon: 'thermometer', units: temperatureUnits},
  {id: 'area', name: 'Area', icon: 'grid', units: areaUnits},
  {id: 'volume', name: 'Volume', icon: 'beaker', units: volumeUnits},
  {id: 'speed', name: 'Speed', icon: 'speedometer', units: speedUnits},
  {id: 'time', name: 'Time', icon: 'timer', units: timeUnits},
  {id: 'data', name: 'Data', icon: 'database', units: dataUnits},
];

/**
 * Converts a value from one unit to another within the same category
 * @param value - The value to convert
 * @param fromUnit - The source unit
 * @param toUnit - The target unit
 * @returns The converted value
 */
export const convertUnit = (
  value: number,
  fromUnit: {toBase: (v: number) => number},
  toUnit: {fromBase: (v: number) => number},
): number => {
  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
};

/**
 * Formats a conversion result for display
 * @param value - The value to format
 * @returns Formatted string
 */
export const formatConversionResult = (value: number): string => {
  if (!isFinite(value)) {
    return 'Error';
  }

  // For very small or very large numbers, use scientific notation
  if (Math.abs(value) < 0.000001 && value !== 0) {
    return value.toExponential(6);
  }

  if (Math.abs(value) >= 1e12) {
    return value.toExponential(6);
  }

  // Round to avoid floating point precision issues
  const rounded = Math.round(value * 1e10) / 1e10;

  // Format with appropriate decimal places
  if (Number.isInteger(rounded)) {
    return rounded.toString();
  }

  // Limit decimal places for cleaner display
  const formatted = rounded.toPrecision(10);
  // Remove trailing zeros after decimal point
  return parseFloat(formatted).toString();
};

/**
 * Gets conversion formula description
 * @param fromSymbol - Source unit symbol
 * @param toSymbol - Target unit symbol
 * @param value - The converted value per 1 unit
 * @returns Formula description string
 */
export const getConversionFormula = (
  fromSymbol: string,
  toSymbol: string,
  value: number,
): string => {
  const formattedValue = formatConversionResult(value);
  return `1 ${fromSymbol} = ${formattedValue} ${toSymbol}`;
};
