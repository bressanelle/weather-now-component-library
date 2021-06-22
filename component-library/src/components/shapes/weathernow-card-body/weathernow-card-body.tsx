import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'weathernow-card-body',
  styleUrl: 'weathernow-card-body.css',
  shadow: true,
})
export class WeathernowCardBody {
  @Prop() temperature: string;
  @Prop() temperatureColor: 'red' | 'orange' | 'blue';
  @Prop() loading: boolean;
  @Prop() error: boolean;

  private loader = 'loader.svg';

  renderLoader() {
    return (
      <div data-testid="loading" class="loading">
        <img
          data-testid="loader"
          src="https://gist.githubusercontent.com/deprecat3d/7d98239740336dd1200ecc3739aff368/raw/50b30f7b9d51d3d432ecbc2a1e9131480175879a/loader.svg"
          alt="loading..."
        />
      </div>
    );
  }
  renderError() {
    return (
      <div data-testid="error" class="error">
        <span>Something went wrong</span>
        <button>Try Again</button>
      </div>
    );
  }

  render() {
    if (this.loading) {
      return this.renderLoader();
    }

    if (this.error) {
      return this.renderError();
    }

    return (
      <div class="card-body" data-testid="card-body">
        <span data-testid="temperature" class={`temperature-${this.temperatureColor}`}>
          {this.temperature}
        </span>
      </div>
    );
  }
}
