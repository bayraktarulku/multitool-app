/**
 * MultitoolApp - Modern Multi-Tool Mobile Application
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { UnitConverterScreen } from './src/screens/UnitConverterScreen';
import { QRCodeScreen } from './src/screens/QRCodeScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function AppNavigator(): React.JSX.Element {
  const { theme, isDark } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer
        theme={{
          dark: isDark,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.card,
            text: theme.colors.text,
            border: theme.colors.border,
            notification: theme.colors.notification,
          },
          fonts: {
            regular: {
              fontFamily: 'System',
              fontWeight: '400',
            },
            medium: {
              fontFamily: 'System',
              fontWeight: '500',
            },
            bold: {
              fontFamily: 'System',
              fontWeight: '700',
            },
            heavy: {
              fontFamily: 'System',
              fontWeight: '900',
            },
          },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;

              if (route.name === 'Calculator') {
                iconName = focused ? 'calculator' : 'calculator-outline';
              } else if (route.name === 'Converter') {
                iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
              } else if (route.name === 'QRCode') {
                iconName = focused ? 'qr-code' : 'qr-code-outline';
              } else {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.textSecondary,
            tabBarStyle: {
              backgroundColor: theme.colors.card,
              borderTopColor: theme.colors.border,
            },
            headerStyle: {
              backgroundColor: theme.colors.card,
            },
            headerTintColor: theme.colors.text,
            headerShadowVisible: false,
          })}
        >
          <Tab.Screen
            name="Calculator"
            component={CalculatorScreen}
            options={{ title: 'Hesap Makinesi' }}
          />
          <Tab.Screen
            name="Converter"
            component={UnitConverterScreen}
            options={{ title: 'Birim Çevirici' }}
          />
          <Tab.Screen
            name="QRCode"
            component={QRCodeScreen}
            options={{ title: 'QR Kod' }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Ayarlar' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


export default App;
