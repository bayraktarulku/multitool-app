# MultitoolApp - Quick Start Guide

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Install iOS Pods (macOS only)

```bash
cd ios && pod install && cd ..
```

### 3. Run the App

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

---

## Features Overview

### Calculator
- Basic operations: +, -, ×, ÷
- Percentage: %
- Sign toggle: ±
- Clear: C

### Unit Converter
- **Length**: m, km, cm, mile, ft, inch
- **Weight**: kg, g, ton, lb, oz
- **Volume**: L, mL, gallon, cup
- **Temperature**: °C, °F, K

### QR Code Generator
- Generate QR codes for URLs, text, contacts
- Quick templates: Web, Email, Phone, WhatsApp, WiFi
- Size options: 150px, 200px, 250px
- Share functionality

### Theme System
- Dark mode
- Light mode
- System preference

---

## Testing

```bash
# Type checking
npx tsc --noEmit

# Run tests
npm test
```

---

## Troubleshooting

**iOS build fails:**
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

**Metro bundler issues:**
```bash
npm start -- --reset-cache
```

**Clean build:**
```bash
# iOS
cd ios
xcodebuild clean
cd ..

# Android
cd android
./gradlew clean
cd ..
```

---

## Disclaimer

This application was developed with AI assistance. Thoroughly test before production use.


## ⚡ 5 Dakikada Başlat

### 1️⃣ Bağımlılıkları Yükle

```bash
cd /Users/ulkubayraktar/Desktop/bayraktarulku-github/MultitoolApp
npm install
```

### 2️⃣ iOS Pods Yükle (sadece macOS)

```bash
cd ios && pod install && cd ..
```

### 3️⃣ Uygulamayı Çalıştır

**iOS için:**
```bash
npm run ios
```

**Android için:**
```bash
npm run android
```

---

## 🎯 Ne Bekleyebilirsiniz?

### Ana Özellikler

#### 🧮 Hesap Makinesi
- Temel işlemler: +, -, ×, ÷
- Yüzde hesaplama: %
- İşaret değiştirme: ±
- Temizleme: C

#### 📏 Birim Çevirici
- **Uzunluk**: m, km, cm, mil, fit, inç...
- **Ağırlık**: kg, g, ton, lb, oz...
- **Hacim**: L, mL, galon, fincan...
- **Sıcaklık**: °C, °F, K

#### 🎨 Tema
- Karanlık mod 🌙
- Aydınlık mod ☀️
- Otomatik sistem teması

---

## 🧪 Test Et

### Hesap Makinesi Test
```
1. "7" → "5" → "+" → "3" → "=" 
   Sonuç: 78
   
2. "100" → "%" 
   Sonuç: 1
   
3. "5" → "±" 
   Sonuç: -5
```

### Birim Çevirici Test
```
1. Uzunluk kategorisini seç
2. 100 cm gir
3. Metre seç
   Sonuç: 1 m
   
4. Swap butonuna bas
   Sonuç: 1 m = 100 cm
```

### Tema Test
```
1. Ayarlar sekmesine git
2. Karanlık Mod toggle'ına bas
3. Tüm ekranları gez
   Sonuç: Tema tutarlı şekilde değişmeli
```

---

## 📱 Ekranlar

### 1. Calculator (Hesap Makinesi)
- Sol alttaki hesap makinesi ikonu
- Temel matematiksel işlemler
- Büyük display

### 2. Converter (Birim Çevirici)
- Ortadaki swap ikonu
- Üstte kategori seçici
- Alt alta iki input alanı
- Ortada swap butonu

### 3. Settings (Ayarlar)
- Sağ alttaki ayarlar ikonu
- Tema değiştirme toggle
- Uygulama bilgileri

---

## 🎨 UI Özellikleri

### Modern Tasarım
- ✨ Smooth animasyonlar
- 🎨 Gradient renk paleti
- 🌙 Dark mode desteği
- 📱 Responsive layout

### Renk Paleti

**Light Mode:**
- Primary: Indigo (#6366f1)
- Background: Açık gri (#f8f9fa)
- Text: Koyu gri (#1f2937)

**Dark Mode:**
- Primary: Açık Indigo (#818cf8)
- Background: Koyu (#111827)
- Text: Beyaz (#f9fafb)

---

## 🐛 Sorun Giderme

### Metro Bundler Başlamıyor?
```bash
npm start -- --reset-cache
```

### iOS Build Hatası?
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

### Android Build Hatası?
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Node Modules Sorunu?
```bash
rm -rf node_modules
npm install
```

---

## 📚 Daha Fazla Bilgi

### Detaylı Dokümantasyon
- 📖 **README_MULTITOOL.md** - Ana dokümantasyon
- 🗺️ **ROADMAP.md** - Gelecek planları
- 🏗️ **BUILD_GUIDE.md** - Build ve deployment
- 📁 **PROJECT_STRUCTURE.md** - Kod yapısı
- 🤝 **CONTRIBUTING.md** - Katkı rehberi

### Hızlı Linkler
- [React Native Docs](https://reactnative.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [React Navigation](https://reactnavigation.org)

---

## ✅ Checklist

Başlamadan önce:

- [ ] Node.js 20+ yüklü
- [ ] npm veya yarn yüklü
- [ ] iOS: Xcode 14+ yüklü (macOS)
- [ ] Android: Android Studio yüklü
- [ ] iOS: CocoaPods yüklü

Çalıştırdıktan sonra:

- [ ] Metro bundler başladı
- [ ] Uygulama açıldı
- [ ] 3 tab görünüyor
- [ ] Hesap makinesi çalışıyor
- [ ] Birim çevirici çalışıyor
- [ ] Tema değişimi çalışıyor

---

## 💡 İpuçları

1. **Metro Bundler'ı Açık Tutun**
   - Metro terminal'i kapatmayın
   - Hot reload çalışır durumda

2. **Geliştirme Menüsü**
   - iOS: Cmd + D
   - Android: Cmd + M (Mac) / Ctrl + M (Windows/Linux)

3. **Reload**
   - iOS: Cmd + R
   - Android: R + R (iki kez)

4. **Debug**
   - Chrome DevTools ile debug edebilirsiniz
   - React Native Debugger kullanabilirsiniz

---

## 🎯 Hızlı Değişiklikler

### Temayı Değiştir
`src/types/theme.ts` dosyasında renkleri düzenleyin:

```typescript
export const lightTheme: Theme = {
  colors: {
    primary: '#YOUR_COLOR', // Buradan değiştir
    // ...
  }
};
```

### Yeni Birim Ekle
`src/utils/unitConverter.ts` dosyasında units array'ine ekleyin:

```typescript
{
  id: 'your_unit',
  name: 'Birim Adı',
  symbol: 'simge',
  toBase: (v) => v * conversion_factor,
  fromBase: (v) => v / conversion_factor,
}
```

---

## 🎊 Tamamdır!

Artık MultitoolApp çalışıyor olmalı! 

### Keyifli Kodlamalar! 🚀

---

**Sorularınız mı var?**
- 📧 Email: support@multitoolapp.com
- 💬 GitHub Discussions
- 🐛 GitHub Issues

---

**Son Güncelleme:** Aralık 2025
**Versiyon:** 1.0.0

