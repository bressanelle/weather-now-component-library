import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCard } from '../weathernow-card';

describe('weathernow-card', () => {
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

  it('it should render card', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;

    expect(page.root).toBeTruthy();
    expect(card).toBeDefined();
    expect(card.childElementCount).toEqual(3);
  });

  it('it should not to contain class active by default', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;

    expect(card.classList.contains('active')).not.toBe(true);
  });

  it('it should add class active if @Prop() isActiveByDefault is true', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const sut = page.rootInstance as WeathernowCard;
    sut.isActiveByDefault = true;
    sut.componentWillLoad();
    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;

    await page.waitForChanges();

    expect(sut.isActiveByDefault).toBe(true);
    expect(sut.isActive).toBe(true);
    expect(card.classList.contains('active')).toBe(true);
  });

  it('it should to keep class active when an activated card by default is hovered', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const sut = page.rootInstance as WeathernowCard;
    sut.isActiveByDefault = true;
    sut.componentWillLoad();
    await page.waitForChanges();

    const hoverSpy = jest.fn();

    const hoverEvent = new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    card.addEventListener('mouseenter', hoverSpy);
    card.dispatchEvent(hoverEvent);

    expect(sut.isActiveByDefault).toBe(true);
    expect(sut.isActive).toBe(true);
    expect(hoverSpy).toHaveBeenCalledTimes(1);
    expect(card.classList.contains('active')).toBe(true);
  });

  it('it should to remove class active when mouseleave', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const sut = page.rootInstance as WeathernowCard;
    sut.isActiveByDefault = true;
    sut.componentWillLoad();
    await page.waitForChanges();

    const hoverSpy = jest.fn();

    const hoverEvent = new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    card.addEventListener('mouseleave', hoverSpy);
    card.dispatchEvent(hoverEvent);

    expect(sut.isActiveByDefault).toBe(true);
    expect(sut.isActive).not.toBe(true);
    expect(hoverSpy).toHaveBeenCalledTimes(1);
    expect(card.classList.contains('active')).not.toBe(true);
    expect(sut.isActive).not.toBe(true);
  });

  it('it should to pass props to card-header', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    const cardHeader = card.firstElementChild;
    const sut = page.rootInstance as WeathernowCard;
    sut.location = 'Colatina, ES';

    await page.waitForChanges();

    expect(cardHeader).toEqualHtml(`<weathernow-card-header location='Colatina, ES'></weathernow-card-header>`);
  });

  it('it should to pass props to card-body', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    const cardBody = card.children[1];
    const sut = page.rootInstance as WeathernowCard;
    sut.temperature = '10';
    sut.temperatureColor = 'orange';

    await page.waitForChanges();

    expect(cardBody).toEqualHtml(`<weathernow-card-body temperature='10' temperaturecolor='orange'></weathernow-card-body>`);
  });

  it('it should to pass props to card-footer', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    const cardFooter = card.lastElementChild;
    const sut = page.rootInstance as WeathernowCard;
    sut.isActive = true;
    sut.lastUpdate = 'today';
    sut.humidity = 'humidity';
    sut.pressure = 'pressure';

    await page.waitForChanges();

    expect(cardFooter).toEqualHtml(`<weathernow-card-footer isactive="" pressure="pressure" humidity="humidity" lastUpdate="today"></weathernow-card-footer>`);
  });

  it('it should prevent to render card-footer on loading or error', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });

    const card = page.root.shadowRoot.querySelector('[data-testid=card]') as HTMLDivElement;
    const sut = page.rootInstance as WeathernowCard;

    sut.loading = true;
    sut.error = true;

    await page.waitForChanges();

    expect(card.childElementCount).toBe(2);
    expect(card.lastElementChild).not.toBe(`<weathernow-card-footer></weathernow-card-footer>`);
  });
});
