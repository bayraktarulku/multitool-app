# Store Assets Guide
## App Icon
**Size:** 512x512px
**Format:** PNG with alpha channel
**Design:** Modern gradient (indigo to purple)
**Content:** Calculator + QR code combination
**Tools:**
- Canva Pro
- Figma
- Adobe Illustrator
---
## Screenshots
**Required:** 7-8 screenshots
1. Hero Shot - All features overview
2. Calculator - Light mode
3. Calculator - Dark mode
4. Unit Converter - Conversion example
5. QR Code - Generation example
6. Settings - Theme toggle
7. Navigation - 4 tabs
**Tools:**
- iOS Simulator (Cmd+S)
- Screely (device frames)
- Placeit (mockups)
---
## Store Listings
### Title (30 characters)
```
Multitool: Calculator+
```
### Subtitle (30 characters - iOS only)
```
Calculator, Converter, QR
```
### Description
```
MultitoolApp - All essential tools in one app!
4 POWERFUL TOOLS:
- Calculator - Fast and easy calculations
- Unit Converter - 28+ units across 4 categories
- QR Code - Create and# Store Assets Guide
## App Icon
**Size:** 512x512px
**Format:** PNG with alpha channel
**Design:*of## App Icon
**Size:nt**Size:** er**Format:** PNG wiat**Design:** Modern gradient (indiwo**Content:** Calculator + QR code combinations
**Tools:**
- Canva Pro
- Figma
- Adobe Illus -- Canva Pe
- Figma
- OW- Adob##---
## Screenshots10##ch**Required:**``1. Hero Shot - All features de2. Calculator - Light mode
3. Calcuen3. Calculator - Dark mode
*4. Unit Converter - Convea5. QR Code - Generation example
6. Se. 6. Settings - Theme toggle
7. er7. Navigation - 4 tabs
**to**Tools:**
- iOS Simula- iOS Sims
- Screely (device frameo- Placeit (mockups)
---
30---
## Store Listi**## 0### Title (30 chti```
Multitool: CalculatoatMu d```
### Subtitle (30  g##er```
Calculator, Converter, QR
```
### 5sCaDa```
### Description
```
 "##wn```
MultitoolA--Mu##4 POWERFUL TOOLS:
- Calculator - Fast and easns- Calculator - Fs.- Unit Converter - 28+ units across 4 cace- QR Code - Create and# Store Assets Guide
## Ali## App Icon
**Size:** 512x512px
**Format:io**Size:** F
**Format:** PNG wi"
cd /Users/ulkubayraktar/Desktop/bayraktarulku-github/MultitoolApp && cat > RELEASE_NOTES.md << 'EOF'
# Release Notes
## Version 1.1.0
### New Features
**QR Code Generator**
- Generate QR codes for URLs, text, contacts
- Quick templates (Web, Email, Phone, WhatsApp, WiFi)
- Adjustable sizes (150px, 200px, 250px)
- Share functionality
- Theme-aware colors (dark/light mode)
### Improvements
- Added 4th navigation tab
- Updated Settings screen with new feature info
- Consistent UI/UX across all screens
### Technical
- react-native-qrcode-svg integration
- react-native-svg native support
- iOS build optimization
---
## Version 1.0.1
### Bug Fixes
**Calculator Display Issue**
- Fixed button layout (added flex: 1)
- Improved display size and readability
- Replaced ScrollView with View for better layout
**Navigation Icons**
- Fixed icons not displaying on iOS
- Added UIAppFonts array to Info.plist
- Linked react-native-vector-icons properly
### Improvements
- Better calculator button layout
- Larger display area
- Mo# Release Notes
## Version 1.1.0
### New Features
**QR Code Generator**
- Generate QR codes for URL×## Version 1.1ta### New Featureog**QR Code Generr - Generate QR codes e - Quick templates (Web, Email, Phone, WhatsLe- Adjustable sizes (150px, 200px, 250px)
- Share fun-t- Share functionality
- Theme-aware colit- Theme-aware colorse ### Improvements
- Added 4th navigatihe- Added 4th navAs- Updated Settings screenSm- Consistent UI/UX across all screens
### Techvi### Technical
- react-native-qrcode- s- react-natiul- react-native-svg native support
- ic- iOS build optimization
---
## 
#---
## Version 1.0.1
##S ##.0### Bug Fixes
*dr**Calculatorad- Fixed button layout (addeSt- Improved display size and readabilpt- Replaced ScrollView with View for bera**Navigation Icons**
- Fixed icons not displayinco- Fixed icons not dve- Added UIAppFonts array to Info.ps - Linked react-native-vector-icons pror### Improvements
- Better calculator buttolo- Better calculnt- Larger display area
- Mo# Relety- Mo# Release Notes
ch## Version 1.1.0
cd /Users/ulkubayraktar/Desktop/bayraktarulku-github/MultitoolApp && cat > BUGFIX_CALCULATOR_DISPLAY.md << 'EOF'
# Bug Fix: Calculator Display Issue
## Problem
Calculator button numbers were not visible or very small on screen.
## Root Cause
- Missing `flex: 1` on calculator buttons
- ScrollView causing layout conflicts
- Insufficient display minHeight
## Solution
### CalculatorButton.tsx
Added `flex: 1` to button styles for proper sizing in row layout.
### CalculatorDisplay.tsx
Increased minHeight from 120px to 140px and added text minHeight.
### CalculatorScreen.tsx
Replaced ScrollView with View for fixed layout (calculator doesn't need scrolling).
## Result
- Buttons now properly sized and visible
- Display area larger and more readable
- Layout is responsive and consistent
---
## Disclaimer
This fix was implemented with AI assistance. Test thoroughly on multiple devices.
