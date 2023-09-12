import React from "react";
import { IIconMap, TGroupedName } from "../@types";

export const createIconGroup = <T extends Readonly<IIconMap>>(config: T) => {
  const { group, icons } = config;
  return Object.fromEntries(
    Object.entries(icons).map(([name, svg]) => [`${group}:${name}`, svg])
  ) as Record<TGroupedName<keyof T["icons"], T["group"]>, React.ReactNode>;
};
