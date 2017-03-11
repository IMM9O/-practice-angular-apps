import { IGithubUser } from './../IGithubUser.json';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
    @Input() currentUserData: IGithubUser;
    @Output() searchNotify: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {
    }

    searchEvent($event: any) {
        console.log($event);
        this.searchNotify.emit($event.target.value);
    }
}
