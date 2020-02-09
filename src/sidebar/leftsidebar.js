import React, { Component } from "react"
import { Content, List, Header, Body, Title, ListItem, Container, Left, Right, Icon, Text, Badge } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import sideList from './config';
import Login from '../components/login/login';
import Settings from '../components/settings/index';

import { NavigationActions } from 'react-navigation';
export default class LeftSideBar extends React.Component {

    constructor(props) {
        super(props)


    }
    navigateToScreen = (path) => () => {
        // this.props.navigation.closeDrawer();
        // alert(route);
        // console.log(path);
        // if(path =='Login')
        // this.props.navigation.closeDrawer();
        // this.props.navigation.jumpTo('Login', { owner: 'Satya' });
        // const navigate = NavigationActions.navigate({
        //     routeName: Login
        // });
        // this.props.navigation.dispatch(navigate);
    }
    render() {
        // const sideList = [{
        //     'name': 'Home'
        // }, {
        //     'name': 'Settings'
        // }, {
        //     'name': 'Profile'
        // }
        // ];
        return (
            <ScrollView>
                <Container>
                    <Header>
                        <Left />
                        <Body>
                            <Title></Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <List>
                            {
                                sideList.Sidebar.map((item, index) => {
                                    return (<ListItem key={index} onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate(item.path)}}>
                                        <Left>
                                            <Text>{item.name}   </Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>);
                                })
                            }
                        </List>
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}
