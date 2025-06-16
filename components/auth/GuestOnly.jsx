import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Text } from "react-native"

const GuestOnly = ({children}) =>{
    const {user, authChecked } = useState(false)
    const router = useRouter()

    useEffect(() => {
        if( authChecked && user !== null){
            router.replace('/profile');
        }
    },[user,authChecked])

    if(!authChecked || user){
        return(
            <Text>
                Loading.....
            </Text>
        )
    }
}
export default GuestOnly