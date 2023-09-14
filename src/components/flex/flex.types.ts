import { CSSProperties, ReactNode } from "react";

export interface IFlex {
  children: ReactNode[] | ReactNode;
  width?: CSSProperties["width"];
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}
