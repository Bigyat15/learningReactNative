import React from 'react';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { useUser } from '../../hooks/useUser';
import { account } from '../../lib/appwrite';
import { TouchableOpacity } from 'react-native';

const Profile = () => {
    const { logout,user } = useUser();
    return (
        <ThemedView className="flex-1 items-center justify-center">
            <ThemedText>Welcome back, {user.email} </ThemedText>
            <TouchableOpacity
            onPress={logout}
            className="flex px-8 py-2 rounded-full border border-white mt-2">
                <ThemedText className="">Logout</ThemedText>
            </TouchableOpacity>

        </ThemedView>
    );
}



export default Profile;
