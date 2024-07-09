import { SafeAreaView } from "react-native";
import Profile from "@/components/ui/mypage/molecules/Profile";
import MypageTabSection from "@/components/ui/mypage/templates/TabSection";

const profile = {
  id: 1,
  nickname: "제이앤피",
  picture: null,
};

interface Props {}

export default function MypageIndexScreen({}: Props) {
  return (
    <SafeAreaView tw="flex-1 mb-10">
      <Profile profile={profile} />
      <MypageTabSection />
    </SafeAreaView>
  );
}
