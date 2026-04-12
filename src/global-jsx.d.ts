import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        text?: string;
        type?: string;
        size?: string;
        shape?: string;
        loading?: boolean;
        disabled?: boolean;
        href?: string;
        onClick?: (e?: Event) => void;
        [key: string]: any;
      };
      'ayong-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        [key: string]: any;
      };
    }
  }
}

export {};
