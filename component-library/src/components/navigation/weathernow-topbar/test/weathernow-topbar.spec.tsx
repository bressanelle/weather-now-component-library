import { newSpecPage } from '@stencil/core/testing';
import { WeathernowTopbar } from '../weathernow-topbar';

describe('weathernow-topbar', () => {
  it('it should render nav', async () => {
    const page = await newSpecPage({
      components: [WeathernowTopbar],
      html: `<weathernow-topbar></weathernow-topbar>`,
    });

    const nav = page.root.shadowRoot.querySelector('[data-testid=nav]') as HTMLElement;

    expect(nav).toBeDefined();
  });

  it('it should render logo', async () => {
    const page = await newSpecPage({
      components: [WeathernowTopbar],
      html: `<weathernow-topbar></weathernow-topbar>`,
    });

    // for test environment stencil includes http://testing.stenciljs.com/
    const imageCorrectPath = 'http://testing.stenciljs.com/assets/images/logo.svg';
    const img = page.root.shadowRoot.querySelector('[data-testid=img]') as HTMLImageElement;

    expect(img.src).toEqual(imageCorrectPath);
  });
});
