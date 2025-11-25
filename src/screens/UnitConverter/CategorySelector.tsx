/**
 * Category Selector component
 * Horizontal scrollable list of unit categories
 */

import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../hooks/useTheme';
import { UnitCategory, UnitCategoryDefinition } from '../../types/converter';

interface CategorySelectorProps {
  categories: UnitCategoryDefinition[];
  selectedCategory: UnitCategory;
  onSelectCategory: (category: UnitCategory) => void;
}

const CATEGORY_ICONS: Record<UnitCategory, string> = {
  length: 'ruler',
  weight: 'weight',
  temperature: 'thermometer',
  volume: 'beaker-outline',
  area: 'grid',
  speed: 'speedometer',
  time: 'clock-outline',
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { theme } = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map(category => {
        const isSelected = category.id === selectedCategory;

        return (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              {
                backgroundColor: isSelected
                  ? theme.colors.primary
                  : theme.colors.surface,
                borderRadius: theme.borderRadius.lg,
                marginRight: theme.spacing.sm,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.sm,
              },
              !isSelected && theme.shadow,
            ]}
            onPress={() => onSelectCategory(category.id)}
            activeOpacity={0.7}
            accessibilityLabel={`Select ${category.name} category`}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Icon
              name={CATEGORY_ICONS[category.id] || 'help-circle-outline'}
              size={20}
              color={isSelected ? theme.colors.white : theme.colors.text}
              style={styles.icon}
            />
            <Text
              style={[
                styles.categoryText,
                {
                  color: isSelected ? theme.colors.white : theme.colors.text,
                  fontSize: theme.typography.fontSize.sm,
                },
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 6,
  },
  categoryText: {
    fontWeight: '500',
  },
});

export default CategorySelector;
