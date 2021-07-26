import {Component, OnInit} from '@angular/core';
import {camelCase} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  someString = camelCase('Some random string to get lodash in here.');

  ngOnInit(): void {}
}
