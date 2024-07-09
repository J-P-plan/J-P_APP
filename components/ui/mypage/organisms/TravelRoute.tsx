import { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import TravelListItem from "@/components/ui/mypage/molecules/TravelListItem";

export const travelList = [
  {
    id: 3,
    city: "제주",
    startDate: "24.3.21",
    endDate: "24.3.24",
    isPublic: true,
    picture: null,
  },
  {
    id: 2,
    city: "양양",
    startDate: "24.2.10",
    endDate: "24.2.14",
    isPublic: false,
    picture: null,
  },
  {
    id: 1,
    city: "속초",
    startDate: "23.12.20",
    endDate: "23.12.23",
    isPublic: true,
    picture: null,
  },
];

export type TravelListItem = (typeof travelList)[number];

const thisYear = new Date();
let currentYear = thisYear
  .setFullYear(thisYear.getFullYear() + 1)
  .toString()
  .slice(2);

export default function TravelRoute() {
  return (
    <ScrollView>
      <ContentWrapper tw="my-6">
        <Text tw="font-bold text-xl text-gray-900">{"목록"}</Text>
        <View tw="w-[315px] mx-auto">
          {travelList.map((item) => {
            let year = item.endDate.slice(0, 2);
            if (year < currentYear) {
              currentYear = year;
            } else {
              year = "";
            }
            return (
              <Fragment key={item.id}>
                {year && (
                  <Text tw="mt-4 mb-1 font-bold text-sm text-gray-900">{`20${year}년`}</Text>
                )}
                <TravelListItem item={item} />
              </Fragment>
            );
          })}
        </View>
      </ContentWrapper>
    </ScrollView>
  );
}
