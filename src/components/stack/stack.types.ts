import { ReactNode } from "react";

export type AvaliableStackDirections = "row" | "column";

export interface IStack {
  children?: ReactNode;
  width?: number;
  direction?: AvaliableStackDirections;
  spacing?: number;
}
