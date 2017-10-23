import React from 'react';
import { StyleSheet, View, Button, TouchableHighlight, Text, Alert } from 'react-native';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = { backgroundColor: "#fff" };
    }

    _onPressButton(color) {
        this.setState({backgroundColor: color})
        this.forceUpdate()
    }

    render() {
        return (
            <View style={[styles.cute_center, {backgroundColor: this.state.backgroundColor}]}>
              <TouchableHighlight onPress={() => this._onPressButton('powderblue')} underlayColor="white">
                <View style={[styles.square, {backgroundColor: 'powderblue'}]} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this._onPressButton('skyblue')} underlayColor="white">
                <View style={[styles.square, {backgroundColor: 'skyblue'}]} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this._onPressButton('steelblue')} underlayColor="white">
                <View style={[styles.square, {backgroundColor: 'steelblue'}]} />
              </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cute_center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        width: 50,
        height: 50,
        alignItems: 'center'
    }
});
