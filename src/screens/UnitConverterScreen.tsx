import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { CategoryPicker } from '../components/converter/CategoryPicker';
import { UnitInput } from '../components/converter/UnitInput';
import {
  unitCategories,
  UnitCategory,
  Unit,
  convert,
} from '../utils/unitConverter';

export const UnitConverterScreen: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>(
    unitCategories[0]
  );
  const [fromUnit, setFromUnit] = useState<Unit>(selectedCategory.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(selectedCategory.units[1]);
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');

  useEffect(() => {
    // Reset units when category changes
    setFromUnit(selectedCategory.units[0]);
    setToUnit(selectedCategory.units[1]);
    setFromValue('1');
  }, [selectedCategory]);

  useEffect(() => {
    // Perform conversion when values or units change
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const result = convert(value, fromUnit, toUnit);
      setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleFromValueChange = (value: string) => {
    // Allow only numbers and one decimal point
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value) || value === '') {
      setFromValue(value);
    }
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryPicker
          categories={unitCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <View style={styles.converterContainer}>
          <UnitInput
            label="Kimden"
            value={fromValue}
            unit={fromUnit}
            units={selectedCategory.units}
            onValueChange={handleFromValueChange}
            onUnitChange={setFromUnit}
          />

          <TouchableOpacity
            style={[
              styles.swapButton,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.md,
              },
            ]}
            onPress={handleSwapUnits}
            activeOpacity={0.7}
          >
            <Text style={styles.swapIcon}>⇅</Text>
          </TouchableOpacity>

          <UnitInput
            label="Kime"
            value={toValue}
            unit={toUnit}
            units={selectedCategory.units}
            onValueChange={() => {}}
            onUnitChange={setToUnit}
            editable={false}
          />
        </View>

        <View
          style={[
            styles.infoCard,
            {
              backgroundColor: theme.colors.card,
              borderRadius: theme.borderRadius.lg,
              padding: theme.spacing.lg,
            },
          ]}
        >
          <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
            Dönüşüm Bilgisi
          </Text>
          <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
            {fromValue || '0'} {fromUnit.name} = {toValue || '0'} {toUnit.name}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  converterContainer: {
    marginTop: 16,
  },
  swapButton: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  swapIcon: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '600',
  },
  infoCard: {
    marginTop: 24,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

