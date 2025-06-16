import React from 'react';
import { ActivityIndicator, StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView"

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <ThemedView className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color={theme.text}/>
        </ThemedView>
        
        
    );
}

export default ThemedLoader;
