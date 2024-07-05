import type { PageInfo } from "./common";

export type ReviewSearchParams = "page" | "sort" | "placeId" | "elementCnt";

export enum ReviewSort {
  HOT = "HOT",
  NEW = "NEW",
  STAR_HIGH = "STAR_HIGH",
  STAR_LOW = "STAR_LOW",
}

export type ReviewSortType = keyof typeof ReviewSort;

export interface ReviewResponse {
  pageInfo: PageInfo;
  data: ReviewData[];
}

export interface ReviewData {
  id: number;
  subject: string;
  content: string;
  userCompactResDto: UserCompactResDto;
  commentCnt: number;
  likeCnt: number;
  star: number;
  placeId: string;
  createdAt: string | null;
}

interface UserCompactResDto {
  id: number;
  nickname: string;
  picture: string | null;
}
