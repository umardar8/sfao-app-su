import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ScholarshipScreen from "../screens/ScholarshipScreen";
import DonorScreen from "../screens/DonorScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Become Subscriber' component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
