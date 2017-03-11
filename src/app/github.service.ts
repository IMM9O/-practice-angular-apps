import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { IGithubUser } from './IGithubUser.json.js';

@Injectable()
export class GithubService {

    private _currentUsername: BehaviorSubject<string> = new BehaviorSubject(null);
    private currentUsername$: Observable<string> = this._currentUsername.asObservable();

    private _currentUserData: BehaviorSubject<IGithubUser> = new BehaviorSubject(null);
    public currentUserData$: Observable<IGithubUser> = this._currentUserData.asObservable();


    constructor() {
        this.currentUsername$.subscribe(res => {
            if (res && res.length > 0) {
                this.getUserNameProfile(res);
            }
        });
    }

    setUserName(_username: string) {
        this._currentUsername.next(_username);
    }

    getUserNameProfile(_name: string) {
        fetch(`https://api.github.com/users/${_name}`, {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then((response: any) => {
            if (!response.message) {
                console.log(response);
                this._currentUserData.next(<IGithubUser>response);
            }
        });
    }
}
