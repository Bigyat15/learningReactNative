import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedCard = ({style, ...props}) => {
    const themedScheme = useColorScheme()
    const theme = Colors[themedScheme]
    return (
        <View
        className="rounded-lg p-4"
        style={[{backgroundColor:theme.uiBackground},style]}
        {...props}
        >
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ThemedCard;
