import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Unit } from '../../utils/unitConverter';

interface UnitInputProps {
  label: string;
  value: string;
  unit: Unit;
  units: Unit[];
  onValueChange: (value: string) => void;
  onUnitChange: (unit: Unit) => void;
  editable?: boolean;
}

export const UnitInput: React.FC<UnitInputProps> = ({
  label,
  value,
  unit,
  units,
  onValueChange,
  onUnitChange,
  editable = true,
}) => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderRadius: theme.borderRadius.lg,
          padding: theme.spacing.md,
        },
      ]}
    >
      <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
        {label}
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.text,
              fontSize: theme.typography.h2,
            },
          ]}
          value={value}
          onChangeText={onValueChange}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={theme.colors.textSecondary}
          editable={editable}
        />

        <TouchableOpacity
          style={[
            styles.unitButton,
            {
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.md,
              padding: theme.spacing.sm,
            },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.unitText}>{unit.symbol}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius.lg,
              },
            ]}
          >
            <View
              style={[
                styles.modalHeader,
                { borderBottomColor: theme.colors.border },
              ]}
            >
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
                Birim Seç
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={[styles.closeButton, { color: theme.colors.primary }]}>
                  Kapat
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={units}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.unitItem,
                    {
                      backgroundColor:
                        item.id === unit.id
                          ? theme.colors.primary + '20'
                          : 'transparent',
                    },
                  ]}
                  onPress={() => {
                    onUnitChange(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={[styles.unitItemName, { color: theme.colors.text }]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[styles.unitItemSymbol, { color: theme.colors.textSecondary }]}
                  >
                    {item.symbol}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    fontWeight: '600',
  },
  unitButton: {
    minWidth: 70,
    alignItems: 'center',
  },
  unitText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 16,
    fontWeight: '600',
  },
  unitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  unitItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  unitItemSymbol: {
    fontSize: 16,
  },
});

