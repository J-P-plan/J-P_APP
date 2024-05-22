import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import COLORS from "@/constants/colors";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StackLayout />
    </QueryClientProvider>
  );
}

function StackLayout() {
  const [loaded, error] = useFonts({
    Suit: require("../assets/fonts/PretendardVariable.ttf"),
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
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "",
          headerTitle: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
        }}
      />
    </Stack>
  );
}
