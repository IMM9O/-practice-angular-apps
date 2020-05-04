import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: Observable<any>;
  @Output() searchNotify: EventEmitter<string> = new EventEmitter();
  @Output() getItemNotify: EventEmitter<string> = new EventEmitter();
  term = new FormControl();

  constructor() {
     this.term.valueChanges.debounceTime(200).subscribe(res => this.searchEvent(res));
   }

  ngOnInit() { }

  searchEvent($event) {
    this.searchNotify.emit($event);
  }

  getItemEvent($event) {
    this.getItemNotify.emit($event);
  }

  selectEvent(name) {
    this.term.setValue(name);
    this.getItemEvent(name);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

  }
}
