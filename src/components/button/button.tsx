import React from "react";
import { IButton } from "./button.types";
import s from "./button.module.css";
import clsx from "clsx";
import { getInlineStyle } from "../../utils";

export const Button: React.PropsWithChildren<React.FC<IButton>> = ({
  colorScheme = "primary",
  variant = "Contained",
  children,
  ...rest
}) => {
  return (
    <button
      style={getInlineStyle({
        style: {},
        variables: {},
      })}
      className={clsx(s.button, {
        [s.contained]: variant === "Contained",
        [s.outlined]: variant === "Outlined",
        [s.text]: variant === "Text",
        [s.secondary]: colorScheme === "secondary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
