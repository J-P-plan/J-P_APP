import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useCommentInput from "@/hooks/common/useCommentInput";
import COLOR from "@/constants/colors";
import { cn } from "@/lib/util";

interface Props {
  type?: "comment" | "reply";
}

export default function CommentBar({ type = "comment" }: Props) {
  const { inputProps, handleSubmit } = useCommentInput(type);

  return (
    <View tw="flex-row" style={{ gap: 6 }}>
      <View tw="flex-1 py-[9px] px-[22px] rounded-full border border-gray-200 bg-white">
        <TextInput
          tw="font-normal text-xs"
          keyboardType="default"
          placeholder={`${
            type === "comment" ? "댓글" : "답글"
          }을 작성해주세요.`}
          placeholderTextColor={COLOR.gray[300]}
          {...inputProps}
        />
      </View>
      <Pressable
        tw={cn(
          "items-center justify-center w-[55px] h-[35px] rounded-full",
          type === "comment" ? "bg-primary" : "border border-primary bg-white"
        )}
        onPress={handleSubmit}
      >
        <Text
          tw={cn(
            "font-bold text-xs",
            type === "comment" ? "text-white" : "text-primary"
          )}
        >
          {"등록"}
        </Text>
      </Pressable>
    </View>
  );
}
