# 🛠️ MultitoolApp

Modern ve kullanıcı dostu çoklu araç uygulaması. Hesap makinesi ve birim çevirici özelliklerini tek bir uygulamada sunar.

![React Native](https://img.shields.io/badge/React_Native-0.82.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Özellikler

### 🧮 Hesap Makinesi
- Temel matematiksel işlemler (+, -, ×, ÷)
- Yüzde hesaplama
- İşaret değiştirme
- Modern ve sezgisel arayüz
- Karanlık/Aydınlık tema desteği

### 📏 Birim Çevirici
- **Uzunluk**: metre, kilometre, mil, fit, inç, santimetre
- **Ağırlık**: kilogram, gram, ton, pound, ons
- **Hacim**: litre, mililitre, galon, fincan
- **Sıcaklık**: Celsius, Fahrenheit, Kelvin
- Anlık dönüşüm
- Kullanıcı dostu birim seçimi

### 🎨 Tema Sistemi
- Karanlık/Aydınlık mod
- Sistem temasını takip etme
- Smooth geçişler
- Modern renk paleti

## 📱 Ekran Görüntüleri

*(Ekran görüntüleri eklenmesi gerekiyor)*

## 🚀 Başlangıç

### Gereksinimler

- Node.js >= 20
- React Native CLI
- Xcode (iOS için)
- Android Studio (Android için)

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/bayraktarulku/MultitoolApp.git
cd MultitoolApp

# Bağımlılıkları yükleyin
npm install

# iOS için pods yükleyin
cd ios && pod install && cd ..
```

### Çalıştırma

```bash
# iOS
npm run ios

# Android
npm run android

# Metro bundler'ı başlatın
npm start
```

## 🏗️ Proje Yapısı

```
MultitoolApp/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── calculator/     # Calculator-specific components
│   │   ├── converter/      # Converter-specific components
│   │   └── common/         # Shared components
│   ├── screens/            # Screen components
│   ├── context/            # React Context (Theme)
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── android/                # Android native files
├── ios/                    # iOS native files
└── App.tsx                 # App entry point
```

## 🛠️ Teknolojiler

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Context API** - State management
- **AsyncStorage** - Persistent storage
- **React Native Vector Icons** - Icon library

## 📋 TODO / Roadmap

Detaylı roadmap için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

- [x] Temel hesap makinesi
- [x] Birim çevirici (uzunluk, ağırlık, hacim, sıcaklık)
- [x] Tema sistemi (dark/light)
- [ ] Geçmiş kayıtları
- [ ] Favori dönüşümler
- [ ] Ek birim kategorileri
- [ ] Widget desteği
- [ ] Haptic feedback

## 🤝 Katkıda Bulunma

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

## 🙏 Teşekkürler

- React Native topluluğu
- Tüm açık kaynak katkıda bulunanlar

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

