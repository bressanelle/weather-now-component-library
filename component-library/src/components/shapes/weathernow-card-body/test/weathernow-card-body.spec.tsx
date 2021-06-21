import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardBody } from '../weathernow-card-body';

describe('weathernow-card-body', () => {
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
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
    });

    const cardBody = page.root.shadowRoot.querySelector('[data-testid=card-body]');

    expect(page.root).toBeTruthy();
    expect(cardBody).not.toBeNull();
  });

  it('should to render @Prop() temperature', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
    });

    const sut = page.rootInstance as WeathernowCardBody;
    const cardBody = page.root.shadowRoot.querySelector('[data-testid=card-body]');
    sut.temperature = '10';

    await page.waitForChanges();

    expect(cardBody.childElementCount).toBe(1);
    expect(cardBody.children[0].textContent).toBe('10');
  });

  it('should to render text blue', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
      attachStyles: true,
    });

    const sut = page.rootInstance as WeathernowCardBody;
    const temperatureSpan = page.root.shadowRoot.querySelector('[data-testid=temperature]') as HTMLSpanElement;
    sut.temperature = '10';
    sut.temperatureColor = 'blue';

    await page.waitForChanges();

    expect(temperatureSpan.classList.contains('temperature-blue')).toBe(true);
  });

  it('should to render text orange', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
      attachStyles: true,
    });

    const sut = page.rootInstance as WeathernowCardBody;
    const temperatureSpan = page.root.shadowRoot.querySelector('[data-testid=temperature]') as HTMLSpanElement;
    sut.temperature = '10';
    sut.temperatureColor = 'orange';

    await page.waitForChanges();

    expect(temperatureSpan.classList.contains('temperature-orange')).toBe(true);
  });

  it('should to render text red', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
      attachStyles: true,
    });

    const sut = page.rootInstance as WeathernowCardBody;
    const temperatureSpan = page.root.shadowRoot.querySelector('[data-testid=temperature]') as HTMLSpanElement;

    sut.temperature = '10';
    sut.temperatureColor = 'red';

    await page.waitForChanges();

    expect(temperatureSpan.classList.contains('temperature-red')).toBe(true);
  });

  it('should to render loader before value', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
      supportsShadowDom: false,
    });

    const sut = page.rootInstance as WeathernowCardBody;
    sut.loading = true;
    await page.waitForChanges();

    const loadingDiv = page.doc.querySelector('[data-testid=loading]') as HTMLDivElement;
    const loaderSVG = page.doc.querySelector('[data-testid=loader]') as HTMLImageElement;

    expect(loadingDiv).toBeTruthy();
    expect(loadingDiv).toBeDefined();
    expect(loadingDiv).not.toBeNull();
    expect(loaderSVG).toBeTruthy();
    expect(loaderSVG).toBeDefined();
    expect(loaderSVG).not.toBeNull();
    expect(loaderSVG.src).not.toBeNull();
    expect(loaderSVG.src).not.toBeUndefined();
  });
});
