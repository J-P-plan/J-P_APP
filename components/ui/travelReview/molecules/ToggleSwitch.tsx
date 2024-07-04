import { Pressable, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { cn } from "@/lib/util";

type SwitchOptions = "review" | "travel-log";

const buttons: { name: string; value: SwitchOptions }[] = [
  { name: "리뷰", value: "review" },
  { name: "여행기", value: "travel-log" },
];

export default function ToggleSwitch() {
  const { replace } = useRouter();
  const pathnames = usePathname().split("/");
  const currentPath = pathnames[pathnames.length - 1];
  const currentValue: SwitchOptions =
    currentPath === "travelReview" ? "review" : (currentPath as SwitchOptions);

  const handlePress = (newValue: SwitchOptions) => {
    if (newValue === currentValue) {
      return;
    } else {
      replace(`/(tabs)/travelReview/${newValue}`);
    }
  };

  return (
    <View tw="space-x-0.5 self-center flex-row py-1.5 px-2 rounded-full border border-gray-100 bg-white">
      {buttons.map((button) => (
        <Pressable
          key={button.value}
          onPress={() => handlePress(button.value)}
          tw={cn(
            "items-center justify-center w-[75px] h-[33px] rounded-full",
            button.value === currentValue ? "bg-primary" : "bg-transparent"
          )}
        >
          <Text
            tw={cn(
              "font-bold text-sm",
              button.value === currentValue ? "text-white" : "text-gray-300"
            )}
          >
            {button.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
