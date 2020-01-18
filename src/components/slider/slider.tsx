import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-slider',
  styleUrl: 'slider.css',
  shadow: true
})
export class Slider {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
