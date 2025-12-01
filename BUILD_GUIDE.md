# 🏗️ MultitoolApp - Build ve Deployment Guide

Bu kılavuz, MultitoolApp uygulamasını geliştirme, test etme ve yayınlama süreçlerini detaylı olarak açıklar.

## 📋 İçindekiler

1. [Geliştirme Ortamı Kurulumu](#geliştirme-ortamı-kurulumu)
2. [Projeyi Çalıştırma](#projeyi-çalıştırma)
3. [Build Alma](#build-alma)
4. [Testing](#testing)
5. [Deployment](#deployment)

---

## 🛠️ Geliştirme Ortamı Kurulumu

### Gereksinimler

- **Node.js**: v20 veya üzeri
- **npm** veya **yarn**
- **Watchman** (macOS için önerilir)
- **Xcode** 14+ (iOS için)
- **Android Studio** (Android için)
- **CocoaPods** (iOS için)
- **JDK** 17 (Android için)

### macOS Kurulumu

```bash
# Homebrew ile gerekli araçları yükle
brew install node
brew install watchman

# CocoaPods yükle
sudo gem install cocoapods

# React Native CLI yükle
npm install -g react-native-cli
```

### Proje Kurulumu

```bash
# 1. Projeyi klonla
git clone https://github.com/bayraktarulku/MultitoolApp.git
cd MultitoolApp

# 2. Bağımlılıkları yükle
npm install

# 3. iOS bağımlıklarını yükle (sadece macOS)
cd ios && pod install && cd ..
```

---

## 🚀 Projeyi Çalıştırma

### Metro Bundler'ı Başlatma

```bash
# Terminal 1: Metro bundler
npm start

# Veya cache temizleyerek
npm start -- --reset-cache
```

### iOS Çalıştırma

```bash
# Varsayılan simülatörde
npm run ios

# Belirli bir cihazda
npm run ios -- --simulator="iPhone 15 Pro"

# Fiziksel cihazda (scheme gerekebilir)
npm run ios -- --device
```

### Android Çalıştırma

```bash
# Emülatör veya bağlı cihazda
npm run android

# Belirli bir variant için
npm run android -- --variant=release
```

### Sorun Giderme

```bash
# iOS için clean build
cd ios
xcodebuild clean
pod deintegrate
pod install
cd ..

# Android için clean build
cd android
./gradlew clean
cd ..

# Node modules'u temizle
rm -rf node_modules
npm install

# Metro cache temizle
npm start -- --reset-cache
```

---

## 📦 Build Alma

### iOS Release Build

#### Xcode ile

1. Xcode'da `ios/MultitoolApp.xcworkspace` dosyasını aç
2. Scheme'i **Release** olarak değiştir
3. Hedef cihazı veya "Any iOS Device" seç
4. **Product > Archive** seçeneğini tıkla
5. Organizer'da archive'ı seç ve **Distribute App** tıkla

#### Komut Satırı ile

```bash
# App Store için
cd ios
xcodebuild -workspace MultitoolApp.xcworkspace \
  -scheme MultitoolApp \
  -sdk iphoneos \
  -configuration Release \
  archive -archivePath ./build/MultitoolApp.xcarchive

xcodebuild -exportArchive \
  -archivePath ./build/MultitoolApp.xcarchive \
  -exportOptionsPlist exportOptions.plist \
  -exportPath ./build
```

### Android Release Build

#### AAB (App Bundle) Oluşturma

```bash
cd android

# Release AAB oluştur
./gradlew bundleRelease

# Çıktı: android/app/build/outputs/bundle/release/app-release.aab
```

#### APK Oluşturma

```bash
cd android

# Release APK oluştur
./gradlew assembleRelease

# Çıktı: android/app/build/outputs/apk/release/app-release.apk
```

#### Signing Ayarları

1. Keystore oluştur:

```bash
keytool -genkeypair -v \
  -storetype PKCS12 \
  -keystore multitool-release-key.keystore \
  -alias multitool-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

2. `android/gradle.properties` dosyasına ekle:

```properties
MYAPP_RELEASE_STORE_FILE=multitool-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=multitool-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

3. `android/app/build.gradle` dosyasında signing config'i ayarla:

```gradle
android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

---

## 🧪 Testing

### Unit Tests

```bash
# Tüm testleri çalıştır
npm test

# Watch mode
npm test -- --watch

# Coverage raporu
npm test -- --coverage
```

### Type Checking

```bash
# TypeScript kontrolü
npx tsc --noEmit
```

### Linting

```bash
# ESLint
npm run lint

# Düzeltmeleri otomatik uygula
npm run lint -- --fix
```

---

## 🚢 Deployment

### iOS - App Store

#### 1. App Store Connect Hazırlığı

1. [App Store Connect](https://appstoreconnect.apple.com)'e giriş yap
2. Yeni app oluştur
3. Bundle ID'yi ayarla: `com.bayraktarulku.MultitoolApp`
4. App bilgilerini doldur

#### 2. Archive ve Upload

```bash
# Xcode ile archive al (yukarıdaki adımları takip et)
# Veya Fastlane kullan:

# Fastlane kurulumu
cd ios
bundle install
fastlane init

# Upload to TestFlight
fastlane beta

# Upload to App Store
fastlane release
```

#### 3. App Review İçin Hazırlık

- [ ] Ekran görüntüleri yükle
- [ ] App açıklamasını yaz
- [ ] Anahtar kelimeleri belirle
- [ ] Gizlilik politikasını yükle
- [ ] Test kullanıcı bilgileri sağla
- [ ] Version notlarını yaz

### Android - Google Play Store

#### 1. Google Play Console Hazırlığı

1. [Google Play Console](https://play.google.com/console)'a giriş yap
2. Yeni uygulama oluştur
3. Store listing'i doldur

#### 2. AAB Upload

```bash
# Internal testing track'e yükle
cd android
./gradlew bundleRelease

# Google Play Console'dan manuel yükleme
# veya Google Play Console Upload API kullan
```

#### 3. Release Notları

```bash
# fastlane/metadata/android/tr-TR/changelogs/1.txt
İlk sürüm! 🎉
- Modern hesap makinesi
- Birim çevirici
- Karanlık mod desteği
```

#### 4. Store Listesi Gereksinimleri

- [ ] 512x512 app icon
- [ ] 1024x500 feature graphic
- [ ] Minimum 2 ekran görüntüsü
- [ ] Kısa ve uzun açıklama
- [ ] Kategori seçimi
- [ ] İçerik derecelendirmesi

---

## 📊 Version Management

### Versiyonlama Stratejisi

Semantic Versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes
- **MINOR**: Yeni özellikler (backwards compatible)
- **PATCH**: Bug fixes

### Version Güncelleme

#### iOS (ios/MultitoolApp/Info.plist)

```xml
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
<key>CFBundleVersion</key>
<string>1</string>
```

#### Android (android/app/build.gradle)

```gradle
android {
    defaultConfig {
        versionCode 1
        versionName "1.0.0"
    }
}
```

#### package.json

```json
{
  "version": "1.0.0"
}
```

### Automated Versioning

```bash
# npm version kullanarak
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Version güncelleme scripti
npm run bump:version
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Örneği

```yaml
# .github/workflows/build.yml
name: Build and Test

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Install pods
        run: cd ios && pod install
      - name: Build
        run: npm run ios -- --configuration Release

  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - name: Setup JDK
        uses: actions/setup-java@v3
        with:
          distribution: 'zulu'
          java-version: '17'
      - name: Install dependencies
        run: npm ci
      - name: Build APK
        run: cd android && ./gradlew assembleRelease
      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: app-release
          path: android/app/build/outputs/apk/release/app-release.apk
```

---

## 📱 Beta Testing

### TestFlight (iOS)

```bash
# Archive ve TestFlight'a yükle
fastlane beta

# Veya Xcode'dan:
# Product > Archive > Distribute App > TestFlight
```

### Google Play Internal Testing (Android)

1. Google Play Console'a giriş yap
2. Release > Testing > Internal testing
3. Release oluştur
4. AAB dosyasını yükle
5. Test kullanıcıları davet et

---

## 🐛 Debug Builds

### iOS Debug

```bash
# Debug modda çalıştır
npm run ios

# Logs
npx react-native log-ios
```

### Android Debug

```bash
# Debug modda çalıştır
npm run android

# Logs
npx react-native log-android

# ADB logs
adb logcat
```

---

## 📚 Yararlı Komutlar

```bash
# Tüm cache'i temizle
npm start -- --reset-cache
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/metro-*
watchman watch-del-all

# iOS simulators'ı listele
xcrun simctl list devices

# Android devices'ları listele
adb devices

# React Native info
npx react-native info

# Bundle analizi
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file index.js \
  --bundle-output android/main.bundle.js \
  --assets-dest android/

# iOS bundle size analizi
cd ios
xcodebuild -workspace MultitoolApp.xcworkspace \
  -scheme MultitoolApp \
  -configuration Release \
  -showBuildSettings | grep PRODUCT_BUNDLE_IDENTIFIER
```

---

## 🔐 Güvenlik

### Sensitive Data

- **ASLA** keystore şifrelerini commit etme
- **ASLA** API key'leri kodda hardcode etme
- `.gitignore` dosyasını kontrol et:

```gitignore
# Android
*.keystore
!debug.keystore
gradle.properties
local.properties

# iOS
*.mobileprovision
*.p12
Pods/

# Environment
.env
.env.local
.env.production
```

---

## 📞 Yardım ve Destek

### Sorun mu yaşıyorsunuz?

1. [GitHub Issues](https://github.com/bayraktarulku/MultitoolApp/issues)
2. [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
3. [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

### Faydalı Linkler

- [React Native Documentation](https://reactnative.dev)
- [React Navigation Docs](https://reactnavigation.org)
- [iOS Development Guide](https://developer.apple.com)
- [Android Development Guide](https://developer.android.com)

---

**Son Güncelleme:** Aralık 2025
**Versiyon:** 1.0.0

