import { Component, h } from '@stencil/core';

@Component({
  tag: 'weathernow-topbar',
  styleUrl: 'weathernow-topbar.css',
  shadow: true,
})
export class WeathernowTopbar {
  render() {
    return (
      <nav class="nav-topbar" data-testid="nav">
        <img
          data-testid="img"
          src="https://gist.githubusercontent.com/deprecat3d/7d98239740336dd1200ecc3739aff368/raw/50b30f7b9d51d3d432ecbc2a1e9131480175879a/logo.svg"
          alt="weather now logo"
        />
      </nav>
    );
  }
}
