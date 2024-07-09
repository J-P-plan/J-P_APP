import { Image, Pressable, Text, View } from "react-native";
import type { UserCompactResDto } from "@/lib/types/api/common";
import EditIcon from "@/assets/icons/common/edit.svg";

interface Props {
  profile: UserCompactResDto;
}

export default function Profile({ profile }: Props) {
  return (
    <View
      tw="flex-row items-end w-[343px] my-4 mx-auto px-3"
      style={{ gap: 24 }}
    >
      {profile.picture ? (
        <Image
          source={{ uri: profile.picture }}
          alt={profile.nickname}
          tw="w-20 h-20 rounded-full border-2 border-gray-200/60"
        />
      ) : (
        <View tw="w-20 h-20 rounded-full border-2 border-gray-200/60 bg-secondary-light" />
      )}
      <View tw="mb-1" style={{ gap: 8 }}>
        <Text tw="font-bold text-base text-gray-900">{profile.nickname}</Text>
        <Pressable tw="flex-row items-center" style={{ gap: 5 }}>
          <EditIcon tw="w-4 h-4 text-gray-700" />
          <Text tw="font-normal text-sm text-gray-700">{"프로필 수정"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
