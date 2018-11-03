/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

<<<<<<< HEAD

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
=======
import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';


declare global {

  namespace StencilComponents {
    interface HomePage {

    }
  }

  interface HTMLHomePageElement extends StencilComponents.HomePage, HTMLStencilElement {}

  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };
  interface HTMLElementTagNameMap {
    'home-page': HTMLHomePageElement;
  }
  interface ElementTagNameMap {
    'home-page': HTMLHomePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'home-page': JSXElements.HomePageAttributes;
    }
  }
  namespace JSXElements {
    export interface HomePageAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface Page1 {

    }
  }

  interface HTMLPage1Element extends StencilComponents.Page1, HTMLStencilElement {}

  var HTMLPage1Element: {
    prototype: HTMLPage1Element;
    new (): HTMLPage1Element;
  };
  interface HTMLElementTagNameMap {
    'page-1': HTMLPage1Element;
  }
  interface ElementTagNameMap {
    'page-1': HTMLPage1Element;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-1': JSXElements.Page1Attributes;
    }
  }
  namespace JSXElements {
    export interface Page1Attributes extends HTMLAttributes {

    }
>>>>>>> 37a8d0808cb0eb4cf9e64b98ffa22b82f7ddfd3a
  }


<<<<<<< HEAD
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
=======
declare global {

  namespace StencilComponents {
    interface Page2 {

    }
  }

  interface HTMLPage2Element extends StencilComponents.Page2, HTMLStencilElement {}

>>>>>>> 37a8d0808cb0eb4cf9e64b98ffa22b82f7ddfd3a
  var HTMLPage2Element: {
    prototype: HTMLPage2Element;
    new (): HTMLPage2Element;
  };
<<<<<<< HEAD

  interface HTMLElementTagNameMap {
    'home-page': HTMLHomePageElement
    'my-app': HTMLMyAppElement
    'page-1': HTMLPage1Element
    'page-2': HTMLPage2Element
=======
  interface HTMLElementTagNameMap {
    'page-2': HTMLPage2Element;
>>>>>>> 37a8d0808cb0eb4cf9e64b98ffa22b82f7ddfd3a
  }

  interface ElementTagNameMap {
<<<<<<< HEAD
    'home-page': HTMLHomePageElement;
    'my-app': HTMLMyAppElement;
    'page-1': HTMLPage1Element;
    'page-2': HTMLPage2Element;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
=======
    'page-2': HTMLPage2Element;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-2': JSXElements.Page2Attributes;
    }
  }
  namespace JSXElements {
    export interface Page2Attributes extends HTMLAttributes {

>>>>>>> 37a8d0808cb0eb4cf9e64b98ffa22b82f7ddfd3a
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

<<<<<<< HEAD
}
=======
declare global { namespace JSX { interface StencilJSX {} } }
>>>>>>> 37a8d0808cb0eb4cf9e64b98ffa22b82f7ddfd3a
