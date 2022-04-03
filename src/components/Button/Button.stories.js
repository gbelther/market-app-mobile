import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Button from ".";

storiesOf("Button", module).add("with text", () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button />
  </View>
));
