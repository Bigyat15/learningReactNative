import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const About = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View className="flex items-center mt-4" style={{backgroundColor:theme.background}}>
      <TouchableOpacity
      onPress={() => router.push("/")}
      activeOpacity={0.7}
      className="px-8 py-2 bg-green-200 rounded-full"
      >
        <Text>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
