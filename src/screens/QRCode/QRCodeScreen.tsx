/**
 * QR Code Screen
 * Tab view for Scanner and Generator
 */

import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaContainer, ScreenHeader } from '../../components';
import { useTheme } from '../../hooks/useTheme';
import { QRScannerTab } from './QRScannerTab';
import { QRGeneratorTab } from './QRGeneratorTab';
import { QRCodeTabParamList } from '../../types/navigation';

const Tab = createMaterialTopTabNavigator<QRCodeTabParamList>();

export const QRCodeScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaContainer edges={['top']}>
      <ScreenHeader
        title="QR Code"
        rightAction={{
          icon: theme.isDark ? 'white-balance-sunny' : 'moon-waning-crescent',
          onPress: toggleTheme,
          accessibilityLabel: 'Toggle theme',
        }}
      />

      <Tab.Navigator
        initialRouteName="Scanner"
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.divider,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
            height: 3,
            borderRadius: 3,
          },
          tabBarLabelStyle: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: '600',
            textTransform: 'none',
          },
          tabBarPressColor: theme.colors.primaryLight + '30',
        }}
      >
        <Tab.Screen
          name="Scanner"
          component={QRScannerTab}
          options={{
            tabBarLabel: '📷 Scanner',
            tabBarAccessibilityLabel: 'QR Code Scanner',
          }}
        />
        <Tab.Screen
          name="Generator"
          component={QRGeneratorTab}
          options={{
            tabBarLabel: '✨ Generator',
            tabBarAccessibilityLabel: 'QR Code Generator',
          }}
        />
      </Tab.Navigator>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QRCodeScreen;
