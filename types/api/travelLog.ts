import type { PageInfo } from "./common";

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

interface UserCompactResDto {
  id: number;
  nickname: string;
  picture: string;
}
