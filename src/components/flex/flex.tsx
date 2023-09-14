import { getInlineStyle } from "../../utils";
import { IFlex } from "./flex.types";
import s from "./flex.module.css";

export const Flex: React.FC<IFlex> = ({
  children,
  width = "100%",
  direction = "row",
  align = "baseline",
  justify = "flex-start",
  wrap = "nowrap",
}) => {
  return (
    <div
      style={getInlineStyle({
        style: {},
        variables: { width, direction, align, justify, wrap },
      })}
      className={s.flex}
    >
      {children}
    </div>
  );
};
