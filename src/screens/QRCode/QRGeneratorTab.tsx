/**
 * QR Generator Tab component
 * Generate QR codes from text input
 */

import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { IconButton } from '../../components/ui/IconButton';
import { QR_CONFIG, MAX_INPUT_LENGTH } from '../../constants';
import { formatQRContent, detectQRCodeType } from '../../utils/qrcode';
import Clipboard from '@react-native-clipboard/clipboard';

export const QRGeneratorTab: React.FC = () => {
  const { theme } = useTheme();
  const [inputText, setInputText] = useState('');
  const [generatedQR, setGeneratedQR] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerateQR = useCallback(() => {
    if (!inputText.trim()) {
      Alert.alert('Error', 'Please enter some text to generate a QR code');
      return;
    }

    const type = detectQRCodeType(inputText);
    const formattedContent = formatQRContent(inputText.trim(), type);
    setGeneratedQR(formattedContent);
  }, [inputText]);

  const handleClear = useCallback(() => {
    setInputText('');
    setGeneratedQR(null);
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    if (generatedQR) {
      Clipboard.setString(generatedQR);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [generatedQR]);

  const handleShare = useCallback(async () => {
    // Note: In a real implementation, we would use react-native-share
    // to share the QR code image
    Alert.alert(
      'Share QR Code',
      'Share functionality requires native setup. The QR code would be shared here.',
    );
  }, []);

  const detectedType = inputText ? detectQRCodeType(inputText) : null;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { padding: theme.spacing.md },
      ]}
      keyboardShouldPersistTaps="handled"
    >
      {/* Input Section */}
      <Card style={styles.inputCard}>
        <Text
          style={[
            styles.label,
            {
              color: theme.colors.text,
              fontSize: theme.typography.fontSize.md,
              marginBottom: theme.spacing.sm,
            },
          ]}
        >
          Enter text or URL
        </Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
              borderRadius: theme.borderRadius.md,
              color: theme.colors.text,
              fontSize: theme.typography.fontSize.md,
              padding: theme.spacing.sm,
            },
          ]}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter text, URL, email, or phone number..."
          placeholderTextColor={theme.colors.textDisabled}
          multiline
          numberOfLines={3}
          maxLength={MAX_INPUT_LENGTH.QR_TEXT}
          accessibilityLabel="QR code content input"
        />

        <View style={styles.inputFooter}>
          {detectedType && (
            <Text
              style={[
                styles.typeLabel,
                {
                  color: theme.colors.textSecondary,
                  fontSize: theme.typography.fontSize.sm,
                },
              ]}
            >
              Type: {detectedType.toUpperCase()}
            </Text>
          )}
          <Text
            style={[
              styles.charCount,
              {
                color: theme.colors.textDisabled,
                fontSize: theme.typography.fontSize.sm,
              },
            ]}
          >
            {inputText.length}/{MAX_INPUT_LENGTH.QR_TEXT}
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="Generate QR"
            onPress={handleGenerateQR}
            style={{ flex: 1 }}
            disabled={!inputText.trim()}
          />
          <IconButton
            name="delete"
            onPress={handleClear}
            accessibilityLabel="Clear input"
            color={theme.colors.error}
            style={{ marginLeft: theme.spacing.sm }}
          />
        </View>
      </Card>

      {/* QR Code Display */}
      {generatedQR && (
        <Card style={{ ...styles.qrCard, marginTop: theme.spacing.lg }}>
          <View
            style={{
              ...styles.qrContainer,
              backgroundColor: theme.colors.white,
              borderRadius: theme.borderRadius.md,
              padding: theme.spacing.md,
            }}
          >
            <QRCode
              value={generatedQR}
              size={QR_CONFIG.DEFAULT_SIZE}
              backgroundColor={theme.colors.white}
              color={theme.colors.black}
            />
          </View>

          <Text
            style={[
              styles.qrContent,
              {
                color: theme.colors.textSecondary,
                fontSize: theme.typography.fontSize.sm,
                marginTop: theme.spacing.md,
              },
            ]}
            numberOfLines={2}
          >
            {generatedQR}
          </Text>

          <View style={styles.actionRow}>
            <IconButton
              name={copied ? 'check' : 'content-copy'}
              onPress={handleCopyToClipboard}
              accessibilityLabel="Copy content"
              color={copied ? theme.colors.success : theme.colors.text}
            />
            <IconButton
              name="share-variant"
              onPress={handleShare}
              accessibilityLabel="Share QR code"
              color={theme.colors.primary}
            />
          </View>
        </Card>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  inputCard: {},
  label: {
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
  typeLabel: {},
  charCount: {},
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrCard: {
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContent: {
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 16,
  },
});

export default QRGeneratorTab;
