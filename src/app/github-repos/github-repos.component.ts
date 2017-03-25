import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubReposComponent implements OnInit {
  @Input() currentUserRepos: any;

  constructor() { }

  ngOnInit() {
  }

}
