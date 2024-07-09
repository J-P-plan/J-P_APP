import type { PageInfo, UserCompactResDto } from "@/lib/types/api/common";

export interface TravelLogResponse {
  pageInfo: PageInfo;
  data: TravelLogData[];
}

export interface TravelLogData {
  id: number;
  subject: string;
  tags: string[];
  userCompactResDto: UserCompactResDto;
  commentCnt: number;
  like: number;
  placeId: string;
}
