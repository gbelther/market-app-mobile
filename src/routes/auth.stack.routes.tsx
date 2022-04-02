import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

const AuthStackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export { AuthStackRoutes };
