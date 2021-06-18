import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weathernow-card',
  styleUrl: 'weathernow-card.css',
  shadow: true,
})
export class WeathernowCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
