import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Linking,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/common/Card';

export const SettingsScreen: React.FC = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  const openGitHub = () => {
    Linking.openURL('https://github.com/bayraktarulku/MultitoolApp');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Görünüm
          </Text>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                Karanlık Mod
              </Text>
              <Text style={[styles.settingDescription, { color: theme.colors.textSecondary }]}>
                {isDark ? 'Karanlık tema aktif' : 'Aydınlık tema aktif'}
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{
                false: theme.colors.border,
                true: theme.colors.primary,
              }}
              thumbColor="#ffffff"
            />
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Uygulama Hakkında
          </Text>

          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.textSecondary }]}>
              Versiyon
            </Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>
              1.0.0
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.textSecondary }]}>
              Geliştirici
            </Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>
              Ülkü Bayraktar
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.githubButton,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.md,
              },
            ]}
            onPress={openGitHub}
            activeOpacity={0.7}
          >
            <Text style={styles.githubButtonText}>GitHub'da Görüntüle</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Özellikler
          </Text>

          <View style={styles.featureItem}>
            <Text style={[styles.featureIcon]}>🧮</Text>
            <View style={styles.featureInfo}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                Hesap Makinesi
              </Text>
              <Text style={[styles.featureDescription, { color: theme.colors.textSecondary }]}>
                Temel matematiksel işlemler
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Text style={[styles.featureIcon]}>📏</Text>
            <View style={styles.featureInfo}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                Birim Çevirici
              </Text>
              <Text style={[styles.featureDescription, { color: theme.colors.textSecondary }]}>
                Uzunluk, ağırlık, hacim ve sıcaklık dönüşümleri
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Text style={[styles.featureIcon]}>📱</Text>
            <View style={styles.featureInfo}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                QR Kod Oluşturucu
              </Text>
              <Text style={[styles.featureDescription, { color: theme.colors.textSecondary }]}>
                QR kod oluştur ve paylaş
              </Text>
            </View>
          </View>
        </Card>

        <Text style={[styles.copyright, { color: theme.colors.textSecondary }]}>
          © 2025 MultitoolApp. Tüm hakları saklıdır.
        </Text>
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
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  githubButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  githubButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  featureInfo: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
  },
  copyright: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 16,
    marginBottom: 32,
  },
});

