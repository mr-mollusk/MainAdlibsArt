import { ImgHTMLAttributes } from "react";

export interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}
