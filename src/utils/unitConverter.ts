export interface Unit {
  id: string;
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface UnitCategory {
  id: string;
  name: string;
  icon: string;
  units: Unit[];
}

// Length Units (base: meter)
const lengthUnits: Unit[] = [
  {
    id: 'meter',
    name: 'Metre',
    symbol: 'm',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  {
    id: 'kilometer',
    name: 'Kilometre',
    symbol: 'km',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  {
    id: 'centimeter',
    name: 'Santimetre',
    symbol: 'cm',
    toBase: (v) => v / 100,
    fromBase: (v) => v * 100,
  },
  {
    id: 'millimeter',
    name: 'Milimetre',
    symbol: 'mm',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  {
    id: 'mile',
    name: 'Mil',
    symbol: 'mi',
    toBase: (v) => v * 1609.344,
    fromBase: (v) => v / 1609.344,
  },
  {
    id: 'yard',
    name: 'Yarda',
    symbol: 'yd',
    toBase: (v) => v * 0.9144,
    fromBase: (v) => v / 0.9144,
  },
  {
    id: 'foot',
    name: 'Fit',
    symbol: 'ft',
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
  {
    id: 'inch',
    name: 'İnç',
    symbol: 'in',
    toBase: (v) => v * 0.0254,
    fromBase: (v) => v / 0.0254,
  },
];

// Weight Units (base: kilogram)
const weightUnits: Unit[] = [
  {
    id: 'kilogram',
    name: 'Kilogram',
    symbol: 'kg',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  {
    id: 'gram',
    name: 'Gram',
    symbol: 'g',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  {
    id: 'milligram',
    name: 'Miligram',
    symbol: 'mg',
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  {
    id: 'ton',
    name: 'Ton',
    symbol: 't',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  {
    id: 'pound',
    name: 'Pound',
    symbol: 'lb',
    toBase: (v) => v * 0.453592,
    fromBase: (v) => v / 0.453592,
  },
  {
    id: 'ounce',
    name: 'Ons',
    symbol: 'oz',
    toBase: (v) => v * 0.0283495,
    fromBase: (v) => v / 0.0283495,
  },
];

// Volume Units (base: liter)
const volumeUnits: Unit[] = [
  {
    id: 'liter',
    name: 'Litre',
    symbol: 'L',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  {
    id: 'milliliter',
    name: 'Mililitre',
    symbol: 'mL',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  {
    id: 'cubicMeter',
    name: 'Metreküp',
    symbol: 'm³',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  {
    id: 'gallon',
    name: 'Galon',
    symbol: 'gal',
    toBase: (v) => v * 3.78541,
    fromBase: (v) => v / 3.78541,
  },
  {
    id: 'quart',
    name: 'Quart',
    symbol: 'qt',
    toBase: (v) => v * 0.946353,
    fromBase: (v) => v / 0.946353,
  },
  {
    id: 'pint',
    name: 'Pint',
    symbol: 'pt',
    toBase: (v) => v * 0.473176,
    fromBase: (v) => v / 0.473176,
  },
  {
    id: 'cup',
    name: 'Fincan',
    symbol: 'cup',
    toBase: (v) => v * 0.236588,
    fromBase: (v) => v / 0.236588,
  },
];

// Temperature Units (base: celsius)
const temperatureUnits: Unit[] = [
  {
    id: 'celsius',
    name: 'Celsius',
    symbol: '°C',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  {
    id: 'fahrenheit',
    name: 'Fahrenheit',
    symbol: '°F',
    toBase: (v) => (v - 32) * (5 / 9),
    fromBase: (v) => v * (9 / 5) + 32,
  },
  {
    id: 'kelvin',
    name: 'Kelvin',
    symbol: 'K',
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },
];

export const unitCategories: UnitCategory[] = [
  {
    id: 'length',
    name: 'Uzunluk',
    icon: 'ruler',
    units: lengthUnits,
  },
  {
    id: 'weight',
    name: 'Ağırlık',
    icon: 'weight',
    units: weightUnits,
  },
  {
    id: 'volume',
    name: 'Hacim',
    icon: 'flask',
    units: volumeUnits,
  },
  {
    id: 'temperature',
    name: 'Sıcaklık',
    icon: 'thermometer',
    units: temperatureUnits,
  },
];

export const convert = (
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): number => {
  if (isNaN(value)) return 0;
  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
};

