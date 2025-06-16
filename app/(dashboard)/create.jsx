import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Create = () => {
    return (
        <ThemedView className="flex-1 justify-center items-center">
            <ThemedText className="text-xl font-bold">Add a new book</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({})

export default Create;
