/**
 * QR Code type definitions
 */

export type QRCodeTab = 'scanner' | 'generator';

export type QRCodeType = 'text' | 'url' | 'email' | 'phone' | 'wifi' | 'vcard';

export interface QRCodeData {
  type: QRCodeType;
  content: string;
  timestamp: number;
}

export interface ScanResult {
  data: string;
  type: string;
  rawData?: string;
  timestamp: number;
}

export interface QRGeneratorState {
  inputText: string;
  qrType: QRCodeType;
  qrValue: string;
  qrSize: number;
  showQR: boolean;
}

export interface QRScannerState {
  hasPermission: boolean | null;
  scanned: boolean;
  scanResult: ScanResult | null;
  flashEnabled: boolean;
}

export interface WiFiQRData {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface VCardQRData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  organization?: string;
  title?: string;
}
