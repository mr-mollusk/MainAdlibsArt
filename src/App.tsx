import React from "react";
import { Button } from "./components";
import { iconsMap } from "./components/icon/assets";
import { Icon } from "./components/icon";

const App: React.FC = () => {
  return (
    <div>
      <Button>Я - реакт, тестирую ветки</Button>
      <Icon name={"icons:user"} />
    </div>
  );
};

export default App;
