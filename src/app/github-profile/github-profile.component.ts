import { IGithubUser } from './../IGithubUser.json';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubProfileComponent implements OnInit {
    @Input() currentUserData: IGithubUser;

    constructor() { }

    ngOnInit() { }

}
