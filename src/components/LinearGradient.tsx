import React from 'react';
import { View, ViewStyle } from 'react-native';

interface LinearGradientProps {
  colors: string[];
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const LinearGradient: React.FC<LinearGradientProps> = ({
  colors,
  style,
  children,
}) => {
  // Simple gradient approximation using the first color
  // For a real gradient, you would install react-native-linear-gradient
  const backgroundColor = colors[0];

  return (
    <View style={[{ backgroundColor }, style]}>
      {children}
    </View>
  );
};

