/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MatSlider {
    'rangeValues': string[];
  }
}

declare global {


  interface HTMLMatSliderElement extends Components.MatSlider, HTMLStencilElement {}
  var HTMLMatSliderElement: {
    prototype: HTMLMatSliderElement;
    new (): HTMLMatSliderElement;
  };
  interface HTMLElementTagNameMap {
    'mat-slider': HTMLMatSliderElement;
  }
}

declare namespace LocalJSX {
  interface MatSlider {
    'rangeValues'?: string[];
  }

  interface IntrinsicElements {
    'mat-slider': MatSlider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'mat-slider': LocalJSX.MatSlider & JSXBase.HTMLAttributes<HTMLMatSliderElement>;
    }
  }
}


