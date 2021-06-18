import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardHeader } from '../weathernow-card-header';

describe('weathernow-card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardHeader],
      html: `<weathernow-card-header></weathernow-card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <weathernow-card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </weathernow-card-header>
    `);
  });
});
