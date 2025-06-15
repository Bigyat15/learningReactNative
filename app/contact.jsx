import React from 'react';
import {  TouchableOpacity,View,Text } from 'react-native';
import "../global.css"
import { useRouter } from 'expo-router';

const Contact = () => {
    const router = useRouter();
    return (
        <>
        <View className="flex items-center">
            <Text className="text-xl">Contact</Text>
        </View>
        <View className="flex mt-4 items-center">  
            <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => router.push("/")}
            className="px-4 py-2 bg-green-200 rounded-full">
                <Text>Return Home</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}


export default Contact;
