import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ThemeProvider } from "styled-components";

import config from "./config";

import Storybook from "./storybook";
import Routes from "./src/routes";
import theme from "./src/styles/theme";

const loadStorybook = config.load_storybook;

const App = () => {
  if (loadStorybook) {
    return (
      <SafeAreaView style={[styles.container, styles.paddingStatusBar]}>
        <Storybook />
      </SafeAreaView>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView
        style={[styles.container, styles.paddingStatusBar]}
      >
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingStatusBar: {
    paddingTop: getStatusBarHeight(),
  },
});

registerRootComponent(App);

export default App;
