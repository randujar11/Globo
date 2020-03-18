import React from 'react';
import {StyleSheet, Image } from 'react-native';

export class Hero extends React.Component{
    render () {
        return(
            <Image style={styles.heroImage} source={ require('./img/pip.png')}
            />
        );
    }
}

const styles = StyleSheet.create ({
    heroImage: {
        flex: 5,
        width: 400,
        height: undefined,
        
    }
});