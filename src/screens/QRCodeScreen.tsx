/**
 * QR Code Screen
 */

import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import QRScanner from '../components/QRScanner';
import QRGenerator from '../components/QRGenerator';
import {QRMode} from '../types';

/**
 * QR Code screen with scanner and generator modes
 */
const QRCodeScreen: React.FC = () => {
  const {theme, isDark, toggleTheme} = useTheme();
  const [mode, setMode] = useState<QRMode>('generator');

  // Handle mode switch
  const handleModeSwitch = useCallback((newMode: QRMode) => {
    setMode(newMode);
  }, []);

  // Handle scan result
  const handleScan = useCallback((data: string) => {
    console.log('Scanned:', data);
  }, []);

  // Handle generate result
  const handleGenerate = useCallback((data: string) => {
    console.log('Generated:', data);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: theme.colors.text}]}>QR Code</Text>
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

      {/* Mode Toggle */}
      <View style={[styles.modeToggle, {backgroundColor: theme.colors.card}]}>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'scanner' && {backgroundColor: theme.colors.primary}]}
          onPress={() => handleModeSwitch('scanner')}
          accessibilityLabel="Switch to scanner mode">
          <Icon
            name="qrcode-scan"
            size={20}
            color={mode === 'scanner' ? '#FFFFFF' : theme.colors.text}
          />
          <Text
            style={[
              styles.modeButtonText,
              {color: mode === 'scanner' ? '#FFFFFF' : theme.colors.text},
            ]}>
            Scanner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            mode === 'generator' && {backgroundColor: theme.colors.primary},
          ]}
          onPress={() => handleModeSwitch('generator')}
          accessibilityLabel="Switch to generator mode">
          <Icon
            name="qrcode"
            size={20}
            color={mode === 'generator' ? '#FFFFFF' : theme.colors.text}
          />
          <Text
            style={[
              styles.modeButtonText,
              {color: mode === 'generator' ? '#FFFFFF' : theme.colors.text},
            ]}>
            Generator
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {mode === 'scanner' ? (
          <QRScanner onScan={handleScan} />
        ) : (
          <QRGenerator onGenerate={handleGenerate} />
        )}
      </View>
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
  modeToggle: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  modeButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
});

export default QRCodeScreen;
