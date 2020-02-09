import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { createDrawerNavigator } from 'react-navigation-drawer';
import LeftSideBar from "../../sidebar/leftsidebar";
import Login from "../login/login"
import Settings from "../settings";
const WIDTH = Dimensions.get('window').width;
const LeftDrawer = createDrawerNavigator(
    {
        Login: { screen: Login },
        Settings: { screen: Settings },
    },
    {
        initialRouteName: "Settings",
        drawerWidth: WIDTH * 0.80,
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <LeftSideBar {...props} />,
        drawerOpenRoute: 'LeftSideMenu',
        drawerCloseRoute: 'LeftSideMenuClose',
        drawerToggleRoute: 'LeftSideMenuToggle',
    }
);
export default LeftDrawer;