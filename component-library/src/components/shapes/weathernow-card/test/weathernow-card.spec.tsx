import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCard } from '../weathernow-card';

describe('weathernow-card', () => {
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
    expect(sut.isActive).toBe(true);
    expect(hoverSpy).toHaveBeenCalledTimes(1);
    expect(card.classList.contains('active')).not.toBe(true);
  });

  it('it should to render slots', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card>
        <p slot='card-header' class='card-header'>card header</p>
        <p slot='card-body' class='card-body'>card body</p>
        <p slot='card-footer' class='card-footer'>card footer</p>
      </weathernow-card>`,
    });

    const cardHeader = page.root.querySelector('.card-header');
    const cardBody = page.root.querySelector('.card-body');
    const cardFooter = page.root.querySelector('.card-footer');

    expect(cardHeader).toEqualHtml(`<p class='card-header' slot='card-header'>card header</p>`);
    expect(cardBody).toEqualHtml(`<p class='card-body' slot='card-body'>card body</p>`);
    expect(cardFooter).toEqualHtml(`<p class='card-footer' slot='card-footer'>card footer</p>`);
  });
});
