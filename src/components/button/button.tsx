import React from "react";
import { IButton } from "./button.types";
import s from "./button.module.css";
import clsx from "clsx";

export const Button: React.PropsWithChildren<React.FC<IButton>> = ({
  colorScheme = "primary",
  variant = "contained",
  ...rest
}) => {
  return (
    <button className={clsx(s.button, s[variant], s[colorScheme])} {...rest} />
  );
};
