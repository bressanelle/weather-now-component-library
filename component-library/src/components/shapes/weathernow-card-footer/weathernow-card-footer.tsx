import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weathernow-card-footer',
  styleUrl: 'weathernow-card-footer.css',
  shadow: true,
})
export class WeathernowCardFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
