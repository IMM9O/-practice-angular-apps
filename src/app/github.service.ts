import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { IGithubUser } from './IGithubUser.json.js';

@Injectable()
export class GithubService {

    private _currentUsername: BehaviorSubject<string> = new BehaviorSubject(null);
    private currentUsername$: Observable<string> = this._currentUsername.asObservable();

    private _currentUserInfo: BehaviorSubject<IGithubUser> = new BehaviorSubject(null);
    public currentUserInfo$: Observable<IGithubUser> = this._currentUserInfo.asObservable();

    private _currentUserRepos: BehaviorSubject<any> = new BehaviorSubject(null);
    public currentUserRepos$: Observable<any> = this._currentUserRepos.asObservable();



    constructor() {
        this.currentUsername$.subscribe(res => {
            if (res && res.length > 0) {
                this.getUserNameProfile(res);
                this.getUserNameRepos(res);
            }
        });
    }

    setUserName(_username: string) {
        this._currentUsername.next(_username);
    }

    getUserNameProfile(_name: string) {
        fetch(`https://api.github.com/users/${_name}`, {
            method: 'GET'
        }).then((response: any) => {
            return response.json();
        }).then((response: any) => {
            if (!response.message) {
                this._currentUserInfo.next(<IGithubUser>response);
            }
        });
    }

    getUserNameRepos(_name: string) {
        fetch(`https://api.github.com/users/${_name}/repos`, {
            method: 'GET'
        }).then((response: any) => {
            return response.json();
        }).then((response: any) => {
            if (!response.message) {
                console.log(response);
                this._currentUserRepos.next(response);
            }
        });
    }
}
