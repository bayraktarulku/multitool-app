/**
 * Unit Converter type definitions
 */

export type UnitCategory =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'time';

export interface UnitDefinition {
  id: string;
  name: string;
  symbol: string;
  // Conversion factor to base unit (for linear conversions)
  toBase: number;
  // For non-linear conversions like temperature
  customToBase?: (value: number) => number;
  customFromBase?: (value: number) => number;
}

export interface UnitCategoryDefinition {
  id: UnitCategory;
  name: string;
  icon: string;
  baseUnit: string;
  units: UnitDefinition[];
}

export interface ConverterState {
  category: UnitCategory;
  fromUnit: string;
  toUnit: string;
  fromValue: string;
  toValue: string;
}

export interface ConversionResult {
  success: boolean;
  value: number;
  formattedValue: string;
  error?: string;
}
