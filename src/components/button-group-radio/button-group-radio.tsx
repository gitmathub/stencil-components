import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'mat-button-group-radio',
  styleUrl: 'button-group-radio.css',
  shadow: true
})

export class ButtonGroupRadio {
  @State()
  value: string

  render() {
    console.log(this)
    return (
      <button-group-radio>
        < slot ></slot >
      </button-group-radio>
    )
  }
}
