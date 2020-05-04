import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { scan, shareReplay, switchMap, filter } from 'rxjs/operators';

import { StorageService } from './storage.service';

import { RootStoreService } from '../root-store/root-store.service';
import { RootStoreSelectors } from '../root-store/root-store.selector';

import { AppState } from 'src/models/AppState';
import { ICredential, ILoginResponseApi } from 'src/models/ICredential';
import { IUser, UsersApiResponce } from 'src/models/IUser';
import { LOGIN_API, USER_API } from 'src/models/constants';

@Injectable()
export class UsersService {
  /** Simple RxJs Manage State */
  private initialState: AppState = {
    isLogin: false,
    currentPageNumber: 0,
    totalPageNumber: 1,
    token: '',
    requestNewPage: false
  };
  private stateSubject = new BehaviorSubject(this.initialState);

  public state$ = this.stateSubject.asObservable().pipe(
    scan((acc: AppState, newVal: AppState) => {
      return { ...acc, ...newVal };
    }, this.initialState),
    shareReplay(1)
  );
  /**********************************************************/

  constructor(
    private _http: HttpClient,
    private _storage: StorageService,
    private _rootStoreService: RootStoreService,
    private _rootStoreSelector: RootStoreSelectors
  ) {
    const currentToken = this._storage.token;

    if (currentToken) {
      this.dispatch({
        isLogin: true,
        requestNewPage: true,
        token: currentToken
      });
    }

    this.state$
      .pipe(
        filter(
          val =>
            val.requestNewPage && val.currentPageNumber < val.totalPageNumber
        ),
        switchMap(val => {
          return this._http.get<UsersApiResponce>(
            `${USER_API}?page=${val.currentPageNumber + 1}`
          );
        })
      )
      .subscribe(res => {
        console.log(res);
        this.dispatch({
          requestNewPage: false,
          currentPageNumber: res.page,
          totalPageNumber: res.total_pages
        });
        this._rootStoreService.usersRecived(res.data);
      });
  }

  login(auth: ICredential): void {
    this._http.post<ILoginResponseApi>(LOGIN_API, auth).subscribe(res => {
      if (res.token) {
        this.dispatch({
          isLogin: true,
          requestNewPage: true,
          token: res.token
        });
        this._storage.token = res.token;
      }
    });
  }

  logout(): void {
    this.dispatch(this.initialState);
    this._storage.removeToken();
    this._rootStoreService.resetStore();
  }

  dispatch(obj: AppState) {
    this.stateSubject.next(obj);
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
  enquireNewPage() {
    this.dispatch({ requestNewPage: true });
  }

  // Create ([C]RUD)
  createUser(user: IUser) {
    this._http
      .post<IUser>(USER_API, user)
      .subscribe(res => this._rootStoreService.userRecived(res));
  }

  // Read (C[R]UD)
  getUser(user: number) {
    this._http.get(`${USER_API}/${user}`);
  }

  // Update (CR[U]D)
  updateUser(user: IUser) {
    this._http
      .put<IUser>(`${USER_API}/${user.id}`, user)
      .subscribe(res => this._rootStoreService.userUpdatedRecived(res));
  }

  // Delete (CRU[D])
  deleteUser(user: IUser) {
    this._http
      .delete(`${USER_API}/${user.id}`)
      .subscribe(res => this._rootStoreService.userDeletedRecived(user));
  }
}
