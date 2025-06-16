import React, { useState } from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import ThemedText from '../../components/ThemedText';
import ThemedView from "../../components/ThemedView";
import ThemedTextInput from '../../components/ThemedTextInput';
import { Colors } from '../../constants/Colors';
import { useUser } from '../../hooks/useUser';

const Login = () => {
  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { login } = useUser()
  const [error,setError] = useState(null);
  
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handelSubmit = async () => {
    setError(null)
    try{
      await login(email,password)
    }catch(error){
      setError(error.message)
      console.log(err)
    }
  }


  return (
    <ThemedView className="flex-1 justify-center items-center gap-3 text-center font-bold">
      <ThemedText className="mt-3 text-3xl">Login to your Account</ThemedText>

      <ThemedView className="w-full max-w-80 gap-3 mt-4">
        <ThemedView className="flex flex-row gap-1 justify-start items-center ml-3">
          <FontAwesome name="envelope" size={20} color={theme.iconColor} />
          <ThemedText>Email: </ThemedText>
        </ThemedView>

        <ThemedTextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          className="w-full py-3 px-4 rounded-full border border-white text-white"
        />

        <ThemedView className="flex flex-row gap-1 justify-start items-center ml-3">
          <FontAwesome name="eye" size={20} color={theme.iconColor} />
          <ThemedText>Password: </ThemedText>
        </ThemedView>

        <ThemedTextInput
          placeholder="Enter your password"
          className="py-3 px-4 border border-white rounded-full text-white"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </ThemedView>

      <ThemedView className="flex flex-row justify-between w-full max-w-80">
        <ThemedText className="underline ml-3" onPress = {() => {
          router.push('/register')
        }}>Create one</ThemedText>
        <ThemedText className="underline">Forgot Password?</ThemedText>
      </ThemedView>

      <TouchableOpacity 
      onPress={handelSubmit}
      className="bg-green-500 px-6 py-3 rounded-full flex-row items-center justify-center gap-2">
        <FontAwesome name="sign-in" size={18} />
        <ThemedText className="text-white font-bold">Login</ThemedText>
      </TouchableOpacity>

      {error && (
  <View className=" border border-white my-2 bg-red-400 p-2 rounded max-w-80">
    <Text className="text-red-800 text-center">
      {error}
    </Text>
  </View>
)}

      <ThemedText className="text-sm">
        By Signing In, I accept the terms & conditions
      </ThemedText>
    </ThemedView>
  );
};

export default Login;
