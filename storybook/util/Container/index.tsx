import React, { ReactNode } from "react";
import { View } from "react-native";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export { Container };
