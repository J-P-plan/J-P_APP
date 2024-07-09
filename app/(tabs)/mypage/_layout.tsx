import { Stack } from "expo-router";
import type { MypageHeaderType } from "@/components/ui/headers/molecules/MypageHeaderContents";
import COLORS from "@/lib/constants/colors";
import MypageHeader from "@/components/ui/headers/MypageHeader";

const headerTitle: Record<MypageHeaderType, string> = {
  index: "마이페이지",
  "write-log": "여행기 작성",
  "write-review": "리뷰 작성",
  "add-place": "장소 등록",
};

export default function MyPageLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <MypageHeader type="index" title={headerTitle.index} />,
        }}
      />
      <Stack.Screen
        name="write-log"
        options={{
          header: () => (
            <MypageHeader type="write-log" title={headerTitle["write-log"]} />
          ),
        }}
      />
      <Stack.Screen
        name="write-review"
        options={{
          header: () => (
            <MypageHeader
              type="write-review"
              title={headerTitle["write-review"]}
            />
          ),
        }}
      />
      <Stack.Screen
        name="add-place"
        options={{
          header: () => (
            <MypageHeader type="add-place" title={headerTitle["add-place"]} />
          ),
        }}
      />
    </Stack>
  );
}
