# Modern Hello World Mobile App

Modern ve güzel tasarlanmış bir React Native mobil uygulaması.

## Özellikler

- ✨ Modern ve temiz tasarım
- 🎨 Gradient renkler
- 💫 Smooth animasyonlar
- 📱 iOS ve Android desteği
- 🔥 TypeScript desteği
- 🏗️ Modüler mimari

## Proje Yapısı

```
src/
├── components/         # Yeniden kullanılabilir componentler
│   ├── HelloWorld.tsx
│   ├── LinearGradient.tsx
│   └── index.ts
└── screens/           # Ekran componentleri
    └── HomeScreen.tsx
```

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

2. iOS için (sadece macOS):
```bash
cd ios && pod install && cd ..
npm run ios
```

3. Android için:
```bash
npm run android
```

## Geliştirme

Metro bundler'ı başlatmak için:
```bash
npm start
```

## Teknolojiler

- React Native 0.82.1
- TypeScript
- React Native Safe Area Context
- Animated API

## Lisans

MIT

