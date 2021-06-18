import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weathernow-card-body',
  styleUrl: 'weathernow-card-body.css',
  shadow: true,
})
export class WeathernowCardBody {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
