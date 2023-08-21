const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Finance from "./screens/Finance";
import Landing from "./screens/Landing";
import Goal from "./screens/Goal";
import HomePage from "./screens/HomePage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Finance"
              component={Finance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Goal"
              component={Goal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Landing />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
