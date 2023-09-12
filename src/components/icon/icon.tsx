import { getInlineStyle } from "../../utils";
import { iconsMap } from "./assets";
import { IIcon } from "./icon.types";
import s from "./icon.module.css";
import clsx from "clsx";

export const Icon: React.FC<IIcon> = ({
  name,
  fill,
  stroke,
  size = 24,
  className,
}) => {
  return (
    <div
      style={getInlineStyle({ style: {}, variables: { fill, stroke, size } })}
      className={clsx(
        s.icon,
        { [s.fill]: fill, [s.stroke]: stroke, [s.size]: size },
        className
      )}
    >
      {iconsMap[name]}
    </div>
  );
};
