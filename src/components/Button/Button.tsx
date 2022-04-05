import React from "react";
import { Button as ButtonRn } from "react-native";

import * as Sty from "./styles";

const Button = () => {
  return (
    <Sty.Container testID="test" color="main">
      <ButtonRn title="Button" onPress={() => {}} />
    </Sty.Container>
  );
};

export { Button };
