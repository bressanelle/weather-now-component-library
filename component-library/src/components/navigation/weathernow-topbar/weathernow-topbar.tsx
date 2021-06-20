import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'weathernow-topbar',
  styleUrl: 'weathernow-topbar.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class WeathernowTopbar {
  private logo = 'logo.svg';
  render() {
    return (
      <nav class="nav-topbar" data-testid="nav">
        <img data-testid="img" src={getAssetPath(`./assets/images/${this.logo}`)} alt="weather now logo" />
      </nav>
    );
  }
}
