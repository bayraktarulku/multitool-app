/**
 * App Navigator - Bottom Tab Navigation
 */

import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import CalculatorScreen from '../screens/CalculatorScreen';
import UnitConverterScreen from '../screens/UnitConverterScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import {RootTabParamList} from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

/**
 * Tab navigation icons configuration
 */
const TAB_ICONS: Record<keyof RootTabParamList, {focused: string; unfocused: string}> = {
  Calculator: {focused: 'calculator', unfocused: 'calculator-variant-outline'},
  Converter: {focused: 'swap-horizontal-circle', unfocused: 'swap-horizontal'},
  QRCode: {focused: 'qrcode', unfocused: 'qrcode-scan'},
};

/**
 * Tab bar icon component
 */
const TabBarIcon = ({
  routeName,
  focused,
  color,
  size,
}: {
  routeName: keyof RootTabParamList;
  focused: boolean;
  color: string;
  size: number;
}) => {
  const iconName = focused ? TAB_ICONS[routeName].focused : TAB_ICONS[routeName].unfocused;
  return <Icon name={iconName} size={size} color={color} />;
};

/**
 * Main app navigator component with bottom tabs
 */
const AppNavigator: React.FC = () => {
  const {theme} = useTheme();

  const renderCalculatorIcon = useCallback(
    ({focused, color, size}: {focused: boolean; color: string; size: number}) => (
      <TabBarIcon routeName="Calculator" focused={focused} color={color} size={size} />
    ),
    [],
  );

  const renderConverterIcon = useCallback(
    ({focused, color, size}: {focused: boolean; color: string; size: number}) => (
      <TabBarIcon routeName="Converter" focused={focused} color={color} size={size} />
    ),
    [],
  );

  const renderQRCodeIcon = useCallback(
    ({focused, color, size}: {focused: boolean; color: string; size: number}) => (
      <TabBarIcon routeName="QRCode" focused={focused} color={color} size={size} />
    ),
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarStyle: {
            backgroundColor: theme.colors.card,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
            height: 85,
            paddingBottom: 25,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarLabel: 'Calculator',
            tabBarAccessibilityLabel: 'Calculator tab',
            tabBarIcon: renderCalculatorIcon,
          }}
        />
        <Tab.Screen
          name="Converter"
          component={UnitConverterScreen}
          options={{
            tabBarLabel: 'Converter',
            tabBarAccessibilityLabel: 'Unit Converter tab',
            tabBarIcon: renderConverterIcon,
          }}
        />
        <Tab.Screen
          name="QRCode"
          component={QRCodeScreen}
          options={{
            tabBarLabel: 'QR Code',
            tabBarAccessibilityLabel: 'QR Code tab',
            tabBarIcon: renderQRCodeIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
