import type { PageInfo } from "@/types/api/common";

export type TravelReviewType = "review" | "travel-log";

export type ReviewSearchParams = "page" | "sort" | "placeId" | "elementCnt";

export enum ReviewSort {
  HOT = "HOT",
  NEW = "NEW",
  STAR_HIGH = "STAR_HIGH",
  STAR_LOW = "STAR_LOW",
}

export type ReviewSortType = keyof typeof ReviewSort;

export interface ReviewListResponse {
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

export interface ReviewResponse {
  id: number;
  subject: string;
  content: string;
  userCompactResDto: UserCompactResDto;
  placeId: string;
  star: number;
  viewCnt: number;
  createdAt: string;
  commentResDtoList: CommentResDto[];
}

export interface CommentResDto {
  id: number;
  content: string;
  userCompactResDto: UserCompactResDto;
  createdAt: string;
  replyList: Reply[];
}

export interface Reply {
  id: number;
  content: string;
  userCompactResDto: UserCompactResDto;
  createdAt: string;
}
