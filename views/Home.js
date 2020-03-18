import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Header } from '../section/Header.js'
import { Hero } from '../section/Hero.js'
import { Menu } from '../section/Menu.js'


export class Home extends React.Component{
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header message = 'Press to Login'/>
                <Hero />
                <Menu navigate = {navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
});