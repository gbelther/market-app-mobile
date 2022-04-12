import React, { useState } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewProps } from "react-native";

import * as Sty from "./styles";

interface IFeedback {
  status: "error" | "success" | string;
  message?: string;
}

interface IProps {
  id?: string;
  label?: string;
  feedback?: IFeedback;
  showFeedbackBorderColor?: boolean;
  value?: string;
  onChangeValue?: (value: string) => void;
}

const InputText = ({
  id,
  label = "",
  feedback,
  showFeedbackBorderColor = false,
  value,
  onChangeValue,
}: IProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputBlur = () => {
    setIsFocus(false);
  };

  const handleTextChange = (textChanged: string) => {
    onChangeValue && onChangeValue(textChanged);
  };

  return (
    <Sty.Container testID={id}>
      {!!label && <Sty.Label>{label}</Sty.Label>}
      <Sty.InputWrapper>
        <Sty.Input
          testID="input-text-component"
          value={value}
          isFocus={isFocus}
          status={showFeedbackBorderColor && feedback?.status}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={handleTextChange}
        />
      </Sty.InputWrapper>
      {feedback && feedback.message && (
        <Sty.Feedback
          testID="input-text-component-feedback"
          status={feedback.status}
        >
          {feedback.message}
        </Sty.Feedback>
      )}
    </Sty.Container>
  );
};

export { InputText };
