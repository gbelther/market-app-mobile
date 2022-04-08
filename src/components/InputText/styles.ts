import styled, { DefaultTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type Status = "error" | "success" | string;

interface IInputProps {
  isFocus?: boolean;
  status?: Status;
}

interface IFeedbackProps {
  status?: Status;
}

const getFeedbackColor = (status: Status, theme: DefaultTheme) => {
  switch (status) {
    case "error":
      return theme.color.error;
    case "success":
      return theme.color.success;
    default:
      return theme.color.dark_02;
  }
};

export const Container = styled.View`
  width: 100%;
`;

export const LabelWrapper = styled.View``;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fontFamilies.primary_600};
  color: ${({ theme }) => theme.color.dark_03};
  padding-left: 2px;
`;

export const InputWrapper = styled.View``;

export const Input = styled.TextInput<IInputProps>`
  color: ${({ theme }) => theme.color.dark_01};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fontFamilies.primary_400};
  line-height: ${RFValue(16 * 1.25)}px;
  border-color: ${({ theme, isFocus, status }) =>
    status
      ? getFeedbackColor(status, theme)
      : isFocus
      ? theme.color.main
      : theme.color.light_03};
  border-width: 1px;
  border-radius: 4px;
  padding: 0 4px;
`;

export const FeedbackWrapper = styled.View``;

export const Feedback = styled.Text<IFeedbackProps>`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fontFamilies.primary_700};
  color: ${({ theme, status }) => getFeedbackColor(status, theme)};
  padding-left: 2px;
`;
