import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'weathernow-card',
  styleUrl: 'weathernow-card.css',
  shadow: true,
})
export class WeathernowCard {
  @Prop() isActiveByDefault: boolean;
  @State() isActive: boolean;

  componentWillLoad() {
    this.isActive = this.isActiveByDefault ? this.isActiveByDefault : false;
  }

  addActive(event: MouseEvent) {
    const card = event.target as HTMLDivElement;
    const alreadyContainsActiveClass = card.classList.contains('active');
    if (!alreadyContainsActiveClass) {
      card.classList.add('active');
    }
  }

  removeActive(event: MouseEvent) {
    const card = event.target as HTMLDivElement;
    card.classList.remove('active');
  }

  render() {
    return (
      <div class={`card  ${this.isActive ? 'active' : ''}`} data-testid="card" onMouseEnter={event => this.addActive(event)} onMouseLeave={event => this.removeActive(event)}>
        <slot name="card-header" />
        <slot name="card-body" />
        <slot name="card-footer" />
      </div>
    );
  }
}
