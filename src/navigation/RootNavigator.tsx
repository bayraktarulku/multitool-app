/**
 * Root Navigation
 * Bottom Tab Navigator with all screens
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CalculatorScreen, UnitConverterScreen, QRCodeScreen } from '../screens';
import { useTheme } from '../hooks/useTheme';
import { RootTabParamList } from '../types/navigation';
import { SCREENS } from '../constants';

const Tab = createBottomTabNavigator<RootTabParamList>();

/**
 * Tab bar icon component
 */
interface TabIconProps {
  name: string;
  color: string;
  size: number;
}

const TabIcon: React.FC<TabIconProps> = ({ name, color, size }) => (
  <Icon name={name} size={size} color={color} />
);

/**
 * Root Navigator component
 */
export const RootNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.divider,
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: theme.typography.fontSize.xs,
            fontWeight: '500',
          },
        }}
      >
        <Tab.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarLabel: 'Calculator',
            tabBarIcon: ({ color, size }) => (
              <TabIcon name="calculator" color={color} size={size} />
            ),
            tabBarAccessibilityLabel: 'Calculator',
          }}
        />
        <Tab.Screen
          name="Converter"
          component={UnitConverterScreen}
          options={{
            tabBarLabel: 'Converter',
            tabBarIcon: ({ color, size }) => (
              <TabIcon name="swap-horizontal" color={color} size={size} />
            ),
            tabBarAccessibilityLabel: 'Unit Converter',
          }}
        />
        <Tab.Screen
          name="QRCode"
          component={QRCodeScreen}
          options={{
            tabBarLabel: 'QR Code',
            tabBarIcon: ({ color, size }) => (
              <TabIcon name="qrcode" color={color} size={size} />
            ),
            tabBarAccessibilityLabel: 'QR Code Scanner and Generator',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default RootNavigator;
