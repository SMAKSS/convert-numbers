/**
 * Converts Persian or Arabic numbers to English numbers.
 *
 * @param {string} [inputValue] - The string containing Persian or Arabic numbers to convert.
 * @returns {string} - The string with Persian or Arabic numbers converted to English, or "" if input is not provided.
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
 * // returns ""
 * convertNumbers();
 *
 * @example
 * // returns "789"
 * convertNumbers("٧٨٩");
 */
function convertNumbers(inputValue: string): string {
  if (!inputValue) return '';

  return inputValue
    .replace(/[\u0660-\u0669]/g, (c) => {
      return String.fromCharCode(c.charCodeAt(0) - 0x0660 + 0x0030);
    })
    .replace(/[\u06F0-\u06F9]/g, (c) => {
      return String.fromCharCode(c.charCodeAt(0) - 0x06f0 + 0x0030);
    });
}

export default convertNumbers;
