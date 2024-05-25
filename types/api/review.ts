import type { PageInfo } from "./common";

export interface ReviewsResponse {
  pageInfo: PageInfo;
  data: ReviewsData[];
}

export interface ReviewsData {
  id: number;
  subject: string;
  content: string;
  userCompactResDto: UserCompactResDto;
  commentCnt: number;
  star: number;
  placeId: string;
}

interface UserCompactResDto {
  id: number;
  nickname: string;
  picture: string;
}
