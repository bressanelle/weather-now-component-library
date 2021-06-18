import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weathernow-card-header',
  styleUrl: 'weathernow-card-header.css',
  shadow: true,
})
export class WeathernowCardHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
