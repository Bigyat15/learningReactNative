import React, { Component } from 'react'

//themed component
import  ThemedText  from '../../components/ThemedText';
import ThemedView from "../../components/ThemedView"
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export class login extends Component {
  render() {
    const router = useRouter()
    return (
      <ThemedView className="flex-1 justify-center items-center gap-3 text-center font-bold">
        <ThemedText className="mt-3">
            Login to your Account
        </ThemedText>
        <TouchableOpacity 
        onPress={() => router.push("/register")}
        activeOpacity={0.7}
        className="px-8 py-2 rounded-full bg-green-200"
        >
            <ThemedText>Register Instead</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    )
  }
}

export default login
