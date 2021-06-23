import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'weathernow-card',
  styleUrl: 'weathernow-card.css',
  shadow: true,
})
export class WeathernowCard {
  @Prop() isActiveByDefault: boolean;
  @Prop() location: string;
  @Prop() temperature: string;
  @Prop() temperatureColor: 'orange' | 'blue' | 'red';
  @Prop() humidity: string;
  @Prop() pressure: string;
  @Prop() lastUpdate: string;
  @Prop() loading: boolean;
  @Prop() error: boolean;

  @State() isActive: boolean;
  @Event() retryEvent: EventEmitter<string>;

  componentWillLoad() {
    this.isActive = this.isActiveByDefault ? this.isActiveByDefault : false;
  }

  onAddActive(card: HTMLDivElement) {
    const alreadyContainsActiveClass = card.classList.contains('active');
    if (!alreadyContainsActiveClass) {
      card.classList.add('active');
      this.isActive = true;
    }
  }

  onRemoveActive(card: HTMLDivElement) {
    card.classList.remove('active');
    this.isActive = false;
  }

  onRetryEvent() {
    this.retryEvent.emit(this.location);
  }

  render() {
    return (
      <div
        class={`card  ${this.isActive ? 'active' : ''}`}
        data-testid="card"
        onMouseEnter={event => this.onAddActive(event.target as HTMLDivElement)}
        onMouseLeave={event => this.onRemoveActive(event.target as HTMLDivElement)}
      >
        <weathernow-card-header location={this.location}></weathernow-card-header>
        <weathernow-card-body
          onRetryEvent={this.onRetryEvent.bind(this)}
          error={this.error}
          loading={this.loading}
          temperature={this.temperature}
          temperatureColor={this.temperatureColor}
        ></weathernow-card-body>

        {!this.loading && !this.error ? (
          <weathernow-card-footer isActive={this.isActive} pressure={this.pressure} humidity={this.humidity} lastUpdate={this.lastUpdate}></weathernow-card-footer>
        ) : (
          ''
        )}
      </div>
    );
  }
}
