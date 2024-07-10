import { ScrollView, Text, View } from "react-native";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import TravelLogListItem from "@/components/ui/mypage/molecules/TravelLogListItem";
import EditIcon from "@/assets/icons/common/edit.svg";
import { travelList } from "@/components/ui/mypage/organisms/TravelRoute";

export default function TravelLogRoute() {
  return (
    <ScrollView>
      <ContentWrapper tw="my-6">
        <View tw="flex-row items-center justify-between">
          <Text tw="font-bold text-xl text-gray-900">{"목록"}</Text>
          <View tw="flex-row items-center" style={{ gap: 3 }}>
            <EditIcon tw="w-4 h-4 text-gray-900" />
            <Text tw="font-medium text-sm text-gray-900">{"작성하기"}</Text>
          </View>
        </View>
        <View tw="flex-row flex-wrap justify-between w-[323px] mt-4 mx-auto">
          {travelList.map((item) => (
            <TravelLogListItem key={item.id} item={item} />
          ))}
        </View>
      </ContentWrapper>
    </ScrollView>
  );
}
