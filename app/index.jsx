import React from 'react';
import { TouchableOpacity, View,  Text } from 'react-native';
import Logo from '../assets/img/black-card.png'
import { useRouter } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import "../global.css"
const Home = () => {
    const router = useRouter()
    return (
        <ThemedView className="flex-1  justify-center items-center dark:text-white">
            <View className="flex items-center justify-center">
                <ThemedLogo  className="w-32 h-32" resizeMode="contain" />
            </View>
            <View className="mt-2">
                <Text className="text-center">The Number 1</Text>
            </View>

            <View className="mt-2">
                <Text className="bg-green-300 p-3">Hello this is bigyat thapa.</Text>
            </View>
            <View className="flex justify-center mt-4 gap-3">
                <TouchableOpacity
                onPress={() => router.push("/about")}
                activeOpacity={0.7}
                className='px-8 py-2 rounded-full border bg-green-200 hover:bg-red-200'>
                    <Text>About</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                onPress={() => router.push("/contact")}
                activeOpacity={0.7}
                className='px-8 py-2 rounded-full border bg-green-200'>
                    <Text>Contact</Text>
                </TouchableOpacity>
            </View>

        </ThemedView>
    );
}



export default Home;
