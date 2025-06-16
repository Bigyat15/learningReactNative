import React from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import "../global.css"
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import { BooksContext } from './contexts/BooksContext';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    console.log(colorScheme)
    return (
        <UserProvider>
            <BooksContext>
                <StatusBar value="auto" />
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title,
                }}>
                    <Stack.Screen name="index" options={{ title: 'Home' }} />
                    <Stack.Screen name="about" options={{ title: "About" }} />
                    <Stack.Screen name="contact" options={{ title: "Contact" }} />
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
                </Stack>
            </BooksContext>
        </UserProvider>
    );
}


export default RootLayout;
