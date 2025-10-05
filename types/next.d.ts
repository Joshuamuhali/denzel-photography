import type { ComponentType } from 'react';

declare module 'next/link' {
  import { AnchorHTMLAttributes, ComponentType } from 'react';
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  
  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, NextLinkProps {}
  
  declare const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/image' {
  import { ImgHTMLAttributes, ComponentType } from 'react';
  import { ImageProps as NextImageProps } from 'next/dist/client/image';
  
  export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'>, NextImageProps {}
  
  declare const Image: ComponentType<ImageProps>;
  export default Image;
}
