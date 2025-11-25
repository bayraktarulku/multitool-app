/**
 * QR Code utility functions
 * Validation and formatting helpers
 */

import { QRCodeType, WiFiQRData, VCardQRData } from '../types/qrcode';

/**
 * URL validation regex - simplified to avoid ReDoS
 */
const URL_REGEX = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/[\w./-]*)?$/i;

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex (basic international format)
 */
const PHONE_REGEX = /^\+?[\d\s-]{7,15}$/;

/**
 * Detect the type of QR code content
 * @param content The content string
 * @returns Detected QR code type
 */
export const detectQRCodeType = (content: string): QRCodeType => {
  if (!content || content.trim().length === 0) {
    return 'text';
  }

  const trimmedContent = content.trim().toLowerCase();

  // Check for URL
  if (
    trimmedContent.startsWith('http://') ||
    trimmedContent.startsWith('https://') ||
    URL_REGEX.test(trimmedContent)
  ) {
    return 'url';
  }

  // Check for email
  if (
    trimmedContent.startsWith('mailto:') ||
    EMAIL_REGEX.test(trimmedContent)
  ) {
    return 'email';
  }

  // Check for phone
  if (trimmedContent.startsWith('tel:') || PHONE_REGEX.test(trimmedContent)) {
    return 'phone';
  }

  // Check for WiFi
  if (trimmedContent.startsWith('wifi:')) {
    return 'wifi';
  }

  // Check for vCard
  if (trimmedContent.startsWith('begin:vcard')) {
    return 'vcard';
  }

  return 'text';
};

/**
 * Validate QR code content based on type
 * @param content The content to validate
 * @param type The QR code type
 * @returns Validation result with error message if invalid
 */
export const validateQRContent = (
  content: string,
  type: QRCodeType,
): { isValid: boolean; error?: string } => {
  if (!content || content.trim().length === 0) {
    return { isValid: false, error: 'Content cannot be empty' };
  }

  switch (type) {
    case 'url':
      if (!URL_REGEX.test(content)) {
        return { isValid: false, error: 'Invalid URL format' };
      }
      break;
    case 'email': {
      const emailContent = content.replace('mailto:', '');
      if (!EMAIL_REGEX.test(emailContent)) {
        return { isValid: false, error: 'Invalid email format' };
      }
      break;
    }
    case 'phone': {
      const phoneContent = content.replace('tel:', '');
      if (!PHONE_REGEX.test(phoneContent)) {
        return { isValid: false, error: 'Invalid phone format' };
      }
      break;
    }
  }

  return { isValid: true };
};

/**
 * Format WiFi data as QR code string
 * @param data WiFi configuration data
 * @returns Formatted WiFi QR code string
 */
export const formatWiFiQRCode = (data: WiFiQRData): string => {
  const { ssid, password, encryption, hidden } = data;
  return `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden ? 'true' : ''};`;
};

/**
 * Format vCard data as QR code string
 * @param data vCard data
 * @returns Formatted vCard QR code string
 */
export const formatVCardQRCode = (data: VCardQRData): string => {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${data.lastName};${data.firstName}`,
    `FN:${data.firstName} ${data.lastName}`,
  ];

  if (data.phone) {
    lines.push(`TEL:${data.phone}`);
  }

  if (data.email) {
    lines.push(`EMAIL:${data.email}`);
  }

  if (data.organization) {
    lines.push(`ORG:${data.organization}`);
  }

  if (data.title) {
    lines.push(`TITLE:${data.title}`);
  }

  lines.push('END:VCARD');

  return lines.join('\n');
};

/**
 * Format content for QR code based on type
 * @param content Raw content
 * @param type QR code type
 * @returns Formatted content string
 */
export const formatQRContent = (content: string, type: QRCodeType): string => {
  switch (type) {
    case 'url':
      // Add https:// if not present
      if (!content.startsWith('http://') && !content.startsWith('https://')) {
        return `https://${content}`;
      }
      return content;
    case 'email':
      if (!content.startsWith('mailto:')) {
        return `mailto:${content}`;
      }
      return content;
    case 'phone':
      if (!content.startsWith('tel:')) {
        return `tel:${content}`;
      }
      return content;
    default:
      return content;
  }
};

/**
 * Parse scanned QR code result
 * @param data Raw scanned data
 * @returns Parsed result with type and clean content
 */
export const parseScannedQRCode = (
  data: string,
): { type: QRCodeType; content: string; displayContent: string } => {
  const type = detectQRCodeType(data);
  let displayContent = data;

  switch (type) {
    case 'url':
      displayContent = data;
      break;
    case 'email':
      displayContent = data.replace('mailto:', '');
      break;
    case 'phone':
      displayContent = data.replace('tel:', '');
      break;
    default:
      displayContent = data;
  }

  return {
    type,
    content: data,
    displayContent,
  };
};
