export interface PageInfo {
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalElements: number;
  totalPages: number;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface UserCompactResDto {
  id: number;
  nickname: string;
  picture: string | null;
}
