import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MyAppbar from './components/MyAppbar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { customDarkTheme, customLightTheme } from './themes/MyThemes';

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme()
  const scheme = colorScheme==='dark' ? customDarkTheme : customLightTheme

  return (
    <PaperProvider theme = {scheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            header: () => (
              <MyAppbar navigation={navigation} back={navigation.canGoBack()} />
            ),
            headerShown: true, 
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

