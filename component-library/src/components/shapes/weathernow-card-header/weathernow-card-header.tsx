import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'weathernow-card-header',
  styleUrl: 'weathernow-card-header.css',
  shadow: true,
})
export class WeathernowCardHeader {
  @Prop() location: string;
  render() {
    return (
      <Fragment>
        <div class="card-header" data-testid="card-header">
          <p>{this.location}</p>
        </div>
        <hr class="divider" />
      </Fragment>
    );
  }
}
