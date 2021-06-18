import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardFooter } from '../weathernow-card-footer';

describe('weathernow-card-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardFooter],
      html: `<weathernow-card-footer></weathernow-card-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <weathernow-card-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </weathernow-card-footer>
    `);
  });
});
