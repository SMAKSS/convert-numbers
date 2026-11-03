import convertNumbers from '@smakss/convert-numbers';
import './styles.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><a class="brand" href="https://github.com/SMAKSS/convert-numbers">@smakss/convert-numbers</a><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">Arabic-Indic & Persian digits</p><h1>Make every number readable.</h1><p class="subtitle">Convert numerals in place while preserving the words, punctuation, and spacing around them.</p></section>',
  '<main class="panel">',
  '<div class="panel-heading"><div><h2>Try a conversion</h2><p>Type or paste a value to see the converted result.</p></div><span class="status" id="count" aria-live="polite">0 digits converted</span></div>',
  '<div class="field"><label for="input">Text to convert</label><textarea id="input" spellcheck="false">Order ١٢٣٤٥٦ — رقم ۴۵۶</textarea></div>',
  '<div class="examples" aria-label="Example inputs"><span class="field-label">Try an example</span><button class="example" data-example="Persian: ۱۲۳۴۵۶۷۸۹۰">Persian</button><button class="example" data-example="Arabic: ١٢٣٤٥٦٧٨٩٠">Arabic-Indic</button><button class="example" data-example="Invoice ۴۲: ١٢٣٫٤٥">Mixed text</button></div>',
  '<section class="result-box" aria-live="polite"><div class="result-heading"><span class="result-label">Converted text</span><button class="copy" id="copy" type="button">Copy result</button></div><output class="result-value" id="output"></output></section>',
  '<p class="note">Only Arabic-Indic and Persian digits change. All other characters stay as entered.</p>',
  '</main><footer>Runs locally with Vite and imports the package through the pnpm workspace.</footer></div>'
].join('');

const input = root.querySelector<HTMLTextAreaElement>('#input')!;
const output = root.querySelector<HTMLOutputElement>('#output')!;
const count = root.querySelector<HTMLSpanElement>('#count')!;
const copyButton = root.querySelector<HTMLButtonElement>('#copy')!;

function render(): void {
  output.textContent = convertNumbers(input.value);
  const digitCount =
    input.value.match(/[\u0660-\u0669\u06F0-\u06F9]/g)?.length ?? 0;
  count.textContent = `${digitCount} ${digitCount === 1 ? 'digit' : 'digits'} to convert`;
}

input.addEventListener('input', render);

root.querySelectorAll<HTMLButtonElement>('[data-example]').forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.dataset.example ?? '';
    render();
    input.focus();
  });
});

copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(output.value);
  copyButton.textContent = 'Copied';
  window.setTimeout(() => {
    copyButton.textContent = 'Copy result';
  }, 1200);
});

render();
