import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/models/constants';

@Injectable()
export class StorageService {
  set token(remoteToken: string) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, remoteToken);
  }

  get token(): string {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
}
