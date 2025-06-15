import { Image,useColorScheme } from "react-native";

import Logo from '../assets/img/black-card.png'
import Dark from "../assets/img/dakr.jpeg"

const ThemedLogo = ({...props }) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme == "dark" ? Dark : Logo 
    return (
        <Image source={logo} {...props}/>
    )
}
export default ThemedLogo