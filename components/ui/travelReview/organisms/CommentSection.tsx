import { Text, View } from "react-native";
import type { CommentResDto } from "@/lib/types/api/review";
import CommentBar from "@/components/ui/travelReview/molecules/CommentBar";
import Comment from "@/components/ui/travelReview/molecules/Comment";

interface Props {
  comments: CommentResDto[];
}

export default function CommentSection({ comments }: Props) {
  return (
    <View tw="mt-3" style={{ gap: 8 }}>
      <Text tw="ml-2 font-normal text-sm text-gray-900">{"댓글"}</Text>
      <CommentBar />
      <View style={{ gap: 5 }}>
        {comments &&
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </View>
    </View>
  );
}
