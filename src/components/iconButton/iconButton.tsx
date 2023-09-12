import { Icon } from "..";
import { IIconbutton } from "./iconButton.types";
import s from "./iconButton.module.css";

export const IconButton: React.FC<IIconbutton> = ({ name, ...rest }) => {
  return (
    <button className={s.iconButton} {...rest}>
      <Icon name={name} fill="black" stroke="black" />
    </button>
  );
};
