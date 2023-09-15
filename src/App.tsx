import React from "react";
import { Button, Icon, IconButton, InputADS2 } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <Button>
        <Icon name="icons:delete" />Я - реакт, тестирую ветки
      </Button>
      <InputADS2 iconLeft={<Icon name="icons:user" fill="blue" />} iconRight={<Icon name="icons:eye" />} />
    </div>
  );
};

export default App;
