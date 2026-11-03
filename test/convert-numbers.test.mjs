import assert from 'node:assert/strict';
import test from 'node:test';
import convertNumbers from '../dist/esm/index.js';

test('converts Arabic-Indic digits and preserves surrounding text', () => {
  assert.equal(convertNumbers('رقم الطلب: ١٢٣-٤٥٦'), 'رقم الطلب: 123-456');
});

test('converts Persian digits', () => {
  assert.equal(convertNumbers('۱۲۳۴۵۶۷۸۹۰'), '1234567890');
});

test('converts both digit sets in the same string', () => {
  assert.equal(convertNumbers('١۲٣۴'), '1234');
});

test('leaves Latin digits, punctuation, and other scripts unchanged', () => {
  assert.equal(convertNumbers('ID 123: 東京!'), 'ID 123: 東京!');
});

test('converts digits when the input exceeds the short-string threshold', () => {
  const input = `${'x'.repeat(100)}١۲`;
  const output = `${'x'.repeat(100)}12`;

  assert.equal(convertNumbers(input), output);
});

test('returns an empty string for empty input', () => {
  assert.equal(convertNumbers(''), '');
});
