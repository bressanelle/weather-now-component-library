import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'weathernow-card-footer',
  styleUrl: 'weathernow-card-footer.css',
  shadow: true,
})
export class WeathernowCardFooter {
  @Prop() pressure: string;
  @Prop() humidity: string;
  @Prop() lastUpdate: string;
  @Prop() isActive: boolean;

  renderDetails() {
    return (
      <div class="card-footer-details">
        <div class="detail">
          <span>humidity</span>
          <p>{this.humidity}</p>
        </div>
        <div class="detail">
          <span>pressure</span>
          <p>{this.pressure}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class={`card-footer  ${this.isActive ? 'active' : ''}`} data-testid="card-footer">
        {this.isActive ? this.renderDetails() : ''}
        <div class="last-update">{this.lastUpdate}</div>
      </div>
    );
  }
}
