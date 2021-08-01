import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { appearanceStore } from "../../stores/appearanceStore";
import Icons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "native-base";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";

//signup
import SignUp from "../../containers/SignUp/SignUp";
//screens
import { HomeStackScreen } from "../Stacks/Stacks";
import { FindStackScreen } from "../Stacks/Stacks";
import { NewStackScreen } from "../Stacks/Stacks";
import { ChatStackScreen } from "../Stacks/Stacks";
import { ProfileStackScreen } from "../Stacks/Stacks";

const tab = createBottomTabNavigator();

type NavProps = {
  theme: any;
};
const Navigation: React.FC<NavProps> = ({ theme }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (appearanceStore.platform === "ios") {
      setHeight(80);
    } else setHeight(55);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {appearanceStore.darkModeBool ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}

      {authStore.loggedIn ? (
        <tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              height: height,
            },
          }}
        >
          <tab.Screen
            name={"Home"}
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icons name="home" size={size} color={color} />
              ),
            }}
          />
          <tab.Screen
            name={"Find"}
            component={FindStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={size} color={color} />
              ),
            }}
          />
          <tab.Screen
            name={"New"}
            component={NewStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="plus" size={size} color={color} />
              ),
            }}
          />
          <tab.Screen
            name={"Chat"}
            component={ChatStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icons name="chatbubble" size={size} color={color} />
              ),
            }}
          />
          <tab.Screen
            name={"Profile"}
            component={ProfileStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" size={size} color={color} />
              ),
            }}
          />
        </tab.Navigator>
      ) : (
        <tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              height: height,
            },
          }}
        >
          <tab.Screen
            name="SignUp"
            component={SignUp}
            options={{ tabBarVisible: false }}
          />
        </tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default inject("authStore")(observer(Navigation));
