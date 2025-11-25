/**
 * QR Scanner Tab component
 * Camera-based QR code scanner
 */

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Linking, Platform } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { IconButton } from '../../../components/ui/IconButton';
import { EmptyState } from '../../../components/common/EmptyState';
import { parseScannedQRCode } from '../../../utils/qrcode';
import Clipboard from '@react-native-clipboard/clipboard';

interface ScanResult {
  type: string;
  content: string;
  displayContent: string;
}

export const QRScannerTab: React.FC = () => {
  const { theme } = useTheme();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Note: In a real implementation, we would use react-native-vision-camera
  // For now, we'll show a placeholder UI since the camera requires native setup

  const requestCameraPermission = async () => {
    // Placeholder for camera permission request
    // In real implementation:
    // const { status } = await Camera.requestCameraPermission();
    // setHasPermission(status === 'granted');
    setHasPermission(false);
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    if (scanResult?.content) {
      Clipboard.setString(scanResult.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [scanResult]);

  const handleOpenLink = useCallback(() => {
    if (scanResult?.content) {
      if (scanResult.type === 'url') {
        Linking.openURL(scanResult.content);
      } else if (scanResult.type === 'email') {
        Linking.openURL(`mailto:${scanResult.displayContent}`);
      } else if (scanResult.type === 'phone') {
        Linking.openURL(`tel:${scanResult.displayContent}`);
      }
    }
  }, [scanResult]);

  const handleScanAgain = useCallback(() => {
    setScanResult(null);
  }, []);

  // Mock scan for demonstration
  const handleMockScan = useCallback(() => {
    const mockData = 'https://github.com/bayraktarulku/multitool-app';
    const result = parseScannedQRCode(mockData);
    setScanResult(result);
  }, []);

  if (hasPermission === null) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={{ color: theme.colors.text }}>
          Requesting camera permission...
        </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={[styles.container, { padding: theme.spacing.md }]}>
        <EmptyState
          icon="camera-off"
          title="Camera Access Required"
          message="QR Scanner requires camera access. Please enable camera permission in your device settings to use this feature."
          actionLabel="Enable Camera"
          onAction={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL('app-settings:');
            } else {
              Linking.openSettings();
            }
          }}
        />

        {/* Demo button for testing UI */}
        <View style={styles.demoContainer}>
          <Text
            style={[
              styles.demoText,
              { color: theme.colors.textSecondary },
            ]}
          >
            For demo purposes:
          </Text>
          <Button
            title="Simulate QR Scan"
            onPress={handleMockScan}
            variant="outline"
          />
        </View>

        {/* Show scan result if available */}
        {scanResult && (
          <Card
            style={[
              styles.resultCard,
              { marginTop: theme.spacing.lg },
            ]}
          >
            <Text
              style={[
                styles.resultLabel,
                {
                  color: theme.colors.textSecondary,
                  fontSize: theme.typography.fontSize.sm,
                },
              ]}
            >
              Scanned Result ({scanResult.type})
            </Text>
            <Text
              style={[
                styles.resultContent,
                {
                  color: theme.colors.text,
                  fontSize: theme.typography.fontSize.md,
                },
              ]}
              selectable
            >
              {scanResult.displayContent}
            </Text>

            <View style={styles.resultActions}>
              <IconButton
                name={copied ? 'check' : 'content-copy'}
                onPress={handleCopyToClipboard}
                accessibilityLabel="Copy to clipboard"
                size={20}
                color={copied ? theme.colors.success : theme.colors.text}
              />
              {(scanResult.type === 'url' ||
                scanResult.type === 'email' ||
                scanResult.type === 'phone') && (
                <IconButton
                  name="open-in-new"
                  onPress={handleOpenLink}
                  accessibilityLabel="Open link"
                  size={20}
                  color={theme.colors.primary}
                />
              )}
            </View>

            <Button
              title="Scan Again"
              onPress={handleScanAgain}
              variant="ghost"
              style={{ marginTop: theme.spacing.md }}
            />
          </Card>
        )}
      </View>
    );
  }

  // Camera view would be here in real implementation
  return (
    <View style={[styles.container, { padding: theme.spacing.md }]}>
      <View
        style={[
          styles.cameraPlaceholder,
          {
            backgroundColor: theme.colors.surface,
            borderRadius: theme.borderRadius.lg,
          },
        ]}
      >
        <Text style={{ color: theme.colors.textSecondary }}>
          Camera view would appear here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  demoText: {
    marginBottom: 8,
  },
  resultCard: {
    marginTop: 16,
  },
  resultLabel: {
    marginBottom: 8,
  },
  resultContent: {
    lineHeight: 24,
  },
  resultActions: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
});

export default QRScannerTab;
