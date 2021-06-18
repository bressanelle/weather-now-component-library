import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCardBody } from '../weathernow-card-body';

describe('weathernow-card-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeathernowCardBody],
      html: `<weathernow-card-body></weathernow-card-body>`,
    });
    expect(page.root).toEqualHtml(`
      <weathernow-card-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </weathernow-card-body>
    `);
  });
});
