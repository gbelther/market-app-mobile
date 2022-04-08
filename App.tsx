import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import config from "./config";

import Storybook from "./storybook";
import Routes from "./src/routes";
import theme from "./src/styles/theme";

const loadStorybook = config.load_storybook;

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
