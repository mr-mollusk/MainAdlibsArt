import { CSSProperties } from "react";
import { iconsMap } from "./assets";

export type Color = CSSProperties["color"];
export type TIconMap = keyof typeof iconsMap;

export interface IIcon {
  name: TIconMap;
  fill?: Color;
  stroke?: Color;
  size?: number;
  className?: string;
}
