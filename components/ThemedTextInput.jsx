import React from 'react';
import { StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <TextInput 
        style = {[{
            backgroundColor:theme.uiBackground,
            color: theme.text,
            padding: 30,
            borderRadius: 6
        },
    style
    ]}
    {...props}
        />
    );
}

const styles = StyleSheet.create({})

export default ThemedTextInput;
