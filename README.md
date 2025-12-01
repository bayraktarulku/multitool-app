# MultitoolApp

[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/bayraktarulku/multitool-app)
[![React Native](https://img.shields.io/badge/React%20Native-0.82.1-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern and user-friendly multi-tool mobile application. Calculator, unit converter, and QR code generator - all in one app!

## Features

### Calculator
- Basic mathematical operations (+, -, ×, ÷)
- Percentage calculation (%)
- Sign toggle (±)
- Clear and backspace
- Large and readable display
- Modern button grid layout

### Unit Converter
- 4 Categories: Length, Weight, Volume, Temperature
- 28+ Units: meter, kilometer, pound, liter, celsius, and more
- Real-time conversion
- Category selector
- Unit swap feature
- Modal unit selection

### QR Code Generator
- Generate QR codes for any data
- 5 Quick templates (Web, Email, Phone, WhatsApp, WiFi)
- 3 Size options (150px, 200px, 250px)
- Share functionality
- Theme-aware QR colors

### Theme System
- Dark/Light mode
- Automatic system theme detection
- AsyncStorage theme preference persistence
- Smooth transitions
- Modern Indigo/Purple gradient color palette
- Consistent theme across all components

### Navigation
- Bottom Tab Navigation
- 4 main screens (Calculator, Converter, QR Code, Settings)
- Custom Ionicons
- Active/Inactive states
- Theme-aware navigation bar

## Screenshots

| Calculator | Converter | QR Code | Dark Mode |
|------------|-----------|---------|-----------|
| ![Calculator](https://via.placeholder.com/200x400/6366f1/ffffff?text=Calculator) | ![Converter](https://via.placeholder.com/200x400/6366f1/ffffff?text=Converter) | ![QR Code](https://via.placeholder.com/200x400/6366f1/ffffff?text=QR+Code) | ![Dark Mode](https://via.placeholder.com/200x400/1f2937/ffffff?text=Dark+Mode) |

## Getting Started

### Requirements

- Node.js >= 20
- React Native CLI
- Xcode 14+ (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

### Installation

```bash
# Clone the repository
git clone https://github.com/bayraktarulku/multitool-app.git
cd multitool-app

# Install dependencies
npm install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..
```

### Running

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Metro bundler
npm start
```

## Project Structure

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

## Tech Stack

- **React Native** 0.82.1 - Cross-platform framework
- **TypeScript** 5.8.3 - Type-safe JavaScript
- **React Navigation** 7 - Navigation library
- **Context API** - State management
- **AsyncStorage** - Persistent storage
- **react-native-vector-icons** - Icon library
- **react-native-qrcode-svg** - QR code generation
- **react-native-svg** - SVG support

## Feature Status

| Feature | Status | Version |
|---------|--------|----------|
| Calculator | Complete | v1.0.0 |
| Unit Converter | Complete | v1.0.0 |
| QR Code Generator | Complete | v1.1.0 |
| Theme System | Complete | v1.0.0 |
| Calculation History | Planned | v1.2.0 |
| QR Code Scanner | Planned | v1.2.0 |
| Widget Support | Planned | v1.2.0 |

## Roadmap

### v1.2.0 (Q1 2025)
- QR Code Scanner (with camera)
- Calculation history
- Favorite conversions
- Widget support
- Haptic feedback
- Additional unit categories

### v2.0.0 (Q3 2025)
- Multi-language support
- Cloud sync
- Premium features
- AI integration

See [ROADMAP.md](ROADMAP.md) for detailed roadmap.

## Testing

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

## Documentation

- [Quick Start Guide](QUICK_START.md) - Quick start guide
- [Build Guide](BUILD_GUIDE.md) - Build and deployment
- [Contributing Guide](CONTRIBUTING.md) - How to contribute
- [Project Structure](PROJECT_STRUCTURE.md) - Code structure
- [Feature: QR Code](FEATURE_QR_CODE.md) - QR feature details
- [Store Assets](STORE_ASSETS.md) - Store preparation
- [Release Notes](RELEASE_NOTES.md) - Version notes

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Developer

**Ulku Bayraktar**

- GitHub: [@bayraktarulku](https://github.com/bayraktarulku)
- Website: [multitoolapp.com](https://multitoolapp.com) (coming soon)

## Acknowledgments

- React Native team
- React Navigation team
- All open-source contributors

## Statistics

- **Total Lines of Code**: ~5,500+
- **Files**: 70+
- **Components**: 13
- **Screens**: 4
- **Documentation**: 15+ MD files

---

## Disclaimer

**IMPORTANT:** This application was developed with AI assistance and has been tested in a development environment. Before using this code in production:

1. Conduct thorough testing on real devices (iOS and Android)
2. Perform security audits
3. Review all code for your specific use case
4. Test all features extensively
5. Ensure compliance with app store guidelines

The developers assume no liability for any issues arising from the use of this code. Use at your own risk and always test thoroughly before deployment.

---

<p align="center">
  Made with support of AI technology by <a href="https://github.com/bayraktarulku">Ulku Bayraktar</a>
</p>

<p align="center">
  Star this project if you find it useful!
</p>

