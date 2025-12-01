# Contributing Guide

Thank you for considering contributing to MultitoolApp!

## Code of Conduct

- Be respectful and constructive
- Welcome different perspectives
- Provide constructive feedback
- No harassment or personal attacks

---

## How to Contribute

### Types of Contributions

1. **Bug Reports**
   - Report bugs you find
   - Include reproduction steps

2. **Feature Suggestions**
   - Share new feature ideas
   - Describe use cases

3. **Code Contributions**
   - Bug fixes
   - New features
   - Performance improvements
   - Test coverage

4. **Documentation**
   - README improvements
   - Code comments
   - Examples and guides

---

## Development Setup

### Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/MultitoolApp.git
cd MultitoolApp
```

### Install Dependencies

```bash
npm install
cd ios && pod install && cd ..
```

### Create a Branch

```bash
git checkout -b feature/your-feature-name
```

---

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type

### Code Style

- Follow existing code style
- Use ESLint and Prettier
- Run `npm run lint` before committing

### Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

---

## Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]
[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

**Examples:**
```
feat(calculator): add scientific mode
fix(converter): correct temperature conversion
docs(readme): update installation steps
```

---

## Pull Request Process

1. **Update Documentation**
   - Update README if needed
   - Add comments to complex code

2. **Test Your Changes**
   ```bash
   npm test
   npx tsc --noEmit
   npm run lint
   ```

3. **Create Pull Request**
   - Clear title and description
   - Reference related issues
   - Include screenshots for UI changes

4. **Review Process**
   - Respond to feedback
   - Make requested changes
   - Wait for approval

---

## Issue Reporting

### Bug Reports

Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Device/OS information

### Feature Requests

Include:
- Clear description
- Use case
- Mockups (if applicable)

---

## Questions?

- Open an issue for discussion
- Check existing issues first

---

## Disclaimer

This project was developed with AI assistance. All contributions will be reviewed thoroughly. Contributors should test their changes extensively before submitting.


## 📋 İçindekiler

1. [Davranış Kuralları](#davranış-kuralları)
2. [Nasıl Katkıda Bulunabilirim?](#nasıl-katkıda-bulunabilirim)
3. [Geliştirme Ortamı Kurulumu](#geliştirme-ortamı-kurulumu)
4. [Kod Standartları](#kod-standartları)
5. [Commit Mesajları](#commit-mesajları)
6. [Pull Request Süreci](#pull-request-süreci)
7. [Issue Raporlama](#issue-raporlama)

---

## 📜 Davranış Kuralları

Bu proje, açık ve kapsayıcı bir ortam sağlamayı amaçlar. Lütfen:

- ✅ Saygılı ve yapıcı olun
- ✅ Farklı görüşlere açık olun
- ✅ Yapıcı geri bildirim verin
- ❌ Aşağılayıcı veya taciz edici davranmayın
- ❌ Kişisel saldırılarda bulunmayın

---

## 🎯 Nasıl Katkıda Bulunabilirim?

### Katkı Türleri

1. **Bug Raporları** 🐛
   - Bulduğunuz hataları bildirin
   - Yeniden üretme adımlarını paylaşın

2. **Özellik Önerileri** 💡
   - Yeni özellik fikirleri paylaşın
   - Kullanım senaryoları açıklayın

3. **Kod Katkıları** 💻
   - Bug düzeltmeleri
   - Yeni özellikler
   - Performance iyileştirmeleri
   - Test coverage artırımı

4. **Dokümantasyon** 📚
   - README iyileştirmeleri
   - Kod yorumları
   - Örnekler ve rehberler

5. **Çeviri** 🌍
   - Yeni dil desteği ekleme
   - Mevcut çevirileri iyileştirme

---

## 🛠️ Geliştirme Ortamı Kurulumu

### 1. Fork ve Clone

```bash
# 1. GitHub'da projeyi fork edin

# 2. Fork'unuzu klonlayın
git clone https://github.com/YOUR_USERNAME/MultitoolApp.git
cd MultitoolApp

# 3. Upstream remote ekleyin
git remote add upstream https://github.com/bayraktarulku/MultitoolApp.git
```

### 2. Bağımlılıkları Yükle

```bash
# Node modules
npm install

# iOS pods (sadece macOS)
cd ios && pod install && cd ..
```

### 3. Branch Oluştur

```bash
# Feature branch oluştur
git checkout -b feature/your-feature-name

# Bug fix branch oluştur
git checkout -b fix/bug-description
```

---

## 📏 Kod Standartları

### TypeScript

```typescript
// ✅ İyi
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = (id: string): Promise<User> => {
  return api.fetchUser(id);
};

// ❌ Kötü
const getUser = (id) => {
  return api.fetchUser(id);
};
```

### React Components

```typescript
// ✅ İyi - Functional Component
import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

// ❌ Kötü - Props type yok
export const MyComponent = ({ title, onPress }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
```

### Dosya Yapısı

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── calculator/      # Feature-specific components
│   └── converter/
├── screens/             # Screen components
│   ├── CalculatorScreen.tsx
│   └── UnitConverterScreen.tsx
├── context/             # React Context
│   └── ThemeContext.tsx
├── types/               # TypeScript types
│   └── theme.ts
└── utils/               # Utility functions
    ├── calculatorLogic.ts
    └── unitConverter.ts
```

### Naming Conventions

- **Components**: PascalCase - `MyComponent.tsx`
- **Utilities**: camelCase - `calculatorLogic.ts`
- **Constants**: UPPER_SNAKE_CASE - `const MAX_VALUE = 100`
- **Interfaces/Types**: PascalCase - `interface User {}`

### Code Style

```typescript
// Spacing
const myFunction = () => {
  // Single space after keywords
  if (condition) {
    doSomething();
  }
};

// Imports - Organize by category
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/common/Button';
import { formatNumber } from '../utils/helpers';

// Arrow functions for components
export const MyComponent: React.FC = () => {
  return <View />;
};

// Use meaningful variable names
// ✅ İyi
const userId = getUserId();
// ❌ Kötü
const uid = getUID();
```

---

## 📝 Commit Mesajları

### Format

```
type(scope): kısa açıklama

[opsiyonel detaylı açıklama]

[opsiyonel footer]
```

### Types

- **feat**: Yeni özellik
- **fix**: Bug düzeltmesi
- **docs**: Dokümantasyon değişiklikleri
- **style**: Kod formatı (semantik değişiklik yok)
- **refactor**: Kod refactoring
- **test**: Test ekleme/düzeltme
- **chore**: Build/tooling değişiklikleri

### Örnekler

```bash
# Feature
git commit -m "feat(calculator): add percentage calculation"

# Bug fix
git commit -m "fix(converter): fix temperature conversion formula"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactor
git commit -m "refactor(theme): simplify color palette structure"

# Style
git commit -m "style(calculator): format button components"
```

### Detaylı Commit

```bash
git commit -m "feat(converter): add currency conversion

- Add currency API integration
- Implement real-time exchange rates
- Add currency symbol display
- Update unit converter screen UI

Closes #123"
```

---

## 🔄 Pull Request Süreci

### 1. Kodunuzu Güncel Tutun

```bash
# Upstream'den son değişiklikleri çek
git fetch upstream
git rebase upstream/main
```

### 2. Test Edin

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Tests
npm test

# Build test
npm run ios
npm run android
```

### 3. Pull Request Oluştur

1. GitHub'da fork'unuza gidin
2. "New Pull Request" tıklayın
3. Base: `main`, Compare: `your-branch` seçin
4. Template'i doldurun:

```markdown
## Değişiklikler
- [ ] Yeni özellik eklendi
- [ ] Bug düzeltildi
- [ ] Dokümantasyon güncellendi

## Açıklama
[Değişikliklerin detaylı açıklaması]

## Test
- [ ] iOS'ta test edildi
- [ ] Android'de test edildi
- [ ] Unit testler eklendi/güncellendi
- [ ] Type checking passed
- [ ] Linting passed

## Screenshots
[Varsa ekran görüntüleri]

## İlgili Issue
Closes #[issue_number]
```

### 4. Code Review

- Geri bildirimlere cevap verin
- İstenen değişiklikleri yapın
- Review'ları çözün

---

## 🐛 Issue Raporlama

### Bug Report Template

```markdown
**Bug Tanımı**
[Bug'ın net ve kısa açıklaması]

**Yeniden Üretme Adımları**
1. '...' gidin
2. '...' tıklayın
3. '...' yapın
4. Hatayı görün

**Beklenen Davranış**
[Ne olmasını bekliyordunuz?]

**Gerçekleşen Davranış**
[Ne oldu?]

**Screenshots**
[Varsa ekran görüntüleri]

**Ortam:**
- Cihaz: [örn. iPhone 15 Pro]
- OS: [örn. iOS 17.0]
- App Version: [örn. 1.0.0]

**Ek Bilgi**
[Diğer bağlam bilgileri]
```

### Feature Request Template

```markdown
**Özellik Tanımı**
[Özelliğin net açıklaması]

**Problem**
[Hangi problemi çözüyor?]

**Önerilen Çözüm**
[Nasıl çalışmasını istersiniz?]

**Alternatifler**
[Düşündüğünüz diğer çözümler]

**Ek Bilgi**
[Mockups, örnekler, vb.]
```

---

## ✅ Checklist

Pull request göndermeden önce:

- [ ] Kod standartlarına uydum
- [ ] TypeScript hatası yok
- [ ] Lint hatası yok
- [ ] Testler geçiyor
- [ ] iOS'ta test ettim
- [ ] Android'de test ettim
- [ ] Dokümantasyonu güncelledim
- [ ] Commit mesajları formatına uydum
- [ ] Branch'im güncel (main'den rebase edildi)

---

## 🎨 UI/UX Katkıları

### Design Guidelines

1. **Tema Tutarlılığı**
   - Mevcut tema sistemini kullan
   - `useTheme()` hook'unu kullan
   - Hardcoded renkler kullanma

2. **Responsive Design**
   - Farklı ekran boyutlarını düşün
   - SafeArea kullan
   - Tablet ve telefon için test et

3. **Accessibility**
   - Anlamlı `accessibilityLabel` ekle
   - Yeterli contrast sağla
   - Font ölçeklemeyi destekle

### Örnek

```typescript
import { useTheme } from '../context/ThemeContext';

export const MyComponent: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text 
        style={{ color: theme.colors.text }}
        accessibilityLabel="My component title"
      >
        Hello
      </Text>
    </View>
  );
};
```

---

## 🧪 Testing Katkıları

### Test Yazma

```typescript
// __tests__/utils/calculatorLogic.test.ts
import { handleNumberPress, initialState } from '../calculatorLogic';

describe('calculatorLogic', () => {
  describe('handleNumberPress', () => {
    it('should append number to current value', () => {
      const state = { ...initialState, currentValue: '5' };
      const result = handleNumberPress(state, '3');
      expect(result.currentValue).toBe('53');
    });

    it('should replace 0 with number', () => {
      const result = handleNumberPress(initialState, '5');
      expect(result.currentValue).toBe('5');
    });
  });
});
```

---

## 📚 Dokümantasyon Katkıları

### README Güncellemeleri

- Açık ve anlaşılır yazın
- Örnekler ekleyin
- Ekran görüntüleri kullanın
- Güncel tutun

### Kod Yorumları

```typescript
/**
 * Converts a value from one unit to another within the same category
 * 
 * @param value - The numeric value to convert
 * @param fromUnit - The source unit
 * @param toUnit - The target unit
 * @returns The converted value
 * 
 * @example
 * convert(100, centimeter, meter) // returns 1
 */
export const convert = (
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): number => {
  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
};
```

---

## 🌍 Çeviri Katkıları

### Yeni Dil Ekleme

1. `src/locales/` altında yeni dil dosyası oluştur
2. Tüm stringleri çevir
3. `i18n` config'e ekle
4. Test et

```typescript
// src/locales/en.ts
export default {
  calculator: {
    title: 'Calculator',
    clear: 'Clear',
    // ...
  },
  converter: {
    title: 'Unit Converter',
    // ...
  },
};
```

---

## ❓ Sorular?

- 💬 [GitHub Discussions](https://github.com/bayraktarulku/MultitoolApp/discussions)
- 📧 Email: support@multitoolapp.com
- 🐛 [GitHub Issues](https://github.com/bayraktarulku/MultitoolApp/issues)

---

## 🎉 Teşekkürler!

Katkınız için teşekkür ederiz! Her katkı, projeyi daha iyi hale getirir.

**Mutlu kodlamalar! 🚀**

---

**Son Güncelleme:** Aralık 2025

