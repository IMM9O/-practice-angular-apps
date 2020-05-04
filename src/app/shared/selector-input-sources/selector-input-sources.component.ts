import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { COUNTRIES } from 'src/models/Countries';
import { IOption } from 'src/models/IOption';
import { NewsGatewayService } from 'src/app/network/news-gateway.service';

@Component({
  selector: 'app-selector-input-sources',
  templateUrl: './selector-input-sources.component.html',
  styleUrls: ['./selector-input-sources.component.css']
})
export class SelectorInputSourcesComponent implements OnInit {
  sourcesList$: Observable<IOption[]>;
  /**
   * 'fieldId' is a unique field identification
   * Example: 'email', 'password'
   *    ---REQUIRED PROPERTY---
   */
  @Input() isInline = false;
  @Input() filedLabel = 'Select your Country';
  /**
   * 'control' is a reactive form validator/value controller
   *    ---REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;
  countryOptions = COUNTRIES;

  constructor(private _news: NewsGatewayService) {}

  ngOnInit() {
    this.sourcesList$ = this._news.getSourcesList().pipe(
      map(sources =>
        sources.map(src => {
          return {
            key: src.id,
            value: src.name
          };
        })
      )
    );
  }
}
