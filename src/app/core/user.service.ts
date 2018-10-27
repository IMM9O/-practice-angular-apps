import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';
import { RootStoreService } from '../root-store/root-store.service';

import { LOGIN_API, USER_API } from 'src/models/constants';
import { ICredential, ILoginResponseApi } from 'src/models/ICredential';
import { IUser, UsersApiResponce } from 'src/models/IUser';
import { RootStoreSelectors } from '../root-store/root-store.selector';

@Injectable()
export class UsersService {
  currentToken: string;

  private _isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isLogin$: Observable<boolean> = this._isLogin.asObservable();

  constructor(
    private _http: HttpClient,
    private _storage: StorageService,
    private _rootStoreService: RootStoreService,
    private _rootStoreSelector: RootStoreSelectors
  ) {
    this.currentToken = this._storage.token;
    if (this.currentToken) {
      this._isLogin.next(true);
      this.getUserList(1);
    }
  }

  login(auth: ICredential): void {
    this._http.post<ILoginResponseApi>(LOGIN_API, auth).subscribe(res => {
      if (res.token) {
        this._isLogin.next(true);
        this._storage.token = res.token;
        this.getUserList(1);
      }
    });
  }

  logout(): void {
    this._isLogin.next(false);
    this._storage.removeToken();
    this._rootStoreService.resetStore();
  }

  /**
   * Selectors from root store
   */
  get users$(): Observable<IUser[]> {
    return this._rootStoreSelector.users$;
  }

  /**
   * Users CRUD Operations
   */
  getUserList(page?: number) {
    this._http
      .get<UsersApiResponce>(`${USER_API}?page=${page}`)
      .subscribe(res => this._rootStoreService.usersRecived(res.data));
  }

  getUser(user: number) {
    this._http.get(`${USER_API}/${user}`).subscribe(res => console.log(res));
  }

  createUser(user: IUser) {
    this._http
      .post<IUser>(USER_API, user)
      .subscribe(res => this._rootStoreService.userRecived(res));
  }

  updateUser(user: IUser) {
    this._http
      .put<IUser>(`${USER_API}/${user.id}`, user)
      .subscribe(res => this._rootStoreService.userUpdatedRecived(res));
  }

  deleteUser(user: IUser) {
    this._http
      .delete(`${USER_API}/${user.id}`)
      .subscribe(res => this._rootStoreService.userDeletedRecived(user));
  }
}
