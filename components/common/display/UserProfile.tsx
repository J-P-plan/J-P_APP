import { Image, Text, View } from "react-native";
import VerticalSeparator from "@/components/common/display/Separator";
import { cn } from "@/lib/util";

interface Props {
  name: string;
  size?: "small" | "medium";
  createdAt?: string | null;
  profileUrl?: string | null;
}

export default function UserProfile({
  name,
  size = "small",
  createdAt,
  profileUrl,
}: Props) {
  return (
    <View tw="flex-row items-center">
      {profileUrl ? (
        <Image
          source={{ uri: profileUrl }}
          tw="w-6 h-6 rounded-full border border-gray-200/60"
        />
      ) : (
        <View
          tw={`w-6 h-6 rounded-full border border-gray-200/60 bg-secondary-light`}
        />
      )}
      <Text
        tw={cn(
          "ml-2 font-normal text-gray-900",
          size === "small" ? "text-xs" : "text-sm"
        )}
      >
        {name}
      </Text>
      {createdAt && (
        <>
          <VerticalSeparator
            color={size === "small" ? "border-gray-300" : "border-gray-400"}
          />
          <Text
            tw={cn(
              "font-normal",
              size === "small"
                ? "text-xs text-gray-300"
                : "text-sm text-gray-400"
            )}
          >
            {createdAt}
          </Text>
        </>
      )}
    </View>
  );
}
