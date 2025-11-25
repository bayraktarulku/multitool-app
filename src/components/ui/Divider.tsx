/**
 * Divider component
 * Horizontal line separator
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface DividerProps {
  style?: ViewStyle;
  color?: string;
  thickness?: number;
  margin?: number;
}

export const Divider: React.FC<DividerProps> = ({
  style,
  color,
  thickness = 1,
  margin,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color || theme.colors.divider,
          height: thickness,
          marginVertical: margin ?? theme.spacing.md,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
