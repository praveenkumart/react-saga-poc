import React, { Component } from 'react';
import { View } from 'react-native';
import { loadUsers } from "../../saga/actions";
import {connect} from 'react-redux';


import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
 class Settings extends Component {
    componentDidMount() {
        this.props.loadUsers();
        console.log(this.props);
    };
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
                        <Title>Settings</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Text>
                        Settings
                        {/* {this.props.data.map((u, i) =>
                            <Text key={i}>
                                {u.name}
                            </Text>
                        )} */}
                    </Text>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);