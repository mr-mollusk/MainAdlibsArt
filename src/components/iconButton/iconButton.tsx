import { Icon } from "..";
import { IIconButton } from "./iconButton.types";
import s from "./iconButton.module.css";

export const IconButton: React.FC<IIconButton> = ({ name, ...rest }) => {
  return (
    <button className={s.iconButton} {...rest}>
      <Icon name={name} fill="black" stroke="black" />
    </button>
  );
};
