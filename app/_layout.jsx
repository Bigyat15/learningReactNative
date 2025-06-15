import React from 'react';
import { StyleSheet, View,Text, useColorScheme } from 'react-native';
import "../global.css"
import { Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Colors';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    console.log(colorScheme)
    return (
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name="index" options={{title : 'Home' }} />
            <Stack.Screen name="about" options={{title: "About"}} />
            <Stack.Screen name="contact" options={{title: "Contact"}} />
        </Stack>
    );
}


export default RootLayout;
