/**
 * Conversion Input component
 * Input field for entering values to convert
 */

import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface ConversionInputProps {
  label: string;
  value: string;
  onChangeValue: (value: string) => void;
  unitSymbol: string;
  editable?: boolean;
  placeholder?: string;
}

export const ConversionInput: React.FC<ConversionInputProps> = ({
  label,
  value,
  onChangeValue,
  unitSymbol,
  editable = true,
  placeholder = '0',
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {
            color: theme.colors.textSecondary,
            fontSize: theme.typography.fontSize.sm,
            marginBottom: theme.spacing.xs,
          },
        ]}
      >
        {label}
      </Text>

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: editable
              ? theme.colors.surface
              : theme.colors.background,
            borderColor: editable ? theme.colors.border : theme.colors.divider,
            borderRadius: theme.borderRadius.md,
            padding: theme.spacing.sm,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.text,
              fontSize: theme.typography.fontSize.xxl,
            },
          ]}
          value={value}
          onChangeText={onChangeValue}
          keyboardType="numeric"
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textDisabled}
          editable={editable}
          accessibilityLabel={`${label} value input`}
        />
        <Text
          style={[
            styles.unit,
            {
              color: theme.colors.textSecondary,
              fontSize: theme.typography.fontSize.lg,
            },
          ]}
        >
          {unitSymbol}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontWeight: '600',
    paddingVertical: 8,
  },
  unit: {
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default ConversionInput;
