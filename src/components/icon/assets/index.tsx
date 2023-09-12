import { createIconGroup } from "../../../utils";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as Eye } from "./eye.svg";
import { ReactComponent as EyeClosed } from "./eyeClosed.svg";
import { ReactComponent as Search } from "./search.svg";

export const iconsMap = createIconGroup({
  group: "icons",
  icons: {
    user: <User />,
    email: <Email />,
    eye: <Eye />,
    eyeClosed: <EyeClosed />,
    search: <Search />,
  },
} as const);
