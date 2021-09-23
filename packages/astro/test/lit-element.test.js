/**
 * UNCOMMENT: fix "window is not defined" Vite error
import { expect } from 'chai';
import cheerio from 'cheerio';
import { loadFixture } from './test-utils.js';

let fixture;

before(async () => {
  fixture = await loadFixture({
    projectRoot: './fixtures/lit-element/',
    renderers: ['@astrojs/renderer-lit'],
  });
  await fixture.build();
});

describe('LitElement test', () => {
  it('Renders a custom element by tag name', async () => {
    // lit SSR is not currently supported on Node.js < 13
    if (process.versions.node <= '13') {
      return;
    }
    const html = await fixture.readFile('/index.html');
    const $ = cheerio.load(html);

    // test 1: attributes rendered
    expect($('my-element').attr('foo')).to.equal('bar');

    // test 2: shadow rendered
    expect($('my-element').html()).to.include(`<div>Testing...</div>`);
  });

  // Skipped because not supported by Lit
  it.skip('Renders a custom element by the constructor', async () => {
    const html = await fixture.fetch('/ctr/index.html');
    const $ = cheerio.load(html);

    // test 1: attributes rendered
    expect($('my-element').attr('foo')).to.equal('bar');

    // test 2: shadow rendered
    expect($('my-element').html()).to.include(`<div>Testing...</div>`);
  });

  after(async () => {
    // The Lit renderer adds browser globals that interfere with other tests, so remove them now.
    const globals = Object.keys(globalThis.window || {});
    globals.splice(globals.indexOf('global'), 1);
    for (let name of globals) {
      delete globalThis[name];
    }
  });
});
*/

it.skip('is skipped', () => {});
