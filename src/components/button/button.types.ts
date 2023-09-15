import { ButtonHTMLAttributes } from "react";

export type AvaliableButtonColorSchemes = "primary" | "secondary";
export type AvaliableButtonVariants = "contained" | "outlined" | "text";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: AvaliableButtonColorSchemes;
  variant?: AvaliableButtonVariants;
}
