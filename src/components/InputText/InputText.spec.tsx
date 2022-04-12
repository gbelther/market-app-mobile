import { fireEvent, waitFor } from "@testing-library/react-native";
import theme from "../../styles/theme";
import { renderTheme } from "../../util/tests/RenderTheme";
import { InputText } from "./InputText";

describe("<InputText />", () => {
  it("should be able to render correctly", () => {
    const inputId = "test-01";
    const { queryByTestId } = renderTheme(<InputText id={inputId} />);

    expect(queryByTestId(inputId)).toBeTruthy();
  });

  it("should be able to render the label passed by props", () => {
    const inputLabel = "Test-02";
    const { queryByText } = renderTheme(<InputText label={inputLabel} />);

    expect(queryByText(inputLabel)).toBeTruthy();
  });

  it("should be able to render the input with the value passed by props", () => {
    const inputValue = "Test 03";
    const { queryByDisplayValue } = renderTheme(
      <InputText value={inputValue} />
    );

    expect(queryByDisplayValue(inputValue)).toBeTruthy();
  });

  it("should be able to render the input feedback passed by props", () => {
    const inputFeedbackMessage = "Input feedback message";

    const { getByText } = renderTheme(
      <InputText
        feedback={{
          status: "error",
          message: inputFeedbackMessage,
        }}
      />
    );

    expect(getByText(inputFeedbackMessage)).toBeTruthy();
  });

  it("should be able to render the input feedback with the appropriate color", () => {
    const inputFeedbackId = "input-text-component-feedback";
    const inputFeedbackMessage = "Input feedback message";

    const { getByTestId } = renderTheme(
      <InputText
        feedback={{
          status: "error",
          message: inputFeedbackMessage,
        }}
      />
    );

    const feedbackComponent = getByTestId(inputFeedbackId);
    expect(feedbackComponent).toHaveStyleRule("color", theme.color.error);
  });

  it("should be able to dispatch the onChangeValue prop with the correct value", async () => {
    const inputId = "input-text-component";
    const inputValue = "";
    const inputValueChanged = "test input changed";
    const onChangeValueMock = jest.fn();

    const { getByTestId } = renderTheme(
      <InputText value={inputValue} onChangeValue={onChangeValueMock} />
    );

    const inputComponent = getByTestId(inputId);
    fireEvent.changeText(inputComponent, inputValueChanged);

    await waitFor(() => {
      expect(onChangeValueMock).toHaveBeenCalled();
    });
  });
});
