# 🗺️ MultiTool Roadmap

This document outlines the development roadmap for the MultiTool app, including completed features, current work in progress, and future plans.

---

## ✅ Phase 1: Core Features (Completed)

### Calculator
- [x] Basic arithmetic operations (+, -, ×, ÷)
- [x] Percentage calculation
- [x] Clear (C) and All Clear (AC) functionality
- [x] Decimal point support
- [x] Toggle sign (±) functionality
- [x] Expression display
- [x] Theme-aware styling
- [x] Responsive button layout

### Unit Converter
- [x] Length conversions (mm, cm, m, km, inch, foot, yard, mile)
- [x] Weight/Mass conversions (mg, g, kg, ton, oz, lb)
- [x] Temperature conversions (Celsius, Fahrenheit, Kelvin)
- [x] Area conversions (mm², cm², m², km², acre, hectare)
- [x] Volume conversions (ml, L, m³, gallon, cup, fl oz)
- [x] Speed conversions (m/s, km/h, mph, knot)
- [x] Time conversions (second, minute, hour, day, week, month, year)
- [x] Data conversions (bit, byte, KB, MB, GB, TB)
- [x] Real-time conversion
- [x] Swap units functionality
- [x] Conversion formula display

### QR Code
- [x] QR Code Generator
- [x] Text/URL/Email/Phone presets
- [x] Adjustable QR code size
- [x] Share functionality
- [x] QR Code Scanner (simulated)
- [x] Scan history storage
- [x] Copy to clipboard

### App Infrastructure
- [x] React Native + TypeScript setup
- [x] Bottom tab navigation
- [x] Dark/Light theme support
- [x] Theme persistence with AsyncStorage
- [x] ESLint + Prettier configuration
- [x] Android configuration (minSdk 21, targetSdk 33)
- [x] iOS configuration (iOS 12.0+)
- [x] Accessibility labels

---

## 🚧 Phase 2: Enhanced Features (Upcoming)

### Calculator Enhancements
- [ ] Scientific calculator mode
  - [ ] Square root (√)
  - [ ] Power (x², xʸ)
  - [ ] Inverse (1/x)
  - [ ] Logarithm (log, ln)
  - [ ] Trigonometric functions (sin, cos, tan)
- [ ] Calculation history
- [ ] Haptic feedback on button press
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Copy/paste results

### Unit Converter Enhancements
- [ ] Currency converter
  - [ ] Real-time exchange rates API integration
  - [ ] Offline mode with cached rates
  - [ ] Favorite currencies
- [ ] Fuel efficiency conversions (mpg, L/100km)
- [ ] Pressure conversions (Pa, bar, psi, atm)
- [ ] Energy conversions (J, cal, kWh, BTU)
- [ ] Angle conversions (degree, radian, gradian)
- [ ] Conversion history
- [ ] Favorites/bookmarks for frequently used conversions

### QR Code Enhancements
- [ ] Full camera integration
  - [ ] react-native-camera implementation
  - [ ] Flashlight toggle (working)
  - [ ] Vibration on successful scan
- [ ] vCard/contact QR codes
- [ ] WiFi network QR codes
- [ ] Event (vEvent) QR codes
- [ ] Save QR code to gallery (native implementation)
- [ ] Batch QR code generation
- [ ] QR code styling (colors, logo embedding)

### New Tools
- [ ] **Tip Calculator**
  - [ ] Bill splitting
  - [ ] Custom tip percentages
  - [ ] Per-person calculation
- [ ] **Note Taking**
  - [ ] Quick notes
  - [ ] Checklist support
  - [ ] Categories/tags
- [ ] **Password Generator**
  - [ ] Customizable length
  - [ ] Include/exclude character types
  - [ ] Password strength indicator
  - [ ] Copy to clipboard

### UX Improvements
- [ ] Onboarding tutorial
- [ ] Settings screen
- [ ] Customizable quick actions
- [ ] Landscape mode support
- [ ] Tablet-optimized layouts

---

## 💡 Phase 3: Future Ideas

### Cloud & Sync
- [ ] User accounts (optional)
- [ ] Cloud sync for preferences
- [ ] Sync history across devices
- [ ] Backup and restore

### Platform Extensions
- [ ] Apple Watch app
  - [ ] Quick calculator
  - [ ] Unit conversions
- [ ] Wear OS app
  - [ ] Basic calculator
  - [ ] Quick conversions
- [ ] iOS Widget support
  - [ ] Calculator widget
  - [ ] Quick conversion widget
- [ ] Android Widget support
  - [ ] Calculator widget
  - [ ] Converter widget

### AI & Smart Features
- [ ] Natural language calculator
  - [ ] "What's 15% of 250?"
  - [ ] Voice input
- [ ] Smart unit detection
  - [ ] Auto-detect units from input
  - [ ] Suggest relevant conversions
- [ ] Expense tracking with receipt scanning

### Social Features
- [ ] Share calculations/conversions
- [ ] QR code templates sharing
- [ ] Community-created conversion presets

### Accessibility Enhancements
- [ ] VoiceOver/TalkBack optimization
- [ ] High contrast mode
- [ ] Font size adjustments
- [ ] Reduced motion support

### Monetization (If Applicable)
- [ ] Pro version with advanced features
- [ ] Ad-free experience
- [ ] Premium themes

---

## 📊 Version History

| Version | Date | Highlights |
|---------|------|------------|
| 1.0.0 | - | Initial release with Calculator, Unit Converter, QR Code |

---

## 🗓️ Release Schedule

| Phase | Target |
|-------|--------|
| Phase 1 | ✅ Complete |
| Phase 2 | Q1-Q2 2025 |
| Phase 3 | Q3-Q4 2025 |

---

## 💬 Feedback & Suggestions

Have ideas for new features? Found a bug? 

- Open an issue on [GitHub](https://github.com/bayraktarulku/multitool-app/issues)
- Submit a pull request
- Contact the maintainer

---

<p align="center">
  <em>This roadmap is subject to change based on user feedback and priorities.</em>
</p>
