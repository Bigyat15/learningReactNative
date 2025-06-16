import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Text } from "react-native"
import { useUser } from "../../hooks/useUser"
import ThemedView from "../ThemedView"
import ThemedLoader from "../ThemedLoader"

const GuestOnly = ({children}) =>{
    const {user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if( authChecked && user !== null){
            router.replace('/profile');
        }
    },[user,authChecked])

    if(!authChecked || user){
        return(
            <ThemedView className="flex-1 justify-center items-center">
                <ThemedLoader />
            </ThemedView>
        )
    }
    return children
}
export default GuestOnly