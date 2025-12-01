import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { UnitCategory } from '../../utils/unitConverter';

interface CategoryPickerProps {
  categories: UnitCategory[];
  selectedCategory: UnitCategory;
  onSelectCategory: (category: UnitCategory) => void;
}

export const CategoryPicker: React.FC<CategoryPickerProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => {
          const isSelected = category.id === selectedCategory.id;
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                {
                  backgroundColor: isSelected
                    ? theme.colors.primary
                    : theme.colors.card,
                  borderRadius: theme.borderRadius.md,
                },
              ]}
              onPress={() => onSelectCategory(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: isSelected ? '#ffffff' : theme.colors.text,
                    fontSize: theme.typography.body,
                  },
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 4,
    gap: 12,
  },
  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  categoryText: {
    fontWeight: '600',
  },
});

