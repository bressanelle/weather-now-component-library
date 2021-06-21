import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardFooter } from '../weathernow-card-footer';

describe('weathernow-card-footer', () => {
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

  it('should to render card', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardFooter],
      html: `<weathernow-card-footer></weathernow-card-footer>`,
    });

    const cardFooter = page.root.shadowRoot.querySelector('[data-testid=card-footer]');

    expect(page.root).toBeDefined();
    expect(cardFooter).not.toBeNull();
  });

  it('should to render details', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardFooter],
      html: `<weathernow-card-footer></weathernow-card-footer>`,
    });

    const cardFooter = page.root.shadowRoot.querySelector('[data-testid=card-footer]');
    const sut = page.rootInstance as WeathernowCardFooter;
    sut.isActive = true;

    await page.waitForChanges();

    expect(cardFooter.childElementCount).toBe(2);
  });

  it('should to render correct props values', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardFooter],
      html: `<weathernow-card-footer></weathernow-card-footer>`,
      supportsShadowDom: false,
    });

    const sut = page.rootInstance as WeathernowCardFooter;
    sut.isActive = true;
    sut.pressure = 'pressure';
    sut.humidity = 'humidity';
    sut.lastUpdate = 'today';

    await page.waitForChanges();

    const cardFooterDetails = page.doc.querySelector('.card-footer-details');

    expect(cardFooterDetails.firstElementChild.classList.toString()).toBe('detail');
    expect(cardFooterDetails.firstElementChild.lastElementChild.textContent).toBe('humidity');
    expect(cardFooterDetails.lastElementChild.lastElementChild.textContent).toBe('pressure');
  });
});
