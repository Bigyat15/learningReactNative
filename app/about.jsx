import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { ThemedText } from '../components/ThemedText';

const About = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View className="flex-1 items-center" style={{backgroundColor:theme.background}}>
      <View className="flex-1 items-center justify-center">
      <TouchableOpacity
      onPress={() => router.push("/")}
      activeOpacity={0.7}
      className="px-8 py-2 bg-green-200 rounded-full flex justify-between"
      >
        <ThemedText>Return Home</ThemedText>
      </TouchableOpacity>
      <ThemedText >Hello</ThemedText>
      </View>
      
    </View>
  );
};

export default About;
