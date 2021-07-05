import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export type NavProps = {
  home: any;
  find: any;
  newTab: any;
  profile: any;
};
const Tab = createMaterialBottomTabNavigator();

const Navigation: React.FC<NavProps> = ({ home, find, newTab, profile }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Find" component={find} />
        <Tab.Screen name="New" component={newTab} />
        <Tab.Screen name="Profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
