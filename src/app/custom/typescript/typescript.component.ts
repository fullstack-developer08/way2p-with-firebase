import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name; 

  tabs = [
    'What is TypeScript?',
    'Why use TypeScript?',
    'Why TypeScript is developed while having JavaScript?',
    'Typescript Features',
    'Advantage and Disadvantage of the TypeScript',
    'Difference between JavaScript and TypeScript',
    'Components of TypeScript',
    'TypeScript Installation',
    'TypeScript First Program',
    'Type Annotations in TypeScript',
    'Var, Let and Const',
    'Types in TypeScript',
    'Number Types',
    'String Type'
  ];

  constructor(private helperService: HelperService) { 
    
  }
  
  ngOnInit(): void {
    this.name = this.tabs[0];
    this.helperService.copyPreTagContent(null);
  }

  selectTab(tabId: number, name? : string) {
    this.staticTabs.tabs[tabId].active = true;
    this.name = name;
  }
}
