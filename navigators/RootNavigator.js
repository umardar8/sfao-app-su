import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ScholarshipScreen from "../screens/ScholarshipScreen";
import DonorScreen from "../screens/DonorScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Scholarships' component={ScholarshipScreen} />
      <Stack.Screen name='Donors' component={DonorScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
