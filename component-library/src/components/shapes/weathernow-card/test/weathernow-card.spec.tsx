import { newSpecPage } from '@stencil/core/testing';
import { WeathernowCard } from '../weathernow-card';

describe('weathernow-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeathernowCard],
      html: `<weathernow-card></weathernow-card>`,
    });
    expect(page.root).toEqualHtml(`
      <weathernow-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </weathernow-card>
    `);
  });
});
