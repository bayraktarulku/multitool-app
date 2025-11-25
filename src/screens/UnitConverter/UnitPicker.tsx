/**
 * Unit Picker component
 * Dropdown-style unit selector
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../../hooks/useTheme';
import { UnitDefinition } from '../../../types/converter';

interface UnitPickerProps {
  units: UnitDefinition[];
  selectedUnit: string;
  onSelectUnit: (unitId: string) => void;
  label: string;
}

export const UnitPicker: React.FC<UnitPickerProps> = ({
  units,
  selectedUnit,
  onSelectUnit,
  label,
}) => {
  const { theme } = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedUnitData = units.find(u => u.id === selectedUnit);

  const handleSelectUnit = (unitId: string) => {
    onSelectUnit(unitId);
    setIsModalVisible(false);
  };

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

      <TouchableOpacity
        style={[
          styles.picker,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderRadius: theme.borderRadius.md,
            padding: theme.spacing.sm,
          },
        ]}
        onPress={() => setIsModalVisible(true)}
        accessibilityLabel={`Select ${label} unit`}
        accessibilityRole="button"
      >
        <View style={styles.pickerContent}>
          <Text
            style={[
              styles.unitName,
              {
                color: theme.colors.text,
                fontSize: theme.typography.fontSize.md,
              },
            ]}
          >
            {selectedUnitData?.name || 'Select unit'}
          </Text>
          <Text
            style={[
              styles.unitSymbol,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.sm,
              },
            ]}
          >
            {selectedUnitData?.symbol}
          </Text>
        </View>
        <Icon
          name="chevron-down"
          size={24}
          color={theme.colors.textSecondary}
        />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: theme.borderRadius.xl,
                borderTopRightRadius: theme.borderRadius.xl,
              },
            ]}
          >
            <View
              style={[
                styles.modalHeader,
                {
                  borderBottomColor: theme.colors.divider,
                  paddingVertical: theme.spacing.md,
                },
              ]}
            >
              <Text
                style={[
                  styles.modalTitle,
                  {
                    color: theme.colors.text,
                    fontSize: theme.typography.fontSize.lg,
                  },
                ]}
              >
                Select {label}
              </Text>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                accessibilityLabel="Close"
              >
                <Icon name="close" size={24} color={theme.colors.text} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={units}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                const isSelected = item.id === selectedUnit;
                return (
                  <TouchableOpacity
                    style={[
                      styles.unitItem,
                      {
                        backgroundColor: isSelected
                          ? theme.colors.primaryLight + '20'
                          : 'transparent',
                        paddingVertical: theme.spacing.md,
                        paddingHorizontal: theme.spacing.md,
                      },
                    ]}
                    onPress={() => handleSelectUnit(item.id)}
                    accessibilityLabel={`Select ${item.name}`}
                    accessibilityRole="button"
                  >
                    <View style={styles.unitItemContent}>
                      <Text
                        style={[
                          styles.unitItemName,
                          {
                            color: theme.colors.text,
                            fontSize: theme.typography.fontSize.md,
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.unitItemSymbol,
                          {
                            color: theme.colors.textSecondary,
                            fontSize: theme.typography.fontSize.sm,
                          },
                        ]}
                      >
                        {item.symbol}
                      </Text>
                    </View>
                    {isSelected && (
                      <Icon
                        name="check"
                        size={24}
                        color={theme.colors.primary}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: '500',
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  pickerContent: {
    flex: 1,
  },
  unitName: {
    fontWeight: '500',
  },
  unitSymbol: {},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontWeight: '600',
  },
  unitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unitItemContent: {
    flex: 1,
  },
  unitItemName: {
    fontWeight: '500',
  },
  unitItemSymbol: {
    marginTop: 2,
  },
});

export default UnitPicker;
