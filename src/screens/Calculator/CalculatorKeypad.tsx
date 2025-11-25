/**
 * Calculator Keypad component
 * Grid of calculator buttons
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { CalculatorButton } from './CalculatorButton';
import {
  CalculatorAction,
  CalculatorOperator,
  CalculatorButtonType,
} from '../../../types/calculator';

interface CalculatorKeypadProps {
  onAction: (action: CalculatorAction) => void;
}

interface ButtonConfig {
  label: string;
  type: CalculatorButtonType;
  action: CalculatorAction;
  span?: number;
}

const BUTTONS: ButtonConfig[][] = [
  [
    { label: 'AC', type: 'function', action: { type: 'CLEAR_ALL' } },
    { label: '±', type: 'function', action: { type: 'TOGGLE_SIGN' } },
    { label: '%', type: 'function', action: { type: 'PERCENTAGE' } },
    {
      label: '÷',
      type: 'operator',
      action: { type: 'INPUT_OPERATOR', payload: '÷' },
    },
  ],
  [
    {
      label: '7',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '7' },
    },
    {
      label: '8',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '8' },
    },
    {
      label: '9',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '9' },
    },
    {
      label: '×',
      type: 'operator',
      action: { type: 'INPUT_OPERATOR', payload: '×' },
    },
  ],
  [
    {
      label: '4',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '4' },
    },
    {
      label: '5',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '5' },
    },
    {
      label: '6',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '6' },
    },
    {
      label: '-',
      type: 'operator',
      action: { type: 'INPUT_OPERATOR', payload: '-' },
    },
  ],
  [
    {
      label: '1',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '1' },
    },
    {
      label: '2',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '2' },
    },
    {
      label: '3',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '3' },
    },
    {
      label: '+',
      type: 'operator',
      action: { type: 'INPUT_OPERATOR', payload: '+' },
    },
  ],
  [
    {
      label: '0',
      type: 'number',
      action: { type: 'INPUT_DIGIT', payload: '0' },
    },
    { label: '.', type: 'decimal', action: { type: 'INPUT_DECIMAL' } },
    { label: '⌫', type: 'function', action: { type: 'BACKSPACE' } },
    { label: '=', type: 'equal', action: { type: 'CALCULATE' } },
  ],
];

export const CalculatorKeypad: React.FC<CalculatorKeypadProps> = ({
  onAction,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { paddingHorizontal: theme.spacing.sm }]}
    >
      {BUTTONS.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <CalculatorButton
              key={`btn-${rowIndex}-${buttonIndex}`}
              label={button.label}
              type={button.type}
              onPress={() => onAction(button.action)}
              span={button.span}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default CalculatorKeypad;
