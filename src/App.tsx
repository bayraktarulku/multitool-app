/**
 * MultiTool App - Main Entry Point
 *
 * All-in-one utility app with Calculator, Unit Converter, and QR Code Scanner/Generator
 */

import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import AppNavigator from './navigation/AppNavigator';

/**
 * App content wrapper that uses theme context
 */
const AppContent: React.FC = () => {
  const {theme, isDark} = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

/**
 * Main App component with providers
 */
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
