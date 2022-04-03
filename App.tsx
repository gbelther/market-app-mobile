import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import Storybook from "./storybook";
import Routes from "./src/routes";

const loadStorybook = false;

const App = () => {
  if (loadStorybook) {
    return (
      <SafeAreaView style={[styles.container, styles.paddingStatusBar]}>
        <Storybook />
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={[styles.container, styles.paddingStatusBar]}>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </GestureHandlerRootView>
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
