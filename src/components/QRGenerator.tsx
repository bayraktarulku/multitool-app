/**
 * QR Generator Component
 */

import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Share,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../context/ThemeContext';
import {QR_CONFIG} from '../utils/constants';

interface QRGeneratorProps {
  onGenerate?: (data: string) => void;
}

/**
 * QR Generator component for creating QR codes from text input
 */
const QRGenerator: React.FC<QRGeneratorProps> = ({onGenerate}) => {
  const {theme} = useTheme();
  const [inputText, setInputText] = useState<string>('');
  const [qrSize, setQrSize] = useState<number>(QR_CONFIG.DEFAULT_SIZE);
  const qrRef = useRef<{toDataURL: (callback: (data: string) => void) => void}>(null);

  // Handle text change
  const handleTextChange = useCallback(
    (text: string) => {
      setInputText(text);
      onGenerate?.(text);
    },
    [onGenerate],
  );

  // Handle size adjustment
  const adjustSize = useCallback((delta: number) => {
    setQrSize(prevSize => {
      const newSize = prevSize + delta;
      return Math.max(QR_CONFIG.MIN_SIZE, Math.min(QR_CONFIG.MAX_SIZE, newSize));
    });
  }, []);

  // Handle share QR code
  const handleShare = useCallback(async () => {
    if (!inputText) {
      Alert.alert('Error', 'Please enter some text to generate a QR code');
      return;
    }

    try {
      // Share the text content
      await Share.share({
        message: `QR Code content: ${inputText}`,
        title: 'Share QR Code',
      });
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert('Error', 'Failed to share QR code');
    }
  }, [inputText]);

  // Handle save to gallery (simulated - requires native implementation)
  const handleSave = useCallback(() => {
    if (!inputText) {
      Alert.alert('Error', 'Please enter some text to generate a QR code');
      return;
    }

    // In production, this would use react-native-fs or CameraRoll to save the image
    Alert.alert(
      'Save QR Code',
      'In production, this would save the QR code to your gallery. This feature requires native permissions setup.',
      [{text: 'OK'}],
    );
  }, [inputText]);

  // Clear input
  const handleClear = useCallback(() => {
    setInputText('');
  }, []);

  // Quick presets
  const presets = [
    {label: 'URL', prefix: 'https://'},
    {label: 'Email', prefix: 'mailto:'},
    {label: 'Phone', prefix: 'tel:'},
    {label: 'SMS', prefix: 'sms:'},
  ];

  const applyPreset = useCallback(
    (prefix: string) => {
      if (!inputText.startsWith(prefix)) {
        setInputText(prefix + inputText);
      }
    },
    [inputText],
  );

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}
      contentContainerStyle={styles.contentContainer}>
      {/* Input Section */}
      <View style={[styles.inputSection, {backgroundColor: theme.colors.card}]}>
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>Enter Content</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.colors.border,
              color: theme.colors.text,
              backgroundColor: theme.colors.background,
            },
          ]}
          value={inputText}
          onChangeText={handleTextChange}
          placeholder="Enter text, URL, or contact info"
          placeholderTextColor={theme.colors.secondary}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
        />

        {/* Quick Presets */}
        <View style={styles.presetsRow}>
          {presets.map(preset => (
            <TouchableOpacity
              key={preset.label}
              style={[styles.presetButton, {borderColor: theme.colors.border}]}
              onPress={() => applyPreset(preset.prefix)}>
              <Text style={[styles.presetText, {color: theme.colors.primary}]}>{preset.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {inputText.length > 0 && (
          <TouchableOpacity style={styles.clearInputButton} onPress={handleClear}>
            <Icon name="close-circle" size={20} color={theme.colors.secondary} />
          </TouchableOpacity>
        )}
      </View>

      {/* QR Code Display */}
      <View style={[styles.qrSection, {backgroundColor: theme.colors.card}]}>
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>Generated QR Code</Text>

        <View style={styles.qrContainer}>
          {inputText ? (
            <View style={styles.qrWrapper}>
              <QRCode
                value={inputText}
                size={qrSize}
                backgroundColor={theme.dark ? '#1C1C1E' : '#FFFFFF'}
                color={theme.dark ? '#FFFFFF' : '#000000'}
                getRef={ref => {
                  if (ref) {
                    (qrRef as React.MutableRefObject<typeof ref>).current = ref;
                  }
                }}
              />
            </View>
          ) : (
            <View
              style={[
                styles.placeholder,
                {
                  width: qrSize,
                  height: qrSize,
                  borderColor: theme.colors.border,
                },
              ]}>
              <Icon name="qrcode" size={60} color={theme.colors.secondary} />
              <Text style={[styles.placeholderText, {color: theme.colors.secondary}]}>
                Enter text above to generate QR code
              </Text>
            </View>
          )}
        </View>

        {/* Size Controls */}
        <View style={styles.sizeControls}>
          <Text style={[styles.sizeLabel, {color: theme.colors.text}]}>Size: {qrSize}px</Text>
          <View style={styles.sizeButtons}>
            <TouchableOpacity
              style={[styles.sizeButton, {backgroundColor: theme.colors.buttonBackground}]}
              onPress={() => adjustSize(-20)}
              disabled={qrSize <= QR_CONFIG.MIN_SIZE}>
              <Icon
                name="minus"
                size={20}
                color={qrSize <= QR_CONFIG.MIN_SIZE ? theme.colors.secondary : theme.colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sizeButton, {backgroundColor: theme.colors.buttonBackground}]}
              onPress={() => adjustSize(20)}
              disabled={qrSize >= QR_CONFIG.MAX_SIZE}>
              <Icon
                name="plus"
                size={20}
                color={qrSize >= QR_CONFIG.MAX_SIZE ? theme.colors.secondary : theme.colors.text}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      {inputText.length > 0 && (
        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: theme.colors.primary}]}
            onPress={handleShare}>
            <Icon name="share-variant" size={22} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: theme.colors.success}]}
            onPress={handleSave}>
            <Icon name="download" size={22} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Save to Gallery</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Character Count */}
      <Text style={[styles.charCount, {color: theme.colors.secondary}]}>
        {inputText.length} characters
      </Text>
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
  inputSection: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    minHeight: 80,
  },
  presetsRow: {
    flexDirection: 'row',
    marginTop: 12,
    flexWrap: 'wrap',
    gap: 8,
  },
  presetButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  presetText: {
    fontSize: 12,
    fontWeight: '500',
  },
  clearInputButton: {
    position: 'absolute',
    right: 20,
    top: 52,
  },
  qrSection: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  qrWrapper: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
  },
  placeholderText: {
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
  },
  sizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  sizeLabel: {
    fontSize: 14,
  },
  sizeButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  charCount: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default QRGenerator;
