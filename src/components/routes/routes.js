import React from "react";
import { View, Text, Button } from "react-native";
import LeftDrawer from "./LeftDrawer"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../login/login"
import Settings from "../settings";
const MainNavigator = createStackNavigator({
    Login: { screen: Login },
    Settings: { screen: Settings },
    LeftDrawer: { screen: LeftDrawer }
},
    {
        initialRouteName: "LeftDrawer",
        headerMode: "none",
        swipeEnabled: false
    });
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;