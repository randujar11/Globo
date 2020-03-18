import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }
    toggleUser = ()=>{
        this.setState(previousState =>{
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }
    render () {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Text style={styles.headText} onPress={this.toggleUser}> {display} </Text>
                <Image style={styles.logoStyle} 
                        source={ require('./img/react.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    headText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 25,
    },
    headStyle: {
        paddingTop: 50,
        paddingRight: 1,
        backgroundColor: '#35606a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
    }
});