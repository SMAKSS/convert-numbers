// Threshold for the number of characters in the input string
const THRESHOLD = 100;

// Define the type for digitMap
const DIGIT_MAP: Record<string, string> = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9', // Arabic-Indic
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9' // Persian
};

/**
 * Converts Persian or Arabic numbers to English numbers.
 *
 * @param {string} inputValue - The string containing Persian or Arabic numbers to convert.
 * @returns {string} - The input string with Arabic-Indic and Persian digits converted to English digits.
 *
 * @example
 * // returns "123"
 * convertNumbers("١٢٣");
 *
 * @example
 * // returns "456"
 * convertNumbers("۴۵۶");
 *
 * @example
 * // returns "789"
 * convertNumbers("٧٨٩");
 */
function convertNumbers(inputValue: string): string {
  if (!inputValue) return '';

  if (inputValue.length <= THRESHOLD) {
    return inputValue
      .replace(/[\u0660-\u0669]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) - 0x0660 + 0x0030)
      )
      .replace(/[\u06F0-\u06F9]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) - 0x06f0 + 0x0030)
      );
  }

  return inputValue
    .split('')
    .map((char) => DIGIT_MAP[char] ?? char)
    .join('');
}

export default convertNumbers;
