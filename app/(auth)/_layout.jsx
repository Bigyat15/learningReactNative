import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <>
        <StatusBar style='auto' />
        <Stack
        screenOptions={{headerShown: false, animation: 'none'}} >
        <Stack.Screen name='(auth)' options={{headerShown:false}} />
        </Stack>
        </>
        
    );
}
export default AuthLayout;
