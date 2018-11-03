/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


export namespace Components {

  interface HomePage {}
  interface HomePageAttributes extends StencilHTMLAttributes {}

  interface MyApp {}
  interface MyAppAttributes extends StencilHTMLAttributes {}

  interface Page1 {}
  interface Page1Attributes extends StencilHTMLAttributes {}

  interface Page2 {}
  interface Page2Attributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'HomePage': Components.HomePage;
    'MyApp': Components.MyApp;
    'Page1': Components.Page1;
    'Page2': Components.Page2;
  }

  interface StencilIntrinsicElements {
    'home-page': Components.HomePageAttributes;
    'my-app': Components.MyAppAttributes;
    'page-1': Components.Page1Attributes;
    'page-2': Components.Page2Attributes;
  }


  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLMyAppElement extends Components.MyApp, HTMLStencilElement {}
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };

  interface HTMLPage1Element extends Components.Page1, HTMLStencilElement {}
  var HTMLPage1Element: {
    prototype: HTMLPage1Element;
    new (): HTMLPage1Element;
  };

  interface HTMLPage2Element extends Components.Page2, HTMLStencilElement {}
  var HTMLPage2Element: {
    prototype: HTMLPage2Element;
    new (): HTMLPage2Element;
  };

  interface HTMLElementTagNameMap {
    'home-page': HTMLHomePageElement
    'my-app': HTMLMyAppElement
    'page-1': HTMLPage1Element
    'page-2': HTMLPage2Element
  }

  interface ElementTagNameMap {
    'home-page': HTMLHomePageElement;
    'my-app': HTMLMyAppElement;
    'page-1': HTMLPage1Element;
    'page-2': HTMLPage2Element;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
