# 🎉 MultitoolApp - Release Notes

## 🆕 Version 1.1.0 (1 Aralık 2025)

### Yeni Özellikler

#### 📱 QR Kod Oluşturucu
- **QR Kod Oluşturma**: URL, metin, telefon numarası ve daha fazlası için QR kod oluşturun
- **Hızlı Şablonlar**: 5 hazır şablon ile hızlı QR kod oluşturma
  - Web Sitesi
  - E-posta
  - Telefon
  - WhatsApp
  - WiFi
- **Boyut Kontrolü**: 150px, 200px veya 250px boyutlarında QR kod
- **Paylaşma**: Oluşturulan QR kod içeriğini doğrudan paylaşın
- **Dark Mode Desteği**: QR kod renkleri tema ile otomatik değişir

### İyileştirmeler
- ✅ Bottom tab navigation'a 4. tab eklendi
- ✅ Settings ekranında yeni özellik bilgisi
- ✅ Modern ve tutarlı UI/UX
- ✅ Tema-aware QR kod render

### Teknik
- `react-native-qrcode-svg` paket entegrasyonu
- `react-native-svg` native destek
- iOS build optimizasyonu

---

## 🔧 Version 1.0.1 (1 Aralık 2025)

### Bug Fixes

#### Hesap Makinesi Display Sorunu
- **Düzeltildi**: Calculator butonlarında sayılar görünmeme sorunu
- Button layout'una `flex: 1` eklendi
- ScrollView yerine düz View kullanımı
- Display minHeight artırıldı

#### Bottom Tab İkonları
- **Düzeltildi**: Navigation tab'larında ikonlar görünmeme sorunu
- Info.plist'e UIAppFonts array'i eklendi
- react-native-vector-icons iOS linking
- Tüm ikonlar düzgün render ediliyor

### İyileştirmeler
- Calculator display daha büyük ve okunabilir
- Button layout daha responsive
- Icon font'lar düzgün yükleniyor

---

## 🎊 Version 1.0.0 (30 Kasım 2025)

### İlk Sürüm - MVP

#### 🧮 Hesap Makinesi
- Temel matematiksel işlemler (+, -, ×, ÷)
- Yüzde hesaplama (%)
- İşaret değiştirme (±)
- Temizleme (C)
- Büyük display
- Modern buton grid

#### 📏 Birim Çevirici
- **4 Kategori**: Uzunluk, Ağırlık, Hacim, Sıcaklık
- **28+ Birim**: Çeşitli ölçü birimleri
- Anlık dönüşüm
- Kategori seçici
- Birim swap özelliği
- Modal birim seçimi

#### 🎨 Tema Sistemi
- Dark/Light mode
- Sistem temasını otomatik algılama
- AsyncStorage ile kalıcılık
- Smooth geçişler
- Modern Indigo/Purple gradient renk paleti
- Tüm componentlerde tutarlı tema

#### 🧭 Navigation
- Bottom Tab Navigation
- 3 ana ekran (Calculator, Converter, Settings)
- Custom Ionicons
- Active/Inactive states
- Tema-aware navigation bar

#### ⚙️ Ayarlar
- Tema değiştirme toggle
- Uygulama bilgileri
- Versiyon gösterimi
- Özellik listesi
- GitHub linki

---

## 📊 Versiyon Karşılaştırması

| Özellik | v1.0.0 | v1.0.1 | v1.1.0 |
|---------|--------|--------|--------|
| Hesap Makinesi | ✅ | ✅ | ✅ |
| Birim Çevirici | ✅ | ✅ | ✅ |
| QR Kod | ❌ | ❌ | ✅ |
| Tema Sistemi | ✅ | ✅ | ✅ |
| Bottom Tabs | 3 | 3 | 4 |
| Bug Fixes | - | 2 | - |
| iOS Support | ✅ | ✅ | ✅ |

---

## 🔮 Gelecek Sürümler

### v1.2.0 (Planlanan - Q1 2025)
- [ ] QR Kod Okuyucu (camera ile)
- [ ] Hesaplama geçmişi
- [ ] Favori dönüşümler
- [ ] Widget desteği
- [ ] Haptic feedback
- [ ] Daha fazla birim kategorileri

### v1.3.0 (Planlanan - Q2 2025)
- [ ] Multi-language support
- [ ] Cloud sync
- [ ] Premium features
- [ ] Analytics
- [ ] Advanced QR features

### v2.0.0 (Planlanan - Q3 2025)
- [ ] Complete redesign
- [ ] AI integration
- [ ] Plugin system
- [ ] Community features

---

## 📝 Upgrade Guide

### 1.0.1'den 1.1.0'a Yükseltme

**Yeni Bağımlılıklar:**
```bash
npm install react-native-qrcode-svg react-native-svg
cd ios && pod install
```

**Breaking Changes:**
- Yok! Geriye dönük uyumlu.

**Yeni Özellikler:**
- QR Code tab'ı otomatik görünür
- Settings'te yeni özellik bilgisi

---

## 🐛 Bilinen Sorunlar

### v1.1.0
- Android'de tam test edilmedi
- QR kod okuma özelliği yok (v1.2.0'da gelecek)

### Çözüm Planı
- Android test yakında
- Camera permission implementation v1.2.0

---

## 📚 Dokümantasyon

### v1.1.0 için
- `FEATURE_QR_CODE.md` - QR Kod özelliği detayları
- `TEST_SUMMARY_FINAL.md` - Güncel test özeti

### v1.0.1 için
- `BUGFIX_CALCULATOR_DISPLAY.md` - Calculator bug fix
- `BUGFIX_TAB_ICONS.md` - Icons bug fix

### Genel
- `README_MULTITOOL.md` - Ana dokümantasyon
- `ROADMAP.md` - Gelecek planları
- `BUILD_GUIDE.md` - Build ve deployment
- `CONTRIBUTING.md` - Katkı rehberi

---

## 🙏 Teşekkürler

### Katkıda Bulunanlar
- Ülkü Bayraktar - Lead Developer
- AI Assistant - Development Support

### Kullanılan Paketler
- React Native
- React Navigation
- React Native Vector Icons
- React Native QRCode SVG
- React Native SVG
- AsyncStorage

---

## 📞 Destek ve İletişim

### Geri Bildirim
- GitHub Issues: [Create Issue](https://github.com/bayraktarulku/MultitoolApp/issues)
- Email: support@multitoolapp.com

### Sosyal Medya
- GitHub: [@bayraktarulku](https://github.com/bayraktarulku)

---

## 📄 Lisans

MIT License - Detaylar için LICENSE dosyasına bakın.

---

**Güncel Versiyon:** 1.1.0
**Yayın Tarihi:** 1 Aralık 2025
**Platform:** iOS (Android yakında)
**Durum:** Stable

🎉 **MultitoolApp'i kullandığınız için teşekkürler!**

