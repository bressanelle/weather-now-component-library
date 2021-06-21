import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardHeader } from '../weathernow-card-header';

describe('weathernow-card-header', () => {
  /**
   * remove console warning "the prop x is immutable but was modified from within component"
   * on run jest --verbose
   */

  const consoleWarnFn = console.warn;

  beforeEach(async () => {
    console.warn = (...args: any[]) => {
      const arg1 = args[0];
      if (typeof arg1 === 'string' && arg1.includes('stenciljs.com/docs/properties#prop-mutability')) return undefined;

      consoleWarnFn(...args);
    };
  });

  afterEach(() => {
    console.warn = consoleWarnFn;
  });

  it('should render card header', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardHeader],
      html: `<weathernow-card-header></weathernow-card-header>`,
    });

    const cardHeader = page.root.shadowRoot.querySelector('[data-testid=card-header]');

    expect(page.root).toBeTruthy();
    expect(cardHeader).not.toBeNull();
  });

  it('should to render @Prop() location', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardHeader],
      html: `<weathernow-card-header></weathernow-card-header>`,
    });

    const cardHeader = page.root.shadowRoot.querySelector('[data-testid=card-header]');

    const sut = page.rootInstance as WeathernowCardHeader;

    sut.location = 'Awesome location, Country';
    await page.waitForChanges();

    expect(cardHeader.childElementCount).toBe(1);
    expect(cardHeader.firstChild.textContent).toBe('Awesome location, Country');
  });

  it('should to render empty paragraph by default', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardHeader],
      html: `<weathernow-card-header></weathernow-card-header>`,
    });

    const cardHeader = page.root.shadowRoot.querySelector('[data-testid=card-header]');

    expect(cardHeader.childElementCount).toBe(1);
    expect(cardHeader.firstChild.textContent).toBe('');
  });
});
