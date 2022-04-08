import React from "react";
import { storiesOf } from "@storybook/react-native";

import { InputText } from "./InputText";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("InputText", module)
  .add("default", () => (
    <InputText value={text("Input Value", "Value input default")} />
  ))
  .add("with feedback success", () => (
    <InputText
      label="Label Test Success"
      feedback={{
        status: "success",
        message: "Success message status",
      }}
      showFeedbackBorderColor={boolean("Show border color", true)}
      value={text("Input Value", "Value input with feedback success")}
    />
  ))
  .add("with feedback error", () => (
    <InputText
      label="Label Test Error"
      feedback={{
        status: "error",
        message: "Error message status",
      }}
      showFeedbackBorderColor={boolean("Show border color", true)}
      value={text("Input Value", "Value input with feedback error")}
    />
  ));
