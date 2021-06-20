import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'weathernow-card-body',
  styleUrl: 'weathernow-card-body.css',
  shadow: true,
})
export class WeathernowCardBody {
  @Prop() readonly test: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
