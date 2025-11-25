# 🛠️ MultiTool App

A production-ready React Native utility application featuring a Calculator, Unit Converter, and QR Code Scanner/Generator.

[![React Native](https://img.shields.io/badge/React%20Native-0.73.2-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🔢 Calculator
- Basic arithmetic operations (+, -, ×, ÷)
- Percentage calculations
- Sign toggle (+/-)
- Backspace/Clear functionality
- Large number formatting
- Responsive display with auto-sizing text

### 🔄 Unit Converter
- **7 Categories**: Length, Weight, Temperature, Volume, Area, Speed, Time
- Real-time conversion
- Swap units functionality
- Support for multiple unit systems (metric, imperial)
- Accurate conversion formulas

### 📱 QR Code Scanner/Generator
- **Scanner**: Camera-based QR code scanning
- **Generator**: Create QR codes from text, URLs, emails, phone numbers
- Auto-detection of content type
- Copy to clipboard
- Share functionality

### 🎨 Additional Features
- Light/Dark theme support
- Modern, clean UI design
- Responsive layout for all screen sizes
- Accessibility support (WCAG compliant)
- Offline-first approach

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **React Native CLI**
- **Android Studio** (for Android development)
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device (AVD)
- **Xcode** (for iOS development, macOS only)
  - iOS Simulator
  - CocoaPods

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bayraktarulku/multitool-app.git
   cd multitool-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

## 📱 Running the App

### Android

```bash
# Start Metro bundler
npm start

# In another terminal, run on Android
npm run android
```

### iOS (macOS only)

```bash
# Start Metro bundler
npm start

# In another terminal, run on iOS
npm run ios
```

## 📁 Project Structure

```
multitool-app/
├── src/
│   ├── components/           # Reusable components
│   │   ├── common/          # Layout components
│   │   └── ui/              # UI elements (Button, Card, Input)
│   ├── screens/             # Screen components
│   │   ├── Calculator/      # Calculator feature
│   │   ├── UnitConverter/   # Unit converter feature
│   │   └── QRCode/          # QR scanner/generator
│   ├── navigation/          # Navigation configuration
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── constants/           # App constants
│   ├── types/               # TypeScript type definitions
│   └── theme/               # Theme configuration
├── docs/                    # Documentation
├── assets/                  # Static assets
├── App.tsx                  # Main app component
├── index.js                 # Entry point
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🧪 Available Scripts

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run typecheck

# Build Android release APK
npm run build:android

# Build Android release AAB
npm run build:android:aab
```

## 🎨 Theming

The app supports both light and dark themes. Toggle between themes using the sun/moon icon in the header of each screen.

### Customizing Colors

Edit `src/theme/colors.ts` to customize the color palette:

```typescript
export const lightColors = {
  primary: '#6366F1',
  secondary: '#14B8A6',
  // ... more colors
};
```

## 🔧 Configuration

### Android Package Name
The package name is `com.bayraktarulku.multitool`. To change it:
1. Update `android/app/build.gradle`
2. Rename package folders in `android/app/src/main/java/`
3. Update `app.json`

### iOS Bundle Identifier
The bundle identifier is `com.bayraktarulku.multitool`. Update it in:
1. `ios/MultiTool.xcodeproj`
2. `app.json`

## 📸 Screenshots

<!-- Add screenshots here -->
| Calculator | Converter | QR Code |
|------------|-----------|---------|
| ![Calculator](docs/screenshots/calculator.png) | ![Converter](docs/screenshots/converter.png) | ![QR Code](docs/screenshots/qrcode.png) |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

See our [ROADMAP.md](ROADMAP.md) for planned features and milestones.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## 📧 Contact

Ülkü Bayraktar - [@bayraktarulku](https://github.com/bayraktarulku)

Project Link: [https://github.com/bayraktarulku/multitool-app](https://github.com/bayraktarulku/multitool-app)
