/**
 * QR Scanner Component
 * Note: This is a placeholder component as react-native-camera and qrcode-scanner
 * require native setup. In production, you would use the actual camera libraries.
 */

import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Clipboard,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '../context/ThemeContext';
import {QRHistoryItem} from '../types';
import {STORAGE_KEYS, QR_CONFIG} from '../utils/constants';

interface QRScannerProps {
  onScan?: (data: string) => void;
}

/**
 * QR Scanner component with simulated scanning functionality
 * In production, this would use react-native-camera and react-native-qrcode-scanner
 */
const QRScanner: React.FC<QRScannerProps> = ({onScan}) => {
  const {theme} = useTheme();
  const [scannedData, setScannedData] = useState<string>('');
  const [history, setHistory] = useState<QRHistoryItem[]>([]);
  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
  const [simulatedInput, setSimulatedInput] = useState<string>('');

  // Load history on mount
  React.useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEYS.QR_HISTORY);
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading QR history:', error);
    }
  };

  const saveToHistory = useCallback(
    async (data: string) => {
      try {
        const newItem: QRHistoryItem = {
          id: Date.now().toString(),
          data,
          timestamp: Date.now(),
          type: 'scanned',
        };

        const updatedHistory = [newItem, ...history].slice(0, QR_CONFIG.MAX_HISTORY_ITEMS);
        setHistory(updatedHistory);
        await AsyncStorage.setItem(STORAGE_KEYS.QR_HISTORY, JSON.stringify(updatedHistory));
      } catch (error) {
        console.error('Error saving to history:', error);
      }
    },
    [history],
  );

  const handleScan = useCallback(
    (data: string) => {
      setScannedData(data);
      saveToHistory(data);
      onScan?.(data);
    },
    [onScan, saveToHistory],
  );

  const handleSimulatedScan = useCallback(() => {
    if (simulatedInput.trim()) {
      handleScan(simulatedInput.trim());
      setSimulatedInput('');
    }
  }, [simulatedInput, handleScan]);

  const handleCopyToClipboard = useCallback(() => {
    if (scannedData) {
      Clipboard.setString(scannedData);
      Alert.alert('Copied', 'QR code data copied to clipboard');
    }
  }, [scannedData]);

  const toggleFlash = useCallback(() => {
    setIsFlashOn(prev => !prev);
  }, []);

  const clearHistory = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.QR_HISTORY);
      setHistory([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  }, []);

  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}
      contentContainerStyle={styles.contentContainer}>
      {/* Camera Placeholder */}
      <View style={[styles.cameraPlaceholder, {backgroundColor: theme.colors.card}]}>
        <Icon name="qrcode-scan" size={80} color={theme.colors.secondary} />
        <Text style={[styles.placeholderText, {color: theme.colors.secondary}]}>
          Camera Preview
        </Text>
        <Text style={[styles.placeholderSubtext, {color: theme.colors.secondary}]}>
          In production, the camera feed would appear here
        </Text>
      </View>

      {/* Camera Controls */}
      <View style={styles.controlsRow}>
        <TouchableOpacity
          style={[
            styles.controlButton,
            {backgroundColor: isFlashOn ? theme.colors.primary : theme.colors.card},
          ]}
          onPress={toggleFlash}
          accessibilityLabel="Toggle flashlight">
          <Icon
            name={isFlashOn ? 'flashlight' : 'flashlight-off'}
            size={24}
            color={isFlashOn ? '#FFFFFF' : theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* Simulated Input for Testing */}
      <View style={[styles.simulatedSection, {backgroundColor: theme.colors.card}]}>
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
          Test Scanner (Simulated)
        </Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.colors.border,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
              },
            ]}
            value={simulatedInput}
            onChangeText={setSimulatedInput}
            placeholder="Enter QR data to simulate scan"
            placeholderTextColor={theme.colors.secondary}
          />
          <TouchableOpacity
            style={[styles.scanButton, {backgroundColor: theme.colors.primary}]}
            onPress={handleSimulatedScan}>
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scanned Result */}
      {scannedData ? (
        <View style={[styles.resultSection, {backgroundColor: theme.colors.card}]}>
          <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>Scanned Data</Text>
          <Text style={[styles.resultText, {color: theme.colors.text}]} selectable>
            {scannedData}
          </Text>
          <TouchableOpacity
            style={[styles.copyButton, {backgroundColor: theme.colors.primary}]}
            onPress={handleCopyToClipboard}>
            <Icon name="content-copy" size={20} color="#FFFFFF" />
            <Text style={styles.copyButtonText}>Copy to Clipboard</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* History Section */}
      {history.length > 0 && (
        <View style={[styles.historySection, {backgroundColor: theme.colors.card}]}>
          <View style={styles.historyHeader}>
            <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>Scan History</Text>
            <TouchableOpacity onPress={clearHistory}>
              <Text style={[styles.clearButton, {color: theme.colors.error}]}>Clear</Text>
            </TouchableOpacity>
          </View>
          {history.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[styles.historyItem, {borderBottomColor: theme.colors.border}]}
              onPress={() => {
                setScannedData(item.data);
              }}>
              <View style={styles.historyItemContent}>
                <Text
                  style={[styles.historyData, {color: theme.colors.text}]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.data}
                </Text>
                <Text style={[styles.historyTime, {color: theme.colors.secondary}]}>
                  {formatTimestamp(item.timestamp)}
                </Text>
              </View>
              <Icon name="chevron-right" size={20} color={theme.colors.secondary} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  cameraPlaceholder: {
    height: 250,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  placeholderSubtext: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  controlButton: {
    padding: 12,
    borderRadius: 30,
  },
  simulatedSection: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    marginRight: 12,
  },
  scanButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  resultSection: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  historySection: {
    padding: 16,
    borderRadius: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  clearButton: {
    fontSize: 14,
    fontWeight: '500',
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  historyItemContent: {
    flex: 1,
  },
  historyData: {
    fontSize: 14,
    fontWeight: '500',
  },
  historyTime: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default QRScanner;
