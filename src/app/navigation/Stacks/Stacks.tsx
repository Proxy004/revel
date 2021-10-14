import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Find from "../../containers/Find/Find";
import Home from "../../containers/Home/Home";
import New from "../../containers/New/New";
import Profile from "../../containers/Profile/Profile";
import Chat from "../../containers/Chat/Chat";
import Header from "../../components/Header/Header";
import { notifyListeners } from "mobx/dist/internal";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const FindStack = createStackNavigator();

export const FindStackScreen = () => {
  return (
    <FindStack.Navigator
      initialRouteName="Find"
      screenOptions={{
        headerShown: false,
      }}
    >
      <FindStack.Screen
        name="Find"
        component={Find}
        options={{
          headerTitle: (props) => <Header />,
          headerStyle: { height: 100 },
        }}
      />
    </FindStack.Navigator>
  );
};

const NewStack = createStackNavigator();

export const NewStackScreen = () => {
  return (
    <NewStack.Navigator
      initialRouteName="New"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewStack.Screen
        name="New"
        component={New}
        options={{
          headerTitle: (props) => <Header />,
          headerStyle: { height: 100 },
        }}
      />
    </NewStack.Navigator>
  );
};

const ChatStack = createStackNavigator();

export const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator initialRouteName="Chat">
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitle: "",
          headerStyle: { height: 70 },
        }}
      />
    </ChatStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: (props) => <Header />,
          headerStyle: { height: 70 },
        }}
      />
    </ProfileStack.Navigator>
  );
};
