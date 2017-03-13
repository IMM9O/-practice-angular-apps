import { Component, OnInit , Input , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchList: any[];
  @Output() searchNotify: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchEvent($event) {
    this.searchNotify.emit($event.target.value);
  }

}
