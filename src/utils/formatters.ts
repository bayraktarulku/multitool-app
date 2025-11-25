/**
 * Format helper utilities
 */

/**
 * Truncate a string to a maximum length with ellipsis
 * @param str String to truncate
 * @param maxLength Maximum length
 * @returns Truncated string
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + '...';
};

/**
 * Format a timestamp to a readable string
 * @param timestamp Unix timestamp
 * @returns Formatted date/time string
 */
export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

/**
 * Format a number with specified decimal places
 * @param num Number to format
 * @param decimals Number of decimal places
 * @returns Formatted number string
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  if (isNaN(num)) {
    return '0';
  }
  return num.toFixed(decimals);
};

/**
 * Capitalize the first letter of a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export const capitalizeFirst = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Remove all whitespace from a string
 * @param str String to clean
 * @returns String without whitespace
 */
export const removeWhitespace = (str: string): string => {
  return str.replace(/\s+/g, '');
};
