import {InputHTMLAttributes} from "react";
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}