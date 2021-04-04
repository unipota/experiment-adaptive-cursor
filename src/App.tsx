import React from "react";
import Pointer from "./Pointer";
import Text from "./Text";

import "./style.css";

const App = () => {
  return (
    <div className="App">
      <Pointer form="Pointer" />
      <div className="wrap">
        <Text content={"愛のある豊かでユニークな書体"} />
      </div>
    </div>
  );
};

export default App;
