import { Fragment } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import CalenderIcon from "@/assets/icons/common/calendar-check.svg";

const travelList = [
  {
    id: 3,
    city: "제주",
    startDate: "24.3.21",
    endDate: "24.3.24",
    isPublic: true,
  },
  {
    id: 2,
    city: "양양",
    startDate: "24.2.10",
    endDate: "24.2.14",
    isPublic: false,
  },
  {
    id: 1,
    city: "속초",
    startDate: "23.12.20",
    endDate: "23.12.23",
    isPublic: true,
  },
];

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
                <Link href={"/(tabs)/plan"} asChild>
                  <Pressable
                    tw="flex-row items-center h-[60px] mt-3 px-7 rounded border border-gray-200 bg-white"
                    style={{ gap: 20 }}
                  >
                    <Text tw="font-medium text-sm text-gray-900">
                      {item.city}
                    </Text>
                    <View tw="flex-1 flex-row items-center" style={{ gap: 4 }}>
                      <CalenderIcon tw="text-gray-700" />
                      <Text tw="font-normal text-sm text-gray-700">
                        {`${item.startDate.slice(3)} ~ ${item.endDate.slice(
                          3
                        )}`}
                      </Text>
                    </View>
                    <Text tw="font-normal text-xs text-gray-300">
                      {item.isPublic ? "공개" : "비공개"}
                    </Text>
                  </Pressable>
                </Link>
              </Fragment>
            );
          })}
        </View>
      </ContentWrapper>
    </ScrollView>
  );
}
