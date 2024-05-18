import { useEffect } from 'react';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from '@/components/common/LoadingSpinner';

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
      	Suit: require("../assets/fonts/SUIT-Variable.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return <LoadingSpinner />;
    }

    return (
        <Stack>
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
