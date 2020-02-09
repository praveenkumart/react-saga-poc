import React, { Component } from 'react';
import { View } from 'react-native';
import { loadCountryList } from "../../saga/actions";
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';

class Settings extends React.Component {
    componentDidMount() {
        this.props.loadCountryList();
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
                        <Title>Country list</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Text> Country list with redux saga </Text>
                    <Text>------------------------------</Text>
                    <ScrollView>
                        {this.props.data.map((u, i) =>
                            <Text key={i}>
                                {u.name}
                            </Text>
                        )}
                    </ScrollView>
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
    loadCountryList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);