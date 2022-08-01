/// <reference types="node" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  // export const ReactComponent: React.FunctionComponent<
  //   React.SVGProps<SVGSVGElement> & { title?: string }
  // >

  // const src: string
  // export default src
  // export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>

  // const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  // export default ReactComponent

  interface ISvg extends React.ComponentPropsWithRef<'svg'> {
    width: string | number;
    height: string | number;
    fill?: string | 'current' | 'currentColor'; // color: ;
  }

  const content: React.ElementType<ISvg & { title?: string }>;
  export default content;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace NodeJS {
  interface Process extends NodeJS.Process {
    browser?: string;
  }
}
