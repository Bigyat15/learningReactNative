import React from 'react';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { Pressable, TouchableOpacity,View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Register = () => {
    const router = useRouter();
    
    return (
        <ThemedView className="flex-1 items-center justify-center">
            
            <TouchableOpacity
            onPress={() => router.push("/login")}
            activeOpacity={0.7}
            className="px-8 py-2 rounded-full bg-green-200"
            >
                <ThemedText>
                    Login
                </ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

export default Register;
