# 📱 Play Store & App Store Publishing Guide

This guide covers everything you need to publish MultiTool on the Google Play Store and Apple App Store.

---

## 📋 Table of Contents

1. [Pre-Release Checklist](#pre-release-checklist)
2. [Android (Google Play Store)](#android-google-play-store)
3. [iOS (Apple App Store)](#ios-apple-app-store)
4. [App Store Listing Content](#app-store-listing-content)
5. [Build Commands](#build-commands)
6. [Privacy Policy](#privacy-policy)

---

## ✅ Pre-Release Checklist

Before submitting to any app store, ensure:

- [ ] All features are working correctly
- [ ] No crashes or major bugs
- [ ] App icon is set (all required sizes)
- [ ] Splash screen is configured
- [ ] Version number is correct
- [ ] All placeholder text is replaced
- [ ] Privacy policy is published online
- [ ] Terms of service (if applicable)
- [ ] Test on multiple devices/simulators
- [ ] Performance is acceptable
- [ ] Memory usage is optimized
- [ ] All permissions are necessary and explained

---

## 🤖 Android (Google Play Store)

### Prerequisites
- Google Play Developer Account ($25 one-time fee)
- Signed APK or AAB (Android App Bundle)
- App assets (icon, screenshots, feature graphic)
- Privacy policy URL

### Signing the App

1. **Generate a signing key**
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore multitool-release.keystore -alias multitool -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Configure gradle.properties**
   ```properties
   MULTITOOL_UPLOAD_STORE_FILE=multitool-release.keystore
   MULTITOOL_UPLOAD_KEY_ALIAS=multitool
   MULTITOOL_UPLOAD_STORE_PASSWORD=*****
   MULTITOOL_UPLOAD_KEY_PASSWORD=*****
   ```

3. **Update android/app/build.gradle**
   ```gradle
   signingConfigs {
       release {
           storeFile file(MULTITOOL_UPLOAD_STORE_FILE)
           storePassword MULTITOOL_UPLOAD_STORE_PASSWORD
           keyAlias MULTITOOL_UPLOAD_KEY_ALIAS
           keyPassword MULTITOOL_UPLOAD_KEY_PASSWORD
       }
   }
   buildTypes {
       release {
           signingConfig signingConfigs.release
       }
   }
   ```

### Build Commands

```bash
# Generate Release APK
cd android && ./gradlew assembleRelease

# Generate Release AAB (Recommended for Play Store)
cd android && ./gradlew bundleRelease
```

Output locations:
- APK: `android/app/build/outputs/apk/release/app-release.apk`
- AAB: `android/app/build/outputs/bundle/release/app-release.aab`

### Screenshot Requirements

| Type | Dimensions | Format |
|------|------------|--------|
| Phone | 320-3840px (min 2 required) | JPEG or PNG |
| 7" Tablet | 320-3840px | JPEG or PNG |
| 10" Tablet | 320-3840px | JPEG or PNG |
| TV | 1280x720 or 1920x1080 | JPEG or PNG |
| Wear OS | 384x384 | JPEG or PNG |

### Feature Graphic
- **Size**: 1024x500px
- **Format**: JPEG or PNG (24-bit, no alpha)

### App Icon
- **Size**: 512x512px
- **Format**: PNG (32-bit with alpha)

---

## 🍎 iOS (Apple App Store)

### Prerequisites
- Apple Developer Account ($99/year)
- Mac with Xcode installed
- App Store Connect account
- App assets (icon, screenshots)
- Privacy policy URL

### Build Commands

```bash
# Install CocoaPods dependencies
cd ios && pod install && cd ..

# Open in Xcode
open ios/MultiTool.xcworkspace

# Archive for distribution (from Xcode)
# Product > Archive
```

### Using Xcode Command Line

```bash
# Build for release
xcodebuild -workspace ios/MultiTool.xcworkspace \
  -scheme MultiTool \
  -configuration Release \
  -archivePath ./build/MultiTool.xcarchive \
  archive

# Export IPA
xcodebuild -exportArchive \
  -archivePath ./build/MultiTool.xcarchive \
  -exportPath ./build \
  -exportOptionsPlist ios/ExportOptions.plist
```

### Screenshot Requirements

| Device | Dimensions | Quantity |
|--------|------------|----------|
| iPhone 6.9" | 1320x2868 or 1290x2796 | 3 (min) |
| iPhone 6.5" | 1242x2688 or 1284x2778 | 3 (min) |
| iPhone 5.5" | 1242x2208 | 3 (min) |
| iPad Pro 12.9" | 2048x2732 | Optional |
| iPad Pro 11" | 1668x2388 | Optional |

### App Icon
- Multiple sizes required (managed by Xcode asset catalog)
- Base size: 1024x1024px
- No alpha channel or transparency

---

## 📝 App Store Listing Content

### Short Description (80 characters max)
```
All-in-one Calculator, Unit Converter & QR Code tool for your daily needs.
```

### Full Description
```
📱 MultiTool - Your Essential Utility App

MultiTool is a beautifully designed utility app that combines three essential tools in one convenient package:

🧮 CALCULATOR
• Perform basic arithmetic operations (+, -, ×, ÷)
• Calculate percentages easily
• Toggle positive/negative values
• Clean, intuitive interface
• Large display for easy reading

🔄 UNIT CONVERTER
Convert between 8+ categories including:
• Length (mm, cm, m, km, inch, foot, yard, mile)
• Weight (mg, g, kg, ton, oz, lb)
• Temperature (°C, °F, K)
• Area (mm², cm², m², km², acre, hectare)
• Volume (ml, L, m³, gallon, cup)
• Speed (m/s, km/h, mph, knot)
• Time (seconds to years)
• Data (bits to terabytes)

Real-time conversion as you type!

📷 QR CODE SCANNER & GENERATOR
• Generate QR codes from text, URLs, emails, or phone numbers
• Scan existing QR codes
• Adjustable QR code size
• Share your QR codes instantly
• View scan history

🎨 BEAUTIFUL DESIGN
• Modern, clean interface
• Dark and Light theme support
• Follows system theme preference
• Smooth animations

🔒 PRIVACY FOCUSED
• No account required
• No ads
• Your data stays on your device
• Minimal permissions required

Download MultiTool today and simplify your daily calculations and conversions!
```

### Keywords
```
calculator, unit converter, qr code, qr scanner, conversion, math, utilities, tools, temperature, length, weight, measurement, dark mode
```

### Categories
- **Primary**: Utilities
- **Secondary**: Productivity

---

## 🔐 Privacy Policy

A privacy policy is REQUIRED for both app stores. Create one that includes:

### Required Sections

1. **Information Collection**
   - What data is collected (minimal: theme preference, QR history)
   - How data is stored (locally on device)

2. **Data Usage**
   - Data is used only to improve app functionality
   - No data is shared with third parties

3. **Permissions**
   - Camera: QR code scanning
   - Storage: Save QR codes (optional)

4. **Data Security**
   - Data stored locally using secure storage

5. **Children's Privacy**
   - App does not collect personal information from children

6. **Contact Information**
   - Email for privacy concerns

### Sample Privacy Policy Template

```markdown
# Privacy Policy for MultiTool

Last updated: [Date]

## Overview
MultiTool is committed to protecting your privacy. This app collects minimal data necessary for functionality.

## Data Collection
- Theme preference (stored locally)
- QR code scan history (stored locally, optional)

## Data Usage
All data is stored locally on your device and is never transmitted to external servers.

## Permissions
- Camera: Required for QR code scanning
- Storage: Optional, for saving QR codes to gallery

## Security
We use AsyncStorage for secure local data storage.

## Contact
For privacy concerns, contact: your@email.com
```

Host this privacy policy at a public URL (e.g., GitHub Pages, your website).

---

## 🔧 Version Management

### Updating Version Numbers

**package.json**
```json
{
  "version": "1.0.0"
}
```

**Android (android/app/build.gradle)**
```gradle
versionCode 1
versionName "1.0.0"
```

**iOS (Update in Xcode)**
- MARKETING_VERSION (e.g., 1.0.0)
- CURRENT_PROJECT_VERSION (e.g., 1)

---

## 📊 Post-Launch Checklist

- [ ] Monitor crash reports
- [ ] Respond to user reviews
- [ ] Track download metrics
- [ ] Plan next update based on feedback
- [ ] Keep dependencies updated
- [ ] Test on new OS versions

---

## 🆘 Common Issues

### Android
- **APK not installing**: Check signing configuration
- **Crash on launch**: Check ProGuard rules
- **Large APK size**: Enable APK splitting

### iOS
- **Build fails**: Update CocoaPods
- **Rejection**: Review guidelines carefully
- **Crash**: Check device logs in Xcode

---

## 📚 Resources

- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Store Connect Help](https://developer.apple.com/app-store-connect/)
- [React Native Publishing Guide](https://reactnative.dev/docs/publishing-to-app-store)
- [Android App Signing](https://developer.android.com/studio/publish/app-signing)
- [iOS Code Signing](https://developer.apple.com/support/code-signing/)

---

<p align="center">
  <em>Good luck with your app launch! 🚀</em>
</p>
