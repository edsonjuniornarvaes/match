import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Splash from "@/app/screens/splash/Splash";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "screens/login/view",
};

export default function RootLayout() {
  const [splashComplete, setSplashComplete] = useState(false);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded && splashComplete) SplashScreen.hideAsync();
  }, [loaded, splashComplete]);

  if (!loaded) return null;

  if (!splashComplete) return <Splash onComplete={setSplashComplete} />;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="screens/login/view"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
