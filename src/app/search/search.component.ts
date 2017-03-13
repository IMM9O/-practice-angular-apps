import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: Observable<any>;
  @Output() searchNotify: EventEmitter<string> = new EventEmitter();
  @Output() getItemNotify: EventEmitter<string> = new EventEmitter();
  searchText = '';

  constructor() { }

  ngOnInit() { }

  searchEvent($event) {
    this.searchNotify.emit($event);
  }

  getItemEvent($event) {
    this.getItemNotify.emit($event);
  }

  selectEvent(name) {
    this.searchText = name;
    this.getItemEvent(name);
  }

}
