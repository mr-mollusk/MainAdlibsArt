import { ButtonHTMLAttributes } from "react";

export type AvaliableButtonColorSchemes = "primary" | "secondary";
export type AvaliableButtonVariants = "Contained" | "Outlined" | "Text";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: AvaliableButtonColorSchemes;
  variant?: AvaliableButtonVariants;
}
