import React from "react";
import { Icon } from "..";
import { IInput } from "./input.types";
import s from "./input.module.css";

export const InputADS2: React.PropsWithChildren<React.FC<IInput>> = ({
    iconLeft,
    iconRight,
    ...rest
}) => {
    return (
        <div className={s.input_wrapper}>
            {iconLeft && iconLeft}<input className={s.input} {...rest} placeholder="Placeholder Text.."/>{iconRight && iconRight}
        </div>
    );
}