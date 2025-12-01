import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import QRCode from 'react-native-qrcode-svg';
import { Card } from '../components/common/Card';

export const QRCodeScreen: React.FC = () => {
  const { theme } = useTheme();
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('https://github.com/bayraktarulku/MultitoolApp');
  const [qrSize, setQrSize] = useState(200);

  const generateQR = () => {
    if (inputText.trim()) {
      setQrValue(inputText.trim());
      Alert.alert('Başarılı', 'QR kod oluşturuldu!');
    } else {
      Alert.alert('Hata', 'Lütfen bir metin girin');
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: qrValue,
        title: 'QR Kod İçeriği',
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  const quickActions = [
    { label: 'Web Sitesi', value: 'https://example.com' },
    { label: 'E-posta', value: 'mailto:info@example.com' },
    { label: 'Telefon', value: 'tel:+905551234567' },
    { label: 'WhatsApp', value: 'https://wa.me/905551234567' },
    { label: 'WiFi', value: 'WIFI:T:WPA;S:NetworkName;P:Password;;' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* QR Code Display */}
        <Card style={styles.qrContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            QR Kod Önizleme
          </Text>
          <View style={styles.qrWrapper}>
            <QRCode
              value={qrValue}
              size={qrSize}
              color={theme.dark ? '#f9fafb' : '#1f2937'}
              backgroundColor={theme.dark ? '#1f2937' : '#ffffff'}
            />
          </View>
          <Text
            style={[styles.qrText, { color: theme.colors.textSecondary }]}
            numberOfLines={2}
          >
            {qrValue}
          </Text>
        </Card>

        {/* Input Section */}
        <Card style={styles.inputSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            QR Kod Oluştur
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.border,
              },
            ]}
            value={inputText}
            onChangeText={setInputText}
            placeholder="URL, metin veya veri girin..."
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            numberOfLines={3}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: theme.colors.primary },
              ]}
              onPress={generateQR}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Oluştur</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                styles.secondaryButton,
                { borderColor: theme.colors.primary },
              ]}
              onPress={handleShare}
              activeOpacity={0.7}
            >
              <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
                Paylaş
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        {/* Quick Actions */}
        <Card style={styles.quickSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Hızlı Şablonlar
          </Text>
          <View style={styles.quickGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.quickButton,
                  {
                    backgroundColor: theme.colors.buttonBackground,
                    borderColor: theme.colors.border,
                  },
                ]}
                onPress={() => {
                  setInputText(action.value);
                  setQrValue(action.value);
                }}
                activeOpacity={0.7}
              >
                <Text style={[styles.quickText, { color: theme.colors.text }]}>
                  {action.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {/* Size Control */}
        <Card style={styles.sizeSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Boyut: {qrSize}px
          </Text>
          <View style={styles.sizeButtons}>
            {[150, 200, 250].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  {
                    backgroundColor:
                      qrSize === size ? theme.colors.primary : theme.colors.buttonBackground,
                    borderColor: theme.colors.border,
                  },
                ]}
                onPress={() => setQrSize(size)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.sizeButtonText,
                    {
                      color: qrSize === size ? '#ffffff' : theme.colors.text,
                    },
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {/* Info */}
        <Card style={styles.infoSection}>
          <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
            💡 İpucu
          </Text>
          <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
            QR kod oluşturmak için yukarıdaki alana URL, metin, telefon numarası veya
            herhangi bir veri girebilirsiniz. Hızlı şablonları da kullanabilirsiniz.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  qrWrapper: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  qrText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  inputSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  quickSection: {
    marginBottom: 16,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  quickButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  quickText: {
    fontSize: 14,
    fontWeight: '500',
  },
  sizeSection: {
    marginBottom: 16,
  },
  sizeButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  sizeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  infoSection: {
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

