import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AsyncStorage,
} from "react-native";

import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import MobileLoginScreen from "./screens/MobileLoginScreen";
import VerifyMobileScreen from "./screens/VerifyMobileScreen";

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaucned").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="MobileLogin" component={MobileLoginScreen} />
          <AppStack.Screen name="VerifyMobile" component={VerifyMobileScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  }
};

export default App;
