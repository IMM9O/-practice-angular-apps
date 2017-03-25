import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-instance',
  templateUrl: './search-instance.component.html',
  styleUrls: ['./search-instance.component.css']
})
export class SearchInstanceComponent implements OnInit {
  @Output() searchNotify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchEvent($event: any) {
    this.searchNotify.emit($event.target.value);
  }

}
