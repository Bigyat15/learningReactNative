import React from 'react';
import {  TouchableOpacity,View,Text } from 'react-native';
import "../global.css"
import { useRouter } from 'expo-router';
import ThemedText from '../components/ThemedText';

const Contact = () => {
    const router = useRouter();
    return (
        <>
        <View className="flex items-center">
            <ThemedText className="text-xl">Contact</ThemedText>
        </View>
        <View className="flex mt-4 items-center">  
            <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => router.push("/")}
            className="px-4 py-2 bg-green-200 rounded-full">
                <ThemedText>Return Home</ThemedText>
            </TouchableOpacity>
        </View>
        </>
    );
}


export default Contact;
