import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Find from "../../containers/Find/Find";
import Home from "../../containers/Home/Home";
import New from "../../containers/New/New";
import Profile from "../../containers/Profile/Profile";
import Chat from "../../containers/Chat/Chat";
import Header from "../../components/Header/Header";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <Header />,
          headerStyle: { height: 100 },
        }}
      />
    </HomeStack.Navigator>
  );
};

const FindStack = createStackNavigator();

export const FindStackScreen = () => {
  return (
    <FindStack.Navigator initialRouteName="Find">
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
    <NewStack.Navigator initialRouteName="New">
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
          headerTitle: (props) => <Header />,
          headerStyle: { height: 100 },
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
          headerStyle: { height: 100 },
        }}
      />
    </ProfileStack.Navigator>
  );
};
