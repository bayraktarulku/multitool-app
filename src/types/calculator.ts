/**
 * Calculator type definitions
 */

export type CalculatorOperator = '+' | '-' | '×' | '÷';

export type CalculatorButton =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '.'
  | '+'
  | '-'
  | '×'
  | '÷'
  | '='
  | 'C'
  | 'AC'
  | '±'
  | '%'
  | '⌫';

export type CalculatorButtonType =
  | 'number'
  | 'operator'
  | 'function'
  | 'equal'
  | 'decimal';

export interface CalculatorState {
  display: string;
  previousValue: string | null;
  operator: CalculatorOperator | null;
  waitingForOperand: boolean;
  expression: string;
  memory: number;
  isScientificMode: boolean;
}

export interface CalculatorButtonConfig {
  label: CalculatorButton;
  type: CalculatorButtonType;
  span?: number; // For buttons that span multiple columns
}

export interface CalculatorAction {
  type:
    | 'INPUT_DIGIT'
    | 'INPUT_DECIMAL'
    | 'INPUT_OPERATOR'
    | 'CALCULATE'
    | 'CLEAR'
    | 'CLEAR_ALL'
    | 'TOGGLE_SIGN'
    | 'PERCENTAGE'
    | 'BACKSPACE'
    | 'TOGGLE_SCIENTIFIC';
  payload?: string;
}
