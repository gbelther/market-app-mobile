import "jest-styled-components/native";
import { ReactNode } from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "../../styles/theme";

const renderTheme = (children: ReactNode): RenderAPI => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export { renderTheme };
