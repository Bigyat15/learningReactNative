import React, { Component } from 'react'

//themed component
import ThemedText from '../../components/ThemedText';
import ThemedView from "../../components/ThemedView"
import { TouchableOpacity, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export class login extends Component {
  render() {
    const router = useRouter()
    return (
      <ThemedView className="flex-1 justify-center items-center gap-3 text-center font-bold">
        <ThemedText className="mt-3 text-3xl">
          Login to your Account
        </ThemedText>
        <ThemedView className="w-full max-w-80 gap-3 mt-4">
          <ThemedView className="flex flex-row gap-1 justify-start items-center ml-3">
            <FontAwesome name="envelope" size={20} color='white' />
            <ThemedText>Email: </ThemedText>
          </ThemedView>
          <TextInput placeholder='Enter you email' className="w-full py-3 p-4 rounded-full border border-white text-white" />
          <ThemedView className="flex flex-row gap-1 justify-start items-center ml-3">
            <FontAwesome name='eye' size={20} color='white' />
            <ThemedText>Password: </ThemedText>
          </ThemedView>
          <TextInput placeholder='Enter your password' className="py-3 p-4 border border-white rounded-full text-white" />
        </ThemedView>
        <ThemedView className="flex flex-row justify-between  w-full max-w-80">
          <ThemedText className="underline ml-3">
            Create one
          </ThemedText>
          <ThemedText className="underline">
            Forgot Password?
          </ThemedText>
        </ThemedView>
        <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-full flex-row items-center justify-center gap-2">
          <FontAwesome name="sign-in" size={18} color="white" />
          <ThemedText className="text-white font-bold">Login</ThemedText>
        </TouchableOpacity>
        <ThemedText className="text-sm">By Signing In, I accept the terms & conditions</ThemedText>


      </ThemedView>
    )
  }
}

export default login
