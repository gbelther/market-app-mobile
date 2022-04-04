import React from "react";
import { render } from "@testing-library/react-native";

import Button from ".";

describe("<Button />", () => {
  it("should be able to be correctly", () => {
    const { container } = render(<Button />);

    expect(container).toBeTruthy();
  });
});
