import { View, ActivityIndicator } from 'react-native';

export default function LoadingSpinner() {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={'black'} />
        </View>
    );
}
