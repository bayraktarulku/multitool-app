/**
 * Unit Converter Card Component
 */

import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import {ConversionCategory, Unit, Theme} from '../types';
import {convertUnit, formatConversionResult, getConversionFormula} from '../utils/unitConversions';

interface UnitPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (unit: Unit) => void;
  selectedUnit: Unit;
  units: Unit[];
  theme: Theme;
}

/**
 * Unit picker modal component
 */
const UnitPickerModal: React.FC<UnitPickerModalProps> = ({
  visible,
  onClose,
  onSelect,
  selectedUnit,
  units,
  theme,
}) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
    <Pressable style={styles.modalOverlay} onPress={onClose}>
      <View style={[styles.modalContent, {backgroundColor: theme.colors.card}]}>
        <Text style={[styles.modalTitle, {color: theme.colors.text}]}>Select Unit</Text>
        <ScrollView style={styles.unitList}>
          {units.map(unit => (
            <TouchableOpacity
              key={unit.symbol}
              style={[
                styles.unitOption,
                {borderBottomColor: theme.colors.border},
                unit.symbol === selectedUnit.symbol && {
                  backgroundColor: theme.colors.primary + '20',
                },
              ]}
              onPress={() => {
                onSelect(unit);
                onClose();
              }}>
              <Text style={[styles.unitName, {color: theme.colors.text}]}>{unit.name}</Text>
              <Text style={[styles.unitSymbol, {color: theme.colors.secondary}]}>
                {unit.symbol}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Pressable>
  </Modal>
);

interface UnitConverterCardProps {
  category: ConversionCategory;
}

/**
 * Unit converter card component for a single conversion category
 */
const UnitConverterCard: React.FC<UnitConverterCardProps> = ({category}) => {
  const {theme} = useTheme();
  const [fromValue, setFromValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<Unit>(category.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(category.units[1] || category.units[0]);
  const [showFromPicker, setShowFromPicker] = useState<boolean>(false);
  const [showToPicker, setShowToPicker] = useState<boolean>(false);

  // Calculate converted value
  const toValue = useMemo(() => {
    const numValue = parseFloat(fromValue) || 0;
    const converted = convertUnit(numValue, fromUnit, toUnit);
    return formatConversionResult(converted);
  }, [fromValue, fromUnit, toUnit]);

  // Get conversion formula
  const formula = useMemo(() => {
    const oneUnitConverted = convertUnit(1, fromUnit, toUnit);
    return getConversionFormula(fromUnit.symbol, toUnit.symbol, oneUnitConverted);
  }, [fromUnit, toUnit]);

  // Handle swap units
  const handleSwap = useCallback(() => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
  }, [fromUnit, toUnit, toValue]);

  // Handle from value change
  const handleFromValueChange = useCallback((text: string) => {
    // Allow only valid number input
    const sanitized = text.replace(/[^0-9.-]/g, '');
    setFromValue(sanitized);
  }, []);

  const handleCloseFromPicker = useCallback(() => setShowFromPicker(false), []);
  const handleCloseToPicker = useCallback(() => setShowToPicker(false), []);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.card}]}>
      <View style={styles.header}>
        <Icon name={category.icon} size={24} color={theme.colors.primary} />
        <Text style={[styles.categoryName, {color: theme.colors.text}]}>{category.name}</Text>
      </View>

      {/* From Unit Section */}
      <View style={styles.inputSection}>
        <TouchableOpacity
          style={[styles.unitSelector, {borderColor: theme.colors.border}]}
          onPress={() => setShowFromPicker(true)}>
          <Text style={[styles.unitText, {color: theme.colors.text}]}>{fromUnit.symbol}</Text>
          <Icon name="chevron-down" size={20} color={theme.colors.secondary} />
        </TouchableOpacity>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.colors.border,
              color: theme.colors.text,
              backgroundColor: theme.colors.background,
            },
          ]}
          value={fromValue}
          onChangeText={handleFromValueChange}
          keyboardType="numeric"
          placeholder="Enter value"
          placeholderTextColor={theme.colors.secondary}
        />
      </View>

      {/* Swap Button */}
      <TouchableOpacity
        style={[styles.swapButton, {backgroundColor: theme.colors.primary}]}
        onPress={handleSwap}
        accessibilityLabel="Swap units">
        <Icon name="swap-vertical" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* To Unit Section */}
      <View style={styles.inputSection}>
        <TouchableOpacity
          style={[styles.unitSelector, {borderColor: theme.colors.border}]}
          onPress={() => setShowToPicker(true)}>
          <Text style={[styles.unitText, {color: theme.colors.text}]}>{toUnit.symbol}</Text>
          <Icon name="chevron-down" size={20} color={theme.colors.secondary} />
        </TouchableOpacity>
        <View
          style={[
            styles.resultContainer,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}>
          <Text style={[styles.resultText, {color: theme.colors.text}]}>{toValue}</Text>
        </View>
      </View>

      {/* Formula Display */}
      <Text style={[styles.formula, {color: theme.colors.secondary}]}>{formula}</Text>

      {/* Unit Picker Modals */}
      <UnitPickerModal
        visible={showFromPicker}
        onClose={handleCloseFromPicker}
        onSelect={setFromUnit}
        selectedUnit={fromUnit}
        units={category.units}
        theme={theme}
      />
      <UnitPickerModal
        visible={showToPicker}
        onClose={handleCloseToPicker}
        onSelect={setToUnit}
        selectedUnit={toUnit}
        units={category.units}
        theme={theme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  unitSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 80,
  },
  unitText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
  },
  resultContainer: {
    flex: 1,
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '500',
  },
  swapButton: {
    alignSelf: 'center',
    padding: 8,
    borderRadius: 20,
    marginVertical: 8,
  },
  formula: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxHeight: '60%',
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  unitList: {
    maxHeight: 300,
  },
  unitOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  unitName: {
    fontSize: 16,
  },
  unitSymbol: {
    fontSize: 14,
  },
});

export default UnitConverterCard;
