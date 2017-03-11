import { IGithubUser } from './../IGithubUser.json';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'github-profile',
    template: `
    <input type="text" name="fname"  (keyup.enter)="searchEvent($event)">
    <br>

    <span *ngIf='currentUserData' >
    
      {{ currentUserData.html_url }}
    </span> 
    `,
    styles: [`
        :host {
            display: flex;
            margin: 15px;
            border: 1px solid;
            border-color: blanchedalmond;
            padding: 15px;
            justify-content: center;
            align-items: flex-start;

        }
    `
    ]
})
export class GithubProfileComponent implements OnInit {
    @Input() currentUserData: IGithubUser;
    @Output() searchNotify: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {
    }

    searchEvent($event: any) {
        this.searchNotify.emit($event.target.value);
    }
}
