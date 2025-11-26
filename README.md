# 🛠️ MultiTool

<p align="center">
  <strong>All-in-one utility app with Calculator, Unit Converter, and QR Code Scanner/Generator</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue" alt="Platform">
  <img src="https://img.shields.io/badge/react--native-0.72.17-green" alt="React Native">
  <img src="https://img.shields.io/badge/typescript-4.8.4-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</p>

---

## 📱 Features

### 🧮 Calculator
- Basic arithmetic operations: +, -, ×, ÷
- Percentage calculation
- Clear (C) and All Clear (AC) buttons
- Decimal point support
- Toggle positive/negative (±)
- Large display with expression history
- Color-coded buttons for easy navigation

### 🔄 Unit Converter
8+ conversion categories with real-time conversion:
- **Length**: mm, cm, m, km, inch, foot, yard, mile
- **Weight/Mass**: mg, g, kg, ton, oz, lb
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Area**: mm², cm², m², km², acre, hectare
- **Volume**: ml, L, m³, gallon, cup, fl oz
- **Speed**: m/s, km/h, mph, knot
- **Time**: second, minute, hour, day, week, month, year
- **Data**: bit, byte, KB, MB, GB, TB

### 📷 QR Code Scanner & Generator
- **Scanner Mode**: Scan QR codes with camera (simulated in dev)
- **Generator Mode**: Create QR codes from text, URLs, emails, phone numbers
- Adjustable QR code size
- Share and save functionality
- Scan history storage (last 10 items)

### 🎨 Theme System
- Dark and Light mode support
- Theme preference persistence
- Smooth transitions
- System theme detection

---

## 📸 Screenshots

<p align="center">
  <em>Screenshots coming soon</em>
</p>

| Calculator | Unit Converter | QR Code |
|:----------:|:--------------:|:-------:|
| ![Calculator](docs/screenshots/calculator.png) | ![Converter](docs/screenshots/converter.png) | ![QR Code](docs/screenshots/qrcode.png) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bayraktarulku/multitool-app.git
   cd multitool-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

**iOS**
```bash
npx react-native run-ios
# or
npm run ios
```

**Android**
```bash
npx react-native run-android
# or
npm run android
```

**Start Metro Bundler** (if not started automatically)
```bash
npm start
```

---

## 📁 Project Structure

```
src/
├── screens/
│   ├── CalculatorScreen.tsx      # Calculator feature screen
│   ├── UnitConverterScreen.tsx   # Unit converter feature screen
│   └── QRCodeScreen.tsx          # QR code scanner/generator screen
├── components/
│   ├── CalculatorButton.tsx      # Reusable calculator button
│   ├── UnitConverterCard.tsx     # Unit conversion card component
│   ├── QRScanner.tsx             # QR code scanner component
│   └── QRGenerator.tsx           # QR code generator component
├── context/
│   └── ThemeContext.tsx          # Theme management context
├── types/
│   └── index.ts                  # TypeScript type definitions
├── utils/
│   ├── calculatorLogic.ts        # Calculator operations logic
│   ├── unitConversions.ts        # Unit conversion formulas
│   └── constants.ts              # App constants and configurations
├── navigation/
│   └── AppNavigator.tsx          # Bottom tab navigation setup
└── App.tsx                       # Main app component
```

---

## 📦 Dependencies

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| @react-navigation/native | ^6.1.9 | Navigation container |
| @react-navigation/bottom-tabs | ^6.5.11 | Tab navigation |
| react-native-screens | ^3.29.0 | Native navigation performance |
| react-native-safe-area-context | ^4.8.2 | Safe area handling |
| react-native-vector-icons | ^10.0.3 | Icon library |
| react-native-qrcode-svg | ^6.2.0 | QR code generation |
| react-native-svg | ^14.0.0 | SVG rendering |
| @react-native-async-storage/async-storage | ^1.21.0 | Local data persistence |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| typescript | 4.8.4 | TypeScript support |
| eslint | ^8.19.0 | Code linting |
| prettier | ^2.4.1 | Code formatting |
| jest | ^29.2.1 | Testing framework |

---

## 🎯 Usage Guide

### Calculator
1. Tap number buttons to input values
2. Use operation buttons (+, -, ×, ÷) for calculations
3. Press **=** to see the result
4. Use **C** to clear current input, **AC** to reset everything
5. **±** toggles between positive and negative
6. **%** calculates percentage

### Unit Converter
1. Select a category (Length, Weight, Temperature, etc.)
2. Enter a value in the top field
3. Tap the unit symbol to change units
4. Result updates in real-time
5. Use the swap button to reverse conversion direction

### QR Code Scanner & Generator
**Generator Mode:**
1. Enter text, URL, email, or phone number
2. QR code generates automatically
3. Adjust size with +/- buttons
4. Share or save the QR code

**Scanner Mode:**
1. Point camera at a QR code
2. Scanned data appears on screen
3. Copy to clipboard or view in history

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Type check
npm run typecheck
```

---

## 🔧 Troubleshooting

### Common Issues

**Metro bundler not starting**
```bash
npx react-native start --reset-cache
```

**iOS build fails**
```bash
cd ios && pod install --repo-update && cd ..
```

**Android build fails**
```bash
cd android && ./gradlew clean && cd ..
```

**Type errors after installing packages**
```bash
npm run typecheck
```

### Environment Issues

- Ensure Node.js >= 16 is installed
- Verify React Native CLI: `npx react-native --version`
- Check Android SDK setup: `sdkmanager --list`
- Verify Xcode tools: `xcode-select --install`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📮 Contact

**Ülkü Bayraktar** - [@bayraktarulku](https://github.com/bayraktarulku)

Project Link: [https://github.com/bayraktarulku/multitool-app](https://github.com/bayraktarulku/multitool-app)

---

<p align="center">
  Made with ❤️ using React Native
</p>
