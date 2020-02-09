import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>JOYRIDE</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content >
                   <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> Welcome to JOYRIDE </Text>
                </Content>
            </Container>
        );
    }
}