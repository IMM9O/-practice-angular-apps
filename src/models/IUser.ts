export interface IUser {
  createdAt?: string;
  id?: number;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export interface UsersApiResponce {
  data: IUser[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
