import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import COLORS from "@/constants/colors";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_VALUE = SCREEN_HEIGHT / 1.5;
const MIN_VALUE = 0;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    zIndex: 100,
    width: "100%",
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.background,
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 12,
  },
});

interface Props {
  children: React.ReactNode;
}

export default function BottomSheet({ children }: Props) {
  const translateY = useSharedValue(MIN_VALUE);
  const context = useSharedValue({ y: MIN_VALUE });

  const reanimatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MIN_VALUE);
    })
    .onEnd(() => {
      if (translateY.value < SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(MIN_VALUE, { damping: 50 });
      } else {
        translateY.value = withSpring(MAX_VALUE, { damping: 50 });
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, reanimatedBottomStyle]}>
        <View tw="w-[60px] h-1.5 mt-2.5 mb-5 mx-auto rounded-full bg-gray-300 " />
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
