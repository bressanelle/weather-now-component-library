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

    const imageCorrectPath = 'https://gist.githubusercontent.com/deprecat3d/7d98239740336dd1200ecc3739aff368/raw/50b30f7b9d51d3d432ecbc2a1e9131480175879a/logo.svg';
    const img = page.root.shadowRoot.querySelector('[data-testid=img]') as HTMLImageElement;

    expect(img.src).toEqual(imageCorrectPath);
  });
});
