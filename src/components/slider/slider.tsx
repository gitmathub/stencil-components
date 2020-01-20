import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mat-slider',
  styleUrl: 'slider.css',
  shadow: true
})
export class Slider {
  @Prop({ reflect: true })
  rangeValues: string[] = ['10:30', '11:00', '12:00']

  @State()
  sliderValue: number

  handleChange(event) {
    this.sliderValue = event.target.value
  }

  render() {
    console.log(this)

    return (
      <Host>
        <div class="slider-container">
          <input id="rangeSlider" type="range" min="1" max="100" value="50" class="slider"
            onChange={(event) => this.handleChange(event)}
          ></input>
          <input name="dummy"></input>
        </div>
        <div>
          <span>value: {this.sliderValue}</span>
        </div>
      </Host>
    );
  }

}
