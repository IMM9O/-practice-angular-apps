/**
 * Simple state for store config app for example
 */

export interface AppState {
  isLogin?: boolean;
  currentPageNumber?: number;
  totalPageNumber?: number;
  token?: string;
  requestNewPage?: boolean;
}
