import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useCommentInput from "@/hooks/common/useCommentInput";
import COLOR from "@/constants/colors";

export default function CommentBar() {
  const { inputProps, handleSubmit } = useCommentInput();

  return (
    <View tw="flex-row" style={{ gap: 6 }}>
      <View tw="flex-1 py-[9px] px-[22px] rounded-full border border-gray-200 bg-white">
        <TextInput
          tw="font-normal text-xs"
          keyboardType="default"
          placeholder="댓글을 작성해주세요."
          placeholderTextColor={COLOR.gray[300]}
          {...inputProps}
        />
      </View>
      <Pressable
        tw="items-center justify-center w-[55px] h-[35px] rounded-full bg-primary"
        onPress={handleSubmit}
      >
        <Text tw="font-bold text-xs text-white">{"등록"}</Text>
      </Pressable>
    </View>
  );
}
