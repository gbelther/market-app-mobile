import React, { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./styles";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export { Container };
