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
  activeTab;

  tabs = [
    'How do you clone an object?',
    'How do you add an element at the begining of an array? How do you add one at end?',
    'What is Closure?', 
    'What is Prototype Inheritance?',
    'How do you add new element using javascript to DOM?',
    'Explain Hoisting in JavaScript',
    'Is Javascript a statically typed or dynamically typed language?',
    'What are the pop-up boxes available in JavaScript?',
    'What is the use of a Map object in JavaScript?',
    'What is the use of a WeakMap object in JavaScript?',
    'Difference between write and writeln method',
    'What is the difference between window & Document?',
    'Is JavaScript a case-sensitive language?'
  ];

  constructor(private helperService: HelperService) {

  }

  ngOnInit(): void {
    this.name = this.tabs[0];
    this.activeTab = this.tabs[0];
    this.helperService.copyPreTagContent(null);
  }

  selectTab(tabId: number|string, name?: string) {
    this.staticTabs.tabs[tabId].active = true;
    this.name = name;
    if (typeof tabId === 'number') this.activeTab = tabId;
    else {
      
      this.staticTabs.tabs[this.activeTab+1].active = true;
    }
  }

}
