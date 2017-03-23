import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {IGithubUser} from './IGithubUser.json.js';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private _currentUsername : BehaviorSubject < string > = new BehaviorSubject(null);
    private currentUsername$ : Observable < string > = this._currentUsername.asObservable();

    private _currentUserInfo : BehaviorSubject < IGithubUser > = new BehaviorSubject(null);
    public currentUserInfo$ : Observable < IGithubUser > = this._currentUserInfo.asObservable();

    private _currentUserRepos : BehaviorSubject < any > = new BehaviorSubject(null);
    public currentUserRepos$ : Observable < any > = this._currentUserRepos.asObservable();

    constructor(private _http : Http) {
        this
            .currentUsername$
            .subscribe(res => {
                if (res && res.length > 0) {
                    this.getUserNameProfile(res);
                    this.getUserNameRepos(res);
                }
            });
    }

    setUserName(_username : string) {
        this._currentUsername.next(_username);
    }

    getUserNameProfile(_name : string) {
        this._http
            .get(`https://api.github.com/users/${_name}`)
            .map(res => res.json())
            .subscribe(res => {
                if (!res.message) {
                    this._currentUserInfo.next(<IGithubUser>res); 
                }
            }); 
            
    } 
    
    getUserNameRepos(_name: string) {
        this._http
            .get(`https://api.github.com/users/${_name}/repos`)
            .map(res => res.json())
            .subscribe(res => {
                if (!res.message) {
                    this._currentUserRepos.next(res); 
                }
            }); 

    }
}