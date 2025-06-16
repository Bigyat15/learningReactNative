import { Tabs } from 'expo-router';
import {React} from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import UserOnly  from '../../components/auth/UserOnly';

const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <UserOnly>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.navBackground,
                        paddingTop: 10,
                        height: 90
                    },
                    tabBarActiveTintColor: theme.iconColorFocused,
                    tabBarInactiveTintColor: theme.iconColor
                }}
            >
                <Tabs.Screen name="profile" options={{
                    title: 'Profile', tabBarIcon: ({ focused }) => (
                        <Ionicons size={20} name={focused ? 'person-outline' : 'person'} color={focused ? theme.iconColorFocused : theme.iconColor} />
                    )
                }}
                />
                <Tabs.Screen name="books" options={{
                    title: 'Books', tabBarIcon: ({ focused }) => (
                        <Ionicons size={20} name={focused ? "book-outline" : "book"} color={focused ? theme.iconColorFocused : theme.iconColor} />
                    )
                }} />
                <Tabs.Screen name="create" options={{
                    title: 'Create', tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "create-outline" : "create"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor} />
                    )
                }} />
            </Tabs>
        </UserOnly>
    );
}


export default DashboardLayout;
