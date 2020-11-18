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
    'Is JavaScript a case-sensitive language?',
    'What is the difference between an alert box and a confirmation box?',
    'What is Callback?',
    'What is a prompt box?',
    'What is === operator?',
    'Explain the difference between "==" and "==="?',
    'What would be the result of 5+4+"7"?',
    'What is an undefined value in JavaScript?',
    'What is the use of typeof operator?',
    'Which keywords are used to handle exceptions?',
    'What is the use of blur function?',
    'What is the difference between JavaScript and Jscript?',
    'What is the difference between null and undefined keywords?',
    'What is the difference between let and const keywords?',
    'What is the difference between == and === sign?',
    'What is the difference between let and var keywords?',
    'What is prototype based inheritance?'
  ];

  constructor(private helperService: HelperService) {

  }

  ngOnInit(): void {
    this.name = this.tabs[0];
    this.activeTab = 0;
    this.helperService.copyPreTagContent(null);
  }

  selectTab(tabId: number, name?: string) {
    if (this.staticTabs.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true
      this.activeTab = tabId;
      this.name = this.tabs[this.activeTab];
    }

  }

  changeTab(type) {
    if (type === 'pre') {
      const tab = this.activeTab > 0 ? this.activeTab - 1 : 0;
      this.selectTab(tab)
    }
    else if (type === 'next') {
      const tab = this.tabs.length === this.activeTab ? this.activeTab : this.activeTab + 1;
      this.selectTab(tab)
    }
  }

}
