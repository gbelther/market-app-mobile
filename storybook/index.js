// if you use expo remove this line
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import App from "../App";
import { loadStories } from "./storyLoader";
import { Container } from "./util/Container";

import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator((getStory) => <Container>{getStory()}</Container>);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: require("@react-native-async-storage/async-storage").default,
});

registerRootComponent(StorybookUIRoot);

export default StorybookUIRoot;
