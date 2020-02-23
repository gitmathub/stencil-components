import { Component, State, Listen, h, Prop } from '@stencil/core';

@Component({
  tag: 'mat-button-group-radio',
  styleUrl: 'button-group-radio.scss',
  shadow: true
})

export class ButtonGroupRadio {
  @Prop({ reflect: true })
  name: string

  @State()
  checked: string

  @Listen('click', { capture: true })
  handleClick() {
    const target = event.target as HTMLInputElement
    this.checked = target.value
    console.log(target, target.value)
  }

  hostData() {
    return {
      "role": "radiogroup",
      "aria-labelledby": this.name,
    }
  }

  childData() {
    // role = "radio"
    // "aria-checked" = "false" >
  }

  render() {
    return (
      <button-group-radio>
        <slot></slot>
      </button-group-radio>
    )
  }
}
