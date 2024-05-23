import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingSpinner from "@/components/common/LoadingSpinner";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <StackLayout />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

function StackLayout() {
  const [loaded, error] = useFonts({
    Pretendard: require("../assets/fonts/PretendardVariable.ttf"),
  });
  const router = useRouter();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.replace("/(tabs)/home");
    }
  }, [loaded]);

  if (!loaded) {
    return <LoadingSpinner />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
