import React from 'react';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';

const Register = () => {
    const router = useRouter();
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? theme.light
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

    const {register} = useUser()
    const handleSumbit = async () =>{
        setError(null);
        try{
            await register(email,password)
        }catch(err){
            setError(err.message);
        }
    }

    return (
        <ThemedView className="flex-1 items-center justify-center ">
            <ThemedView className=" w-full max-w-sm">
                <ThemedText className="text-xl text-center font-bold">
                    Register Your Account
                </ThemedText>
                <ThemedView className="flex flex-row items-center gap-2 mt-10 ml-3">
                    <Ionicons name="mail" color={theme.iconColor} size={20} />
                    <ThemedText className="text-lg">
                        Email
                    </ThemedText>
                </ThemedView>
                <ThemedTextInput
                    className="py-4 p-2 rounded-lg m-3"
                    placeholder="Enter your first name"
                    keyboard-type="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <ThemedView className="flex flex-row items-center gap-2  ml-3">
                    <Ionicons name="eye" color={theme.iconColor} size={20} />
                    <ThemedText className="text-lg">
                        Password
                    </ThemedText>
                </ThemedView>
                <ThemedTextInput
                    className="py-4 p-2 m-3 rounded-lg border"
                    placeholder="Enter you password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry 
                />
                <ThemedView className="mr-5 flex flex-row justify-end text-center gap-3">
                <ThemedText className="">
                    Already Have An Account? 
                </ThemedText>
                <ThemedText
                onPress={() => router.push("/login")}
                className="underline">
                        Login
                    </ThemedText>
                </ThemedView>
                
                <TouchableOpacity
                onPress={handleSumbit}
                className="flex flex-row items-center justify-center border border-white bg-blue-200 p-3 m-3 rounded-full gap-2">
                    <FontAwesome name="registered" size={20} color={theme.iconColor} />
                    <ThemedText className="">
                        Register
                    </ThemedText>
                </TouchableOpacity>
                {error && (
                    <View className="bg-red-400 p-3 rounded-lg w-full max-w-85 flex  justify-center">
                        <Text className="text-white">
                        {error}
                        </Text>
                        
                    </View>
                )}
            </ThemedView>
        </ThemedView>
    );
}

export default Register;
