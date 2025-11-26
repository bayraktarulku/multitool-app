/**
 * Unit Converter Screen
 */

import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import UnitConverterCard from '../components/UnitConverterCard';
import {conversionCategories} from '../utils/unitConversions';
import {ConversionCategory} from '../types';

/**
 * Unit Converter screen with multiple conversion categories
 */
const UnitConverterScreen: React.FC = () => {
  const {theme, isDark, toggleTheme} = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ConversionCategory>(
    conversionCategories[0],
  );
  const [showCategoryPicker, setShowCategoryPicker] = useState<boolean>(false);

  // Handle category selection
  const handleCategorySelect = useCallback((category: ConversionCategory) => {
    setSelectedCategory(category);
    setShowCategoryPicker(false);
  }, []);

  // Category picker modal
  const CategoryPickerModal = useMemo(
    () => (
      <Modal
        visible={showCategoryPicker}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCategoryPicker(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setShowCategoryPicker(false)}>
          <View style={[styles.modalContent, {backgroundColor: theme.colors.card}]}>
            <Text style={[styles.modalTitle, {color: theme.colors.text}]}>Select Category</Text>
            <ScrollView style={styles.categoryList}>
              {conversionCategories.map(category => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryOption,
                    {borderBottomColor: theme.colors.border},
                    category.id === selectedCategory.id && {
                      backgroundColor: theme.colors.primary + '20',
                    },
                  ]}
                  onPress={() => handleCategorySelect(category)}>
                  <View style={styles.categoryOptionContent}>
                    <Icon name={category.icon} size={24} color={theme.colors.primary} />
                    <Text style={[styles.categoryName, {color: theme.colors.text}]}>
                      {category.name}
                    </Text>
                  </View>
                  {category.id === selectedCategory.id && (
                    <Icon name="check" size={20} color={theme.colors.primary} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    ),
    [showCategoryPicker, selectedCategory, theme, handleCategorySelect],
  );

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: theme.colors.text}]}>Unit Converter</Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[styles.themeToggle, {backgroundColor: theme.colors.card}]}
          accessibilityLabel="Toggle theme">
          <Icon
            name={isDark ? 'weather-sunny' : 'weather-night'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* Category Selector */}
      <TouchableOpacity
        style={[styles.categorySelector, {backgroundColor: theme.colors.card}]}
        onPress={() => setShowCategoryPicker(true)}
        accessibilityLabel="Select conversion category">
        <View style={styles.categorySelectorContent}>
          <Icon name={selectedCategory.icon} size={24} color={theme.colors.primary} />
          <Text style={[styles.categoryText, {color: theme.colors.text}]}>
            {selectedCategory.name}
          </Text>
        </View>
        <Icon name="chevron-down" size={24} color={theme.colors.secondary} />
      </TouchableOpacity>

      {/* Category Chips for quick selection */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsContainer}
        contentContainerStyle={styles.chipsContent}>
        {conversionCategories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.chip,
              {
                backgroundColor:
                  category.id === selectedCategory.id ? theme.colors.primary : theme.colors.card,
              },
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Icon
              name={category.icon}
              size={18}
              color={category.id === selectedCategory.id ? '#FFFFFF' : theme.colors.text}
            />
            <Text
              style={[
                styles.chipText,
                {
                  color: category.id === selectedCategory.id ? '#FFFFFF' : theme.colors.text,
                },
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Converter Card */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        <UnitConverterCard key={selectedCategory.id} category={selectedCategory} />

        {/* Info Section */}
        <View style={[styles.infoCard, {backgroundColor: theme.colors.card}]}>
          <Icon name="information" size={20} color={theme.colors.primary} />
          <Text style={[styles.infoText, {color: theme.colors.secondary}]}>
            Tap on the unit symbol to change units. Use the swap button to reverse the conversion
            direction.
          </Text>
        </View>
      </ScrollView>

      {/* Category Picker Modal */}
      {CategoryPickerModal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  themeToggle: {
    padding: 10,
    borderRadius: 20,
  },
  categorySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  categorySelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  chipsContainer: {
    maxHeight: 50,
    marginBottom: 16,
  },
  chipsContent: {
    paddingRight: 16,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    gap: 6,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxHeight: '70%',
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  categoryList: {
    maxHeight: 400,
  },
  categoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  categoryOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default UnitConverterScreen;
