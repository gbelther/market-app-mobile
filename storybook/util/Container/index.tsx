import React, { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../src/styles/theme";

import styles from "./styles";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export { Container };
