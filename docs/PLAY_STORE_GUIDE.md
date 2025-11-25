# Publishing to Google Play Store

This guide provides step-by-step instructions for publishing MultiTool App to the Google Play Store.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Generating Signing Key](#generating-signing-key)
3. [Configuring Gradle for Signing](#configuring-gradle-for-signing)
4. [Building Release APK/AAB](#building-release-apkaab)
5. [Creating Google Play Developer Account](#creating-google-play-developer-account)
6. [Creating App Listing](#creating-app-listing)
7. [Uploading to Play Store](#uploading-to-play-store)
8. [Screenshots Requirements](#screenshots-requirements)
9. [App Description Templates](#app-description-templates)
10. [Privacy Policy](#privacy-policy)

---

## Prerequisites

- [ ] Android Studio installed
- [ ] JDK 11+ installed
- [ ] Google Play Developer account ($25 one-time fee)
- [ ] App icons in all required sizes
- [ ] Screenshots for different device sizes
- [ ] Privacy policy URL

---

## Generating Signing Key

The signing key is required to sign your app for release. **Keep it safe and backed up!**

### Using keytool (Recommended)

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore multitool-release.keystore -alias multitool -keyalg RSA -keysize 2048 -validity 10000
```

You'll be prompted for:
- **Keystore password**: Choose a strong password
- **Key password**: Can be the same as keystore password
- **Your name**: Full name
- **Organizational unit**: Development team name
- **Organization**: Company name
- **City/Locality**: Your city
- **State/Province**: Your state/province
- **Country code**: Two-letter code (e.g., US, TR)

### Store the keystore securely

```bash
# Move to a safe location (NOT in version control)
mv multitool-release.keystore ~/keystores/

# Create a backup
cp ~/keystores/multitool-release.keystore ~/keystores/backup/
```

⚠️ **IMPORTANT**: 
- Never commit the keystore to version control
- Back up the keystore in multiple secure locations
- Remember or securely store the passwords
- Losing the keystore means you can't update your app

---

## Configuring Gradle for Signing

### 1. Create signing configuration file

Create `android/keystore.properties`:

```properties
storeFile=/path/to/multitool-release.keystore
storePassword=your_store_password
keyAlias=multitool
keyPassword=your_key_password
```

⚠️ Add to `.gitignore`:
```
# Signing
android/keystore.properties
*.keystore
```

### 2. Update build.gradle

Edit `android/app/build.gradle`:

```gradle
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

---

## Building Release APK/AAB

### Build AAB (Recommended for Play Store)

```bash
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Build APK (For testing or alternative distribution)

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

### Testing the release build

```bash
# Install release APK on device
adb install app/build/outputs/apk/release/app-release.apk
```

---

## Creating Google Play Developer Account

1. Go to [Google Play Console](https://play.google.com/console)
2. Sign in with Google account
3. Pay $25 one-time registration fee
4. Complete account details
5. Accept Developer Distribution Agreement

---

## Creating App Listing

### 1. Create New App

1. Go to Play Console Dashboard
2. Click "Create app"
3. Fill in:
   - App name: **MultiTool**
   - Default language: **English (US)**
   - App or game: **App**
   - Free or paid: **Free**

### 2. Store Listing

#### Graphics

| Asset | Dimensions | Requirements |
|-------|------------|--------------|
| App icon | 512 x 512 px | PNG, 32-bit, no alpha |
| Feature graphic | 1024 x 500 px | PNG or JPEG |
| Phone screenshots | 16:9 or 9:16 | 2-8 screenshots |
| Tablet screenshots | 16:9 or 9:16 | Optional |

#### Contact Details
- Email: support@multitool.app (or your email)
- Website: https://github.com/bayraktarulku/multitool-app

### 3. Content Rating

Complete the content rating questionnaire:
- App doesn't contain violence
- App doesn't contain sexual content
- App doesn't contain gambling
- App doesn't collect personal data

Expected rating: **Everyone**

### 4. Target Audience

- Target age: All ages (13+)
- App not designed for children

---

## Screenshots Requirements

### Phone Screenshots (Required)

| Type | Count | Dimensions |
|------|-------|------------|
| Portrait | 2-8 | 1080 x 1920 px min |
| Landscape | Optional | 1920 x 1080 px min |

### Recommended Screenshots

1. **Calculator** - Main calculator screen with example calculation
2. **Calculator Dark** - Calculator in dark mode
3. **Converter** - Unit converter with conversion example
4. **Converter Categories** - Showing all categories
5. **QR Generator** - QR code being generated
6. **QR Scanner** - Scanner screen

### Screenshot Tips

- Show key features
- Use real content
- Include device frames (optional)
- Maintain consistent style

---

## App Description Templates

### Short Description (80 characters max)

```
All-in-one utility: Calculator, Unit Converter & QR Code Scanner/Generator
```

### Full Description

```
🛠️ MultiTool - Your Essential Utility Companion

MultiTool is a beautifully designed all-in-one utility app that combines three essential tools into one convenient package.

🔢 CALCULATOR
• Basic arithmetic operations (+, -, ×, ÷)
• Percentage calculations
• Sign toggle and memory functions
• Clean, responsive display
• Works offline

🔄 UNIT CONVERTER
• 7 categories: Length, Weight, Temperature, Volume, Area, Speed, Time
• Real-time conversion as you type
• Swap units with one tap
• Accurate, reliable formulas

📱 QR CODE SCANNER & GENERATOR
• Scan QR codes using your camera
• Generate QR codes from text, URLs, emails, phone numbers
• Copy and share results easily
• Auto-detect content type

✨ FEATURES
• Light & Dark themes
• Clean, modern interface
• Works completely offline
• No ads, no tracking
• Fast and lightweight

MultiTool is perfect for students, professionals, and anyone who needs quick calculations, unit conversions, or QR code functionality.

📧 Questions or feedback? We'd love to hear from you!

🔓 Open Source: https://github.com/bayraktarulku/multitool-app
```

---

## Privacy Policy

Since the app doesn't collect user data, you can use this template. Host it on GitHub Pages or your website.

### Privacy Policy Template

```markdown
# Privacy Policy for MultiTool

Last updated: [DATE]

## Introduction

MultiTool ("we", "our", or "us") operates the MultiTool mobile application (the "App").

## Information Collection

MultiTool does not collect, store, or transmit any personal information. The App works entirely offline and locally on your device.

### Data We Do NOT Collect
- Personal identification information
- Location data
- Device identifiers
- Usage analytics
- Crash reports

### Camera Permission

The App requests camera permission solely for QR code scanning. Camera access is used only when you actively use the scanner feature. No images or video are stored or transmitted.

## Third-Party Services

The App does not use any third-party services that collect data.

## Data Security

Since we do not collect any data, there is no data to secure or potentially breach.

## Children's Privacy

The App does not collect personal information from anyone, including children under 13.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

## Contact Us

If you have any questions about this Privacy Policy, please contact us:
- Email: [YOUR EMAIL]
- GitHub: https://github.com/bayraktarulku/multitool-app

## Consent

By using our App, you consent to our Privacy Policy.
```

---

## Uploading to Play Store

### 1. Production Release

1. Go to Release > Production
2. Click "Create new release"
3. Upload your AAB file
4. Add release notes:
   ```
   What's new in v0.1.0:
   • Calculator with basic operations
   • Unit converter with 7 categories
   • QR code scanner and generator
   • Light and dark theme support
   ```
5. Review and start rollout

### 2. Testing Tracks

Consider using testing tracks before production:
- **Internal testing**: Up to 100 testers, instant availability
- **Closed testing**: Limited users, requires opt-in
- **Open testing**: Anyone can join

### 3. Review Process

- Google reviews apps before publishing
- Typical review time: 2-7 days
- May be longer for new developers

---

## Checklist Before Publishing

- [ ] App tested on multiple devices
- [ ] All features working correctly
- [ ] No crashes or ANRs
- [ ] Performance is acceptable
- [ ] App icons in all sizes
- [ ] Screenshots prepared
- [ ] Description written
- [ ] Privacy policy hosted
- [ ] Content rating completed
- [ ] Signing key backed up securely

---

## After Publishing

1. **Monitor reviews**: Respond to user feedback
2. **Track metrics**: Installs, ratings, crashes
3. **Plan updates**: Based on user feedback
4. **Maintain app**: Keep dependencies updated

---

## Resources

- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Quality Guidelines](https://developer.android.com/quality)
- [Material Design Guidelines](https://material.io/design)
- [React Native Deployment](https://reactnative.dev/docs/signed-apk-android)
