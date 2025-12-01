# 🛠️ MultitoolApp

[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/bayraktarulku/multitool-app)
[![React Native](https://img.shields.io/badge/React%20Native-0.82.1-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Modern ve kullanıcı dostu çoklu araç uygulaması. Hesap makinesi, birim çevirici ve QR kod oluşturucu - hepsi tek bir uygulamada!

![MultitoolApp Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=MultitoolApp)

## ✨ Özellikler

### 🧮 Hesap Makinesi
- ✅ Temel matematiksel işlemler (+, -, ×, ÷)
- ✅ Yüzde hesaplama (%)
- ✅ İşaret değiştirme (±)
- ✅ Temizleme ve geri silme
- ✅ Büyük ve okunabilir ekran
- ✅ Modern buton grid layout

### 📏 Birim Çevirici
- ✅ **4 Kategori**: Uzunluk, Ağırlık, Hacim, Sıcaklık
- ✅ **28+ Birim**: Metre, kilometre, pound, litre, celsius ve daha fazlası
- ✅ Anlık dönüşüm hesaplama
- ✅ Kategori seçici
- ✅ Birim swap özelliği
- ✅ Modal birim seçimi

### 📱 QR Kod Oluşturucu
- ✅ Her türlü veri için QR kod oluşturma
- ✅ 5 Hızlı şablon (Web, Email, Telefon, WhatsApp, WiFi)
- ✅ 3 Boyut seçeneği (150px, 200px, 250px)
- ✅ Paylaşma özelliği
- ✅ Tema-aware QR renkleri

### 🎨 Tema Sistemi
- ✅ Dark/Light mode
- ✅ Sistem temasını otomatik algılama
- ✅ AsyncStorage ile tema tercihi kaydetme
- ✅ Smooth geçişler
- ✅ Modern Indigo/Purple gradient renk paleti
- ✅ Tüm componentlerde tutarlı tema

### 🧭 Navigation
- ✅ Bottom Tab Navigation
- ✅ 4 ana ekran (Calculator, Converter, QR Code, Settings)
- ✅ Custom Ionicons
- ✅ Active/Inactive states
- ✅ Tema-aware navigation bar

## 📱 Screenshots

| Calculator | Converter | QR Code | Dark Mode |
|------------|-----------|---------|-----------|
| ![Calculator](https://via.placeholder.com/200x400/6366f1/ffffff?text=Calculator) | ![Converter](https://via.placeholder.com/200x400/6366f1/ffffff?text=Converter) | ![QR Code](https://via.placeholder.com/200x400/6366f1/ffffff?text=QR+Code) | ![Dark Mode](https://via.placeholder.com/200x400/1f2937/ffffff?text=Dark+Mode) |

## 🚀 Başlangıç

### Gereksinimler

- Node.js >= 20
- React Native CLI
- Xcode 14+ (iOS için)
- Android Studio (Android için)
- CocoaPods (iOS için)

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/bayraktarulku/multitool-app.git
cd multitool-app

# Bağımlılıkları yükleyin
npm install

# iOS için pods yükleyin (sadece macOS)
cd ios && pod install && cd ..
```

### Çalıştırma

```bash
# iOS Simülatör
npm run ios

# Android Emülatör
npm run android

# Metro bundler
npm start
```

## 🏗️ Proje Yapısı

```
MultitoolApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── calculator/      # Calculator-specific
│   │   ├── converter/       # Converter-specific
│   │   └── common/          # Shared components
│   ├── screens/             # Screen components
│   │   ├── CalculatorScreen.tsx
│   │   ├── UnitConverterScreen.tsx
│   │   ├── QRCodeScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── context/             # React Context (Theme)
│   ├── types/               # TypeScript types
│   └── utils/               # Utility functions
├── android/                 # Android native
├── ios/                     # iOS native
└── App.tsx                  # App entry point
```

## 🛠️ Teknolojiler

- **React Native** 0.82.1 - Cross-platform framework
- **TypeScript** 5.8.3 - Type-safe JavaScript
- **React Navigation** 7 - Navigation library
- **Context API** - State management
- **AsyncStorage** - Persistent storage
- **react-native-vector-icons** - Icon library
- **react-native-qrcode-svg** - QR code generation
- **react-native-svg** - SVG support

## 📋 Özellik Durumu

| Özellik | Durum | Versiyon |
|---------|-------|----------|
| Hesap Makinesi | ✅ Tamamlandı | v1.0.0 |
| Birim Çevirici | ✅ Tamamlandı | v1.0.0 |
| QR Kod Oluşturucu | ✅ Tamamlandı | v1.1.0 |
| Tema Sistemi | ✅ Tamamlandı | v1.0.0 |
| Hesaplama Geçmişi | 🔄 Planlanan | v1.2.0 |
| QR Kod Okuyucu | 🔄 Planlanan | v1.2.0 |
| Widget Desteği | 🔄 Planlanan | v1.2.0 |

## 🗺️ Roadmap

### v1.2.0 (Q1 2025)
- [ ] QR Kod Okuyucu (camera ile)
- [ ] Hesaplama geçmişi
- [ ] Favori dönüşümler
- [ ] Widget desteği
- [ ] Haptic feedback
- [ ] Daha fazla birim kategorileri

### v2.0.0 (Q3 2025)
- [ ] Multi-language support
- [ ] Cloud sync
- [ ] Premium features
- [ ] AI integration

Detaylı roadmap için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

## 🧪 Test

```bash
# TypeScript type checking
npx tsc --noEmit

# Linting
npm run lint

# Unit tests
npm test

# Test script
./test.sh
```

## 📚 Dokümantasyon

- [Quick Start Guide](QUICK_START.md) - Hızlı başlangıç
- [Build Guide](BUILD_GUIDE.md) - Build ve deployment
- [Contributing Guide](CONTRIBUTING.md) - Katkıda bulunma
- [Project Structure](PROJECT_STRUCTURE.md) - Kod yapısı
- [Feature: QR Code](FEATURE_QR_CODE.md) - QR özelliği detayları
- [Store Assets](STORE_ASSETS.md) - Store hazırlık
- [Release Notes](RELEASE_NOTES.md) - Versiyon notları

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Ülkü Bayraktar**

- GitHub: [@bayraktarulku](https://github.com/bayraktarulku)
- Website: [multitoolapp.com](https://multitoolapp.com) (coming soon)

## 🙏 Teşekkürler

- React Native team
- React Navigation team
- Tüm açık kaynak katkıda bulunanlar

## 📊 İstatistikler

- **Toplam Satır Kodu**: ~5,500+
- **Dosya Sayısı**: 70+
- **Component Sayısı**: 13
- **Screen Sayısı**: 4
- **Dokümantasyon**: 15+ MD dosya

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bayraktarulku/multitool-app&type=Date)](https://star-history.com/#bayraktarulku/multitool-app&Date)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/bayraktarulku">Ülkü Bayraktar</a>
</p>

<p align="center">
  ⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
</p>

