/**
 * Unit Converter Screen
 * Convert between different units of measurement
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaContainer, ScreenHeader } from '../../components';
import { IconButton } from '../../components/ui/IconButton';
import { useTheme } from '../../hooks/useTheme';
import { useConverter } from '../../hooks/useConverter';
import { CategorySelector } from './CategorySelector';
import { UnitPicker } from './UnitPicker';
import { ConversionInput } from './ConversionInput';

export const UnitConverterScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    state,
    setCategory,
    setFromUnit,
    setToUnit,
    setFromValue,
    swapUnits,
    clearValues,
    getUnits,
    getCategories,
  } = useConverter();

  const units = getUnits();
  const categories = getCategories();

  const fromUnit = units.find(u => u.id === state.fromUnit);
  const toUnit = units.find(u => u.id === state.toUnit);

  return (
    <SafeAreaContainer>
      <ScreenHeader
        title="Converter"
        rightAction={{
          icon: theme.isDark ? 'white-balance-sunny' : 'moon-waning-crescent',
          onPress: toggleTheme,
          accessibilityLabel: 'Toggle theme',
        }}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.container,
          { paddingHorizontal: theme.spacing.md },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {/* Category Selector */}
        <CategorySelector
          categories={categories}
          selectedCategory={state.category}
          onSelectCategory={setCategory}
        />

        {/* Conversion Card */}
        <View
          style={[
            styles.conversionCard,
            {
              backgroundColor: theme.colors.card,
              borderRadius: theme.borderRadius.lg,
              padding: theme.spacing.md,
              marginTop: theme.spacing.md,
            },
            theme.shadow,
          ]}
        >
          {/* From Section */}
          <View style={styles.section}>
            <UnitPicker
              units={units}
              selectedUnit={state.fromUnit}
              onSelectUnit={setFromUnit}
              label="From"
            />
            <ConversionInput
              label="Value"
              value={state.fromValue}
              onChangeValue={setFromValue}
              unitSymbol={fromUnit?.symbol || ''}
            />
          </View>

          {/* Swap Button */}
          <View style={styles.swapContainer}>
            <IconButton
              name="swap-vertical"
              onPress={swapUnits}
              size={28}
              color={theme.colors.primary}
              backgroundColor={theme.colors.primaryLight + '20'}
              accessibilityLabel="Swap units"
            />
          </View>

          {/* To Section */}
          <View style={styles.section}>
            <UnitPicker
              units={units}
              selectedUnit={state.toUnit}
              onSelectUnit={setToUnit}
              label="To"
            />
            <ConversionInput
              label="Result"
              value={state.toValue}
              onChangeValue={() => {}}
              unitSymbol={toUnit?.symbol || ''}
              editable={false}
            />
          </View>

          {/* Clear Button */}
          <IconButton
            name="refresh"
            onPress={clearValues}
            size={24}
            color={theme.colors.textSecondary}
            accessibilityLabel="Clear values"
            style={styles.clearButton}
          />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    paddingBottom: 32,
  },
  conversionCard: {},
  section: {
    marginBottom: 16,
  },
  swapContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  clearButton: {
    alignSelf: 'center',
    marginTop: 16,
  },
});

export default UnitConverterScreen;
