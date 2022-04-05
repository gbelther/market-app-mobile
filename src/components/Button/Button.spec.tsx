import React from "react";

import { renderTheme } from "../../util/tests/RenderTheme";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should be able to be correctly", () => {
    const { getByTestId } = renderTheme(<Button />);

    const component = getByTestId("test");
    expect(component).toHaveStyleRule("opacity", 0.5);
  });
});
