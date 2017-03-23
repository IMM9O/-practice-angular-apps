import { IGithubUser } from './../IGithubUser.json';
import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubProfileComponent implements OnInit {
    @Input() currentUserData: IGithubUser;
    @Input() currentUserRepos: any;

    @Output() searchNotify: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    searchEvent($event: any) {
        this.searchNotify.emit($event.target.value);
    }
}
