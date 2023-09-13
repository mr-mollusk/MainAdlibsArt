import { IStack } from "./stack.types";
import s from "./stack.module.css";
import { getInlineStyle } from "../../utils";
import clsx from "clsx";

export const Stack: React.FC<IStack> = ({
  children,
  direction = "row",
  width,
  spacing,
}) => {
  return (
    <div
      style={getInlineStyle({
        style: {},
        variables: {
          direction,
          spacing: `${!width && spacing && spacing / 2}px`,
          width: `${width && width}px`,
        },
      })}
      className={clsx(s.stack, direction === "column" ? s.column : s.row, {
        [s.dynamic]: width,
      })}
    >
      {children}
    </div>
  );
};
