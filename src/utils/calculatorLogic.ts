export type Operation = '+' | '-' | '×' | '÷' | null;

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: Operation;
  shouldResetDisplay: boolean;
}

export const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: '',
  operation: null,
  shouldResetDisplay: false,
};

export const handleNumberPress = (
  state: CalculatorState,
  number: string
): CalculatorState => {
  if (state.shouldResetDisplay) {
    return {
      ...state,
      currentValue: number,
      shouldResetDisplay: false,
    };
  }

  if (state.currentValue === '0' && number !== '.') {
    return { ...state, currentValue: number };
  }

  if (number === '.' && state.currentValue.includes('.')) {
    return state;
  }

  return {
    ...state,
    currentValue: state.currentValue + number,
  };
};

export const handleOperationPress = (
  state: CalculatorState,
  operation: Operation
): CalculatorState => {
  if (!state.previousValue && operation) {
    return {
      ...state,
      previousValue: state.currentValue,
      operation,
      shouldResetDisplay: true,
    };
  }

  if (state.previousValue && state.operation && !state.shouldResetDisplay) {
    const result = calculate(
      parseFloat(state.previousValue),
      parseFloat(state.currentValue),
      state.operation
    );
    return {
      currentValue: result.toString(),
      previousValue: result.toString(),
      operation,
      shouldResetDisplay: true,
    };
  }

  return {
    ...state,
    operation,
    shouldResetDisplay: true,
  };
};

export const handleEqualsPress = (state: CalculatorState): CalculatorState => {
  if (!state.operation || !state.previousValue) {
    return state;
  }

  const result = calculate(
    parseFloat(state.previousValue),
    parseFloat(state.currentValue),
    state.operation
  );

  return {
    currentValue: result.toString(),
    previousValue: '',
    operation: null,
    shouldResetDisplay: true,
  };
};

export const handleClear = (): CalculatorState => {
  return initialState;
};

export const handleBackspace = (state: CalculatorState): CalculatorState => {
  if (state.shouldResetDisplay) {
    return state;
  }

  const newValue = state.currentValue.slice(0, -1);
  return {
    ...state,
    currentValue: newValue === '' ? '0' : newValue,
  };
};

export const handlePercentage = (state: CalculatorState): CalculatorState => {
  const value = parseFloat(state.currentValue);
  return {
    ...state,
    currentValue: (value / 100).toString(),
    shouldResetDisplay: true,
  };
};

export const handleToggleSign = (state: CalculatorState): CalculatorState => {
  const value = parseFloat(state.currentValue);
  return {
    ...state,
    currentValue: (-value).toString(),
  };
};

const calculate = (a: number, b: number, operation: Operation): number => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return b !== 0 ? a / b : 0;
    default:
      return b;
  }
};

export const formatDisplay = (value: string): string => {
  // Handle very long numbers
  if (value.length > 12) {
    const num = parseFloat(value);
    if (Math.abs(num) >= 1e12) {
      return num.toExponential(6);
    }
    return num.toPrecision(10);
  }
  return value;
};

