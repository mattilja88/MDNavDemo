import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { Colors } from "../constant/colors";

const customDarkTheme = {
    ...MD3DarkTheme,
    roundness: 3,
    colors: Colors.dark,
    
}
const customLightTheme = {
    ...MD3LightTheme,
    roundness: 3,
    colors: Colors.light 
}

export {
    customDarkTheme,
    customLightTheme
}