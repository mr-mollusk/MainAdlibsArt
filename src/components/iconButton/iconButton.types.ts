import { ButtonHTMLAttributes } from "react";
import { TIconMap } from "../icon/icon.types";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: TIconMap;
}
