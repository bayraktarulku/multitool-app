/**
 * Error handling utilities
 */

/**
 * Error type for application errors
 */
export interface AppError {
  code: string;
  message: string;
  originalError?: Error;
}

/**
 * Create a standardized app error
 * @param code Error code
 * @param message Human-readable message
 * @param originalError Original error if any
 * @returns AppError object
 */
export const createAppError = (
  code: string,
  message: string,
  originalError?: Error,
): AppError => ({
  code,
  message,
  originalError,
});

/**
 * Common error codes
 */
export const ErrorCodes = {
  CALCULATION_ERROR: 'CALCULATION_ERROR',
  CONVERSION_ERROR: 'CONVERSION_ERROR',
  CAMERA_PERMISSION_DENIED: 'CAMERA_PERMISSION_DENIED',
  QR_SCAN_ERROR: 'QR_SCAN_ERROR',
  QR_GENERATION_ERROR: 'QR_GENERATION_ERROR',
  CLIPBOARD_ERROR: 'CLIPBOARD_ERROR',
  SHARE_ERROR: 'SHARE_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

/**
 * Get user-friendly error message
 * @param error The app error
 * @returns User-friendly message
 */
export const getErrorMessage = (error: AppError): string => {
  switch (error.code) {
    case ErrorCodes.CALCULATION_ERROR:
      return 'Unable to perform calculation. Please check your input.';
    case ErrorCodes.CONVERSION_ERROR:
      return 'Unable to convert units. Please try again.';
    case ErrorCodes.CAMERA_PERMISSION_DENIED:
      return 'Camera permission is required to scan QR codes. Please enable it in settings.';
    case ErrorCodes.QR_SCAN_ERROR:
      return 'Unable to scan QR code. Please try again.';
    case ErrorCodes.QR_GENERATION_ERROR:
      return 'Unable to generate QR code. Please check your input.';
    case ErrorCodes.CLIPBOARD_ERROR:
      return 'Unable to copy to clipboard.';
    case ErrorCodes.SHARE_ERROR:
      return 'Unable to share content.';
    default:
      return error.message || 'An unexpected error occurred.';
  }
};

/**
 * Log error for debugging
 * @param error The error to log
 * @param context Additional context
 */
export const logError = (error: Error | AppError, context?: string): void => {
  const contextStr = context ? `[${context}]` : '';
  console.error(`${contextStr} Error:`, error);
};

export default {
  createAppError,
  ErrorCodes,
  getErrorMessage,
  logError,
};
