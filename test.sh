#!/bin/bash

# MultitoolApp Test Script
# Bu script projeyi test etmek için kullanılır

echo "🚀 MultitoolApp Test Başlatılıyor..."
echo ""

# Renk kodları
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Node.js kontrolü
echo "📦 Node.js kontrolü..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js yüklü: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js yüklü değil!${NC}"
    exit 1
fi

# 2. npm kontrolü
echo ""
echo "📦 npm kontrolü..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓ npm yüklü: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm yüklü değil!${NC}"
    exit 1
fi

# 3. Dependencies kontrolü
echo ""
echo "📦 Dependencies kontrolü..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules mevcut${NC}"
else
    echo -e "${BLUE}⏳ node_modules bulunamadı, yükleniyor...${NC}"
    npm install
fi

# 4. TypeScript kontrolü
echo ""
echo "🔍 TypeScript type checking..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ TypeScript kontrolü başarılı${NC}"
else
    echo -e "${RED}✗ TypeScript hataları var!${NC}"
    exit 1
fi

# 5. Dosya yapısı kontrolü
echo ""
echo "📁 Dosya yapısı kontrolü..."
FILES=(
    "src/screens/CalculatorScreen.tsx"
    "src/screens/UnitConverterScreen.tsx"
    "src/screens/SettingsScreen.tsx"
    "src/context/ThemeContext.tsx"
    "src/utils/calculatorLogic.ts"
    "src/utils/unitConverter.ts"
)

ALL_FOUND=true
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${RED}✗ $file bulunamadı!${NC}"
        ALL_FOUND=false
    fi
done

if [ "$ALL_FOUND" = true ]; then
    echo -e "${GREEN}✓ Tüm dosyalar mevcut${NC}"
fi

# 6. iOS pods kontrolü (macOS için)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo ""
    echo "🍎 iOS pods kontrolü..."
    if [ -d "ios/Pods" ]; then
        echo -e "${GREEN}✓ iOS Pods yüklü${NC}"
    else
        echo -e "${BLUE}⏳ iOS Pods bulunamadı, yükleniyor...${NC}"
        cd ios && pod install && cd ..
    fi
fi

# Özet
echo ""
echo "======================================"
echo -e "${GREEN}✅ Test tamamlandı!${NC}"
echo "======================================"
echo ""
echo "📱 Simülatörde test etmek için:"
echo "  iOS:     npm run ios"
echo "  Android: npm run android"
echo ""
echo "🔄 Metro bundler başlatmak için:"
echo "  npm start"
echo ""
echo "📚 Daha fazla bilgi için:"
echo "  QUICK_START.md dosyasına bakın"
echo ""

