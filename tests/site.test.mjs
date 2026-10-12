import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync('dist/index.html', 'utf8');
const base = readFileSync('vite.config.ts', 'utf8').match(/base:\s*'([^']+)'/)[1];
const siteUrl = `https://borjarejano.github.io${base}`;
test('Pages serves compiled assets from the configured base', () => {
  assert.doesNotMatch(html, /\/src\/main\.tsx|%BASE_URL%/);
  const assets = [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map(match => match[1]);
  assert.ok(assets.some(path => path.startsWith(`${base}assets/`) && path.endsWith('.js')));
  for (const path of assets) { assert.ok(path.startsWith(base)); assert.ok(existsSync(resolve('dist', path.slice(base.length))), `Missing resource: ${path}`); }
  assert.ok(existsSync('dist/cv-provisional.txt'));
});
test('SEO metadata and crawler resources use the published address', () => {
  assert.match(html, /<title>Borja Rejano/);
  assert.ok(html.includes(`rel="canonical" href="${siteUrl}"`));
  assert.ok(html.includes(`property="og:image" content="${siteUrl}social-preview.png"`));
  assert.ok(readFileSync('dist/robots.txt', 'utf8').includes(`Sitemap: ${siteUrl}sitemap.xml`));
  assert.ok(readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${siteUrl}</loc>`));
  const png = readFileSync('dist/social-preview.png');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
});
test('CSS font and image URLs resolve to packaged local assets', () => {
  const stylesheet = [...html.matchAll(/href="([^" ]+\.css)"/g)][0]?.[1];
  assert.ok(stylesheet);
  const css = readFileSync(resolve('dist', stylesheet.slice(base.length)), 'utf8');
  for (const [, url] of css.matchAll(/url\(([^)]+)\)/g)) {
    const clean = url.replace(/["']/g, '');
    if (clean.startsWith('data:') || clean.startsWith('#')) continue;
    assert.ok(existsSync(clean.startsWith('/') ? resolve('dist', clean.slice(base.length)) : resolve('dist/assets', clean)), `Missing CSS asset: ${clean}`);
  }
});
function luminance(hex) {
  const rgb = hex.match(/[0-9a-f]{2}/gi).map(channel => parseInt(channel, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
}
function ratio(a, b) { const values = [luminance(a), luminance(b)].sort((x,y) => y - x); return (values[0] + .05) / (values[1] + .05); }
test('Both theme palettes meet AA text and control contrast thresholds', () => {
  const css = readFileSync('src/styles.css', 'utf8');
  for (const selector of [':root', ':root[data-theme=light]']) {
    const block = css.slice(css.indexOf(`${selector}{`)).split('}')[0];
    const variables = Object.fromEntries([...block.matchAll(/--([a-z-]+):(#[0-9a-f]{6})/gi)].map(match => [match[1],match[2]]));
    for (const foreground of ['text', 'text-muted', 'accent']) for (const background of ['bg','surface','soft']) assert.ok(ratio(variables[foreground],variables[background]) >= 4.5, `${selector}: ${foreground} / ${background}`);
    assert.ok(ratio(variables['control-border'], variables.bg) >= 3);
    assert.ok(ratio('#181C22', '#FF914D') >= 4.5);
  }
});
