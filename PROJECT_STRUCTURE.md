# 📁 MultitoolApp - Proje Yapısı

Bu dokümantasyon, MultitoolApp projesinin dosya ve klasör yapısını detaylı olarak açıklar.

## 🏗️ Genel Yapı

```
MultitoolApp/
├── 📱 ios/                     # iOS native files
├── 🤖 android/                 # Android native files
├── 📦 node_modules/            # Dependencies
├── 🎨 src/                     # Source code
├── 🧪 __tests__/              # Test files
├── 📄 Configuration files
└── 📚 Documentation files
```

---

## 📂 Detaylı Yapı

### `/src` - Ana Kaynak Kodu

```
src/
├── components/              # Reusable UI components
│   ├── calculator/         # Calculator-specific components
│   │   ├── CalculatorButton.tsx
│   │   └── CalculatorDisplay.tsx
│   ├── converter/          # Unit converter components
│   │   ├── CategoryPicker.tsx
│   │   └── UnitInput.tsx
│   └── common/             # Shared/generic components
│       ├── Button.tsx
│       └── Card.tsx
├── context/                # React Context providers
│   └── ThemeContext.tsx   # Dark/Light theme management
├── screens/                # Screen components
│   ├── CalculatorScreen.tsx
│   ├── UnitConverterScreen.tsx
│   └── SettingsScreen.tsx
├── types/                  # TypeScript type definitions
│   └── theme.ts           # Theme types and constants
└── utils/                  # Utility functions
    ├── calculatorLogic.ts # Calculator business logic
    └── unitConverter.ts   # Unit conversion logic
```

---

## 📱 Screens (Ekranlar)

### `CalculatorScreen.tsx`
- **Amaç**: Temel hesap makinesi ekranı
- **Özellikler**:
  - Temel matematiksel işlemler (+, -, ×, ÷)
  - Yüzde hesaplama
  - İşaret değiştirme
  - Temizleme ve geri silme
- **State Management**: Local state (useState)
- **Dependencies**: 
  - `calculatorLogic.ts`
  - `CalculatorButton.tsx`
  - `CalculatorDisplay.tsx`

### `UnitConverterScreen.tsx`
- **Amaç**: Birim dönüştürme ekranı
- **Özellikler**:
  - 4 kategori (uzunluk, ağırlık, hacim, sıcaklık)
  - Anlık dönüşüm
  - Kategori seçimi
  - Birim swap özelliği
- **State Management**: Local state (useState)
- **Dependencies**:
  - `unitConverter.ts`
  - `CategoryPicker.tsx`
  - `UnitInput.tsx`

### `SettingsScreen.tsx`
- **Amaç**: Ayarlar ve uygulama bilgileri
- **Özellikler**:
  - Tema değiştirme (dark/light)
  - Uygulama bilgileri
  - Özellik listesi
  - GitHub linki
- **Context**: ThemeContext

---

## 🎨 Components (Bileşenler)

### Common Components

#### `Button.tsx`
- **Amaç**: Reusable button component
- **Props**:
  ```typescript
  interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
  }
  ```
- **Features**: Tema-aware, multiple variants

#### `Card.tsx`
- **Amaç**: Container component with elevation
- **Props**:
  ```typescript
  interface CardProps {
    children: ReactNode;
    elevated?: boolean;
  }
  ```
- **Features**: Shadow/elevation, tema colors

### Calculator Components

#### `CalculatorButton.tsx`
- **Amaç**: Calculator-specific button
- **Types**: number, operator, equals, function
- **Features**: Different styles per type, haptic feedback ready

#### `CalculatorDisplay.tsx`
- **Amaç**: Display calculation results and expression
- **Features**: Auto font-size, expression history

### Converter Components

#### `CategoryPicker.tsx`
- **Amaç**: Horizontal scrollable category selector
- **Features**: Active state, smooth scroll

#### `UnitInput.tsx`
- **Amaç**: Input field with unit selector
- **Features**: Numeric keyboard, unit modal picker

---

## 🔧 Utils (Yardımcı Fonksiyonlar)

### `calculatorLogic.ts`

**Amaç**: Calculator business logic

**Exports**:
```typescript
// Types
export type Operation = '+' | '-' | '×' | '÷' | null;
export interface CalculatorState { ... }

// Functions
export const handleNumberPress: (state, number) => CalculatorState
export const handleOperationPress: (state, operation) => CalculatorState
export const handleEqualsPress: (state) => CalculatorState
export const handleClear: () => CalculatorState
export const handleBackspace: (state) => CalculatorState
export const handlePercentage: (state) => CalculatorState
export const handleToggleSign: (state) => CalculatorState
export const formatDisplay: (value) => string
```

**Sorumluluklar**:
- Matematiksel işlemleri yönetme
- State mutations
- Edge case handling (divide by zero, vb.)
- Number formatting

### `unitConverter.ts`

**Amaç**: Unit conversion logic

**Exports**:
```typescript
// Types
export interface Unit {
  id: string;
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface UnitCategory {
  id: string;
  name: string;
  icon: string;
  units: Unit[];
}

// Constants
export const unitCategories: UnitCategory[]

// Functions
export const convert: (value, fromUnit, toUnit) => number
```

**Kategoriler**:
- Length (uzunluk): meter base
- Weight (ağırlık): kilogram base
- Volume (hacim): liter base
- Temperature (sıcaklık): celsius base

---

## 🎭 Context (State Management)

### `ThemeContext.tsx`

**Amaç**: Global theme management

**Exports**:
```typescript
export const ThemeProvider: React.FC
export const useTheme: () => ThemeContextType

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}
```

**Features**:
- Dark/Light theme switching
- System theme detection
- AsyncStorage persistence
- Automatic theme application

**Usage**:
```typescript
const { theme, isDark, toggleTheme } = useTheme();
```

---

## 📐 Types (Tip Tanımları)

### `theme.ts`

**Amaç**: Theme type definitions and presets

**Exports**:
```typescript
export interface Theme {
  dark: boolean;
  colors: { ... };
  spacing: { ... };
  borderRadius: { ... };
  typography: { ... };
}

export const lightTheme: Theme
export const darkTheme: Theme
```

**Theme Structure**:
```typescript
{
  colors: {
    primary, secondary, background, surface,
    text, textSecondary, border, notification,
    error, success, buttonBackground, buttonText,
    operatorBackground, operatorText, displayBackground,
    gradientStart, gradientEnd
  },
  spacing: { xs, sm, md, lg, xl },
  borderRadius: { sm, md, lg, xl },
  typography: { h1, h2, h3, body, caption }
}
```

---

## 🤖 Android Specific

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/              # Native Android code
│   │       └── res/               # Resources
│   │           ├── drawable/      # Icons, images
│   │           ├── mipmap/        # App icons
│   │           └── values/        # Strings, colors, styles
│   ├── build.gradle              # App-level Gradle config
│   └── proguard-rules.pro        # ProGuard rules
├── gradle/                        # Gradle wrapper
├── build.gradle                   # Project-level Gradle config
└── gradle.properties              # Gradle properties
```

**Key Files**:
- `AndroidManifest.xml`: App permissions, activities
- `build.gradle`: Dependencies, SDK versions
- `res/`: Icons, strings, themes

---

## 📱 iOS Specific

```
ios/
├── MultitoolApp/
│   ├── AppDelegate.swift         # App lifecycle
│   ├── Info.plist               # App configuration
│   ├── LaunchScreen.storyboard  # Launch screen
│   ├── Images.xcassets/         # Assets catalog
│   │   └── AppIcon.appiconset/  # App icons
│   └── PrivacyInfo.xcprivacy    # Privacy manifest
├── MultitoolApp.xcodeproj/      # Xcode project
├── MultitoolApp.xcworkspace/    # Workspace (with Pods)
├── Podfile                      # CocoaPods dependencies
├── Podfile.lock                 # Locked dependencies
└── Pods/                        # CocoaPods modules
```

**Key Files**:
- `Info.plist`: App metadata, permissions
- `AppDelegate.swift`: App initialization
- `Podfile`: Native iOS dependencies

---

## 🧪 Tests

```
__tests__/
├── App.test.tsx                 # App component tests
├── components/                  # Component tests
├── utils/                       # Utility function tests
└── __snapshots__/              # Jest snapshots
```

**Test Structure**:
```typescript
describe('Component/Function Name', () => {
  it('should do something', () => {
    // Test implementation
  });
});
```

---

## ⚙️ Configuration Files

### Root Level

```
MultitoolApp/
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier config
├── .eslintrc.js               # ESLint config
├── babel.config.js            # Babel config
├── jest.config.js             # Jest config
├── metro.config.js            # Metro bundler config
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies & scripts
├── package-lock.json          # Locked dependencies
├── app.json                   # React Native app config
├── index.js                   # App entry point
└── App.tsx                    # Root component
```

### Key Configurations

#### `package.json`
```json
{
  "name": "MultitoolApp",
  "version": "1.0.0",
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

#### `tsconfig.json`
- Strict type checking
- ES6+ target
- JSX support

#### `babel.config.js`
- React Native preset
- TypeScript support

---

## 📚 Documentation Files

```
MultitoolApp/
├── README.md                   # Main documentation
├── README_MULTITOOL.md        # Detailed feature docs
├── ROADMAP.md                 # Future plans
├── CONTRIBUTING.md            # Contribution guide
├── BUILD_GUIDE.md             # Build & deployment
├── STORE_ASSETS.md            # Store listing assets
├── PROJECT_STRUCTURE.md       # This file
└── DESIGN_NOTES.md            # Design decisions
```

---

## 🔄 Data Flow

### Theme Flow
```
System Theme
    ↓
ThemeProvider (Context)
    ↓
useTheme() Hook
    ↓
Components
```

### Calculator Flow
```
User Input (Button Press)
    ↓
CalculatorScreen (handlePress)
    ↓
calculatorLogic Functions
    ↓
State Update (setState)
    ↓
UI Re-render
```

### Converter Flow
```
User Input (Value/Unit Change)
    ↓
UnitConverterScreen
    ↓
convert() Function
    ↓
State Update (useEffect)
    ↓
UI Re-render
```

---

## 🎯 Best Practices

### File Organization
- ✅ Group by feature (calculator, converter)
- ✅ Separate concerns (UI, logic, types)
- ✅ Reusable components in common/
- ✅ One component per file

### Naming
- ✅ PascalCase for components
- ✅ camelCase for functions/variables
- ✅ Descriptive names
- ✅ Consistent naming across files

### Dependencies
- ✅ Import order: React → RN → External → Internal
- ✅ Relative imports for local files
- ✅ Absolute imports for shared modules

---

## 📊 Project Statistics

```
Total Files: ~50+
Lines of Code: ~3000+
Components: 9
Screens: 3
Utils: 2
Context Providers: 1
Languages: TypeScript (95%), Swift, Kotlin
```

---

## 🔮 Future Structure Plans

### Planned Additions

```
src/
├── api/                    # API integrations (v1.2)
├── hooks/                  # Custom hooks (v1.1)
├── locales/               # i18n translations (v1.3)
├── navigation/            # Navigation config (v1.1)
├── services/              # Business services (v1.2)
└── store/                 # Redux/Zustand (if needed)
```

---

## 📝 Notes

- Tüm component'ler TypeScript ile yazılmıştır
- Functional components kullanılmıştır (hooks)
- Context API ile basit state management
- Minimal external dependencies
- Platform-agnostic code (iOS & Android)

---

**Son Güncelleme:** Aralık 2025
**Versiyon:** 1.0.0
**Durum:** Aktif Geliştirme

