import { Text, View } from "react-native";
import type { CommentResDto, Reply } from "@/types/api/review";
import UserProfile from "@/components/common/display/UserProfile";
import ReplyCount from "@/components/common/display/ReplyCount";
import CommentBar from "@/components/ui/travelReview/molecules/CommentBar";

interface Props {
  comment: CommentResDto;
}

const Reply = ({ reply }: { reply: Reply }) => {
  return (
    <View tw="py-4 pl-3 border-t border-gray-200" style={{ gap: 8 }}>
      <UserProfile
        profileUrl={reply.userCompactResDto.picture}
        name={reply.userCompactResDto.nickname}
        createdAt={reply.createdAt}
      />
      <Text tw="font-normal text-sm text-gray-900">{reply.content}</Text>
    </View>
  );
};

export default function Comment({ comment }: Props) {
  return (
    <View tw="p-4 rounded bg-gray-100" style={{ gap: 8 }}>
      <UserProfile
        profileUrl={comment.userCompactResDto.picture}
        name={comment.userCompactResDto.nickname}
        createdAt={comment.createdAt}
      />
      <Text tw="font-normal text-sm text-gray-900">{comment.content}</Text>
      <ReplyCount count={comment.replyList.length} />
      {comment.replyList.length > 0 &&
        comment.replyList.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      <CommentBar type="reply" />
    </View>
  );
}
