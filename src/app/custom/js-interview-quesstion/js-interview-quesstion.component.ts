import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-js-interview-quesstion',
  templateUrl: './js-interview-quesstion.component.html',
  styleUrls: ['./js-interview-quesstion.component.scss']
})
export class JsInterviewQuesstionComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'How do you clone an object?',
    'How do you add an element at the begining of an array? How do you add one at end?',
    'What is Closure?',
    'What is Prototype Inheritance?',
    'How do you add new element using javascript to DOM?',
    'Explain Hoisting in JavaScript',
    'Is Javascript a statically typed or dynamically typed language?'
  ];

  constructor(private helperService: HelperService) {

  }

  ngOnInit(): void {
    this.name = this.tabs[0];
    this.helperService.copyPreTagContent(null);
  }

  selectTab(tabId: number, name?: string) {
    this.staticTabs.tabs[tabId].active = true;
    this.name = name;
  }

}
