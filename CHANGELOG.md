# Changelog

All notable changes to MultiTool App will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup

---

## [0.1.0] - YYYY-MM-DD

### Added

#### Project Structure
- Initialized React Native project with TypeScript
- Set up folder structure (screens, components, navigation, hooks, utils, constants, types, theme)
- Configured React Navigation with Bottom Tab Navigator
- Added ESLint and Prettier configuration
- Created comprehensive documentation

#### Calculator
- Basic calculator UI with responsive layout
- Support for basic operations (+, -, ×, ÷)
- Percentage calculation
- Sign toggle (+/-)
- Clear/AC functionality
- Backspace button
- Large number formatting with commas
- Dynamic font sizing for display
- Scientific mode toggle (placeholder)

#### Unit Converter
- Category selector with 7 categories
  - Length (m, km, cm, mm, ft, in, mile, yard)
  - Weight (kg, g, mg, lb, oz, t)
  - Temperature (°C, °F, K)
  - Volume (L, mL, gallon, cup, pt, qt, fl oz, m³)
  - Area (m², km², cm², ft², in², acre, ha)
  - Speed (m/s, km/h, mph, kn, ft/s)
  - Time (s, ms, min, h, d, wk, mo, yr)
- Real-time conversion
- Swap units functionality
- Modal unit picker
- Clear button

#### QR Code
- Tab view with Scanner and Generator tabs
- QR Code Generator from text input
- Auto-detection of content type (URL, email, phone)
- Copy to clipboard functionality
- QR Scanner placeholder with camera permission handling
- Demo mode for testing

#### Theme System
- Light and dark mode support
- Color palette with primary, secondary, and status colors
- Typography system with consistent font sizes
- Spacing constants
- Theme toggle in each screen

#### UI Components
- Button (primary, secondary, outline, ghost variants)
- Card with shadow and border radius
- Input with label and error state
- IconButton for icon-only buttons
- Divider for separating content
- SafeAreaContainer for safe area handling
- ScreenHeader with optional action button
- EmptyState for no-content states

#### Utility Functions
- Calculator math operations (no eval)
- Unit conversion formulas
- QR code content validation and formatting
- Number formatting helpers
- Error handling utilities

### Security
- No use of eval() in calculator
- Proper input validation
- No sensitive data storage

### Technical
- TypeScript strict mode enabled
- Path aliases configured
- Consistent code style with ESLint
- Code formatting with Prettier

---

## Version History

- **0.1.0** - Initial release with MVP features

---

## Links

- [Repository](https://github.com/bayraktarulku/multitool-app)
- [Roadmap](ROADMAP.md)
- [Contributing](CONTRIBUTING.md)
