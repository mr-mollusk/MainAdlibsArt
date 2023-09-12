import { ButtonHTMLAttributes } from "react";
import { TIconMap } from "../icon/icon.types";

export interface IIconbutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: TIconMap;
}
