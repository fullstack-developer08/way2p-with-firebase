import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'angular-practices-with-example',
  templateUrl: './angular-practices-with-example.component.html',
  styleUrls: ['./angular-practices-with-example.component.scss']
})
export class AngularPracticesWithExampleComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  activeTab: string;
  tabs: string[] = [];
  
  constructor(private helperService: HelperService) { 
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
    this.tabs = [
      'Reactive Form - without form builder',
      'Reactive Form - with form builder and default validation',
      'Reactive Form - with valueChanges and patchValue',
      'Reactive Form - valueChanges with debounceTime',
      'Reactive Form - Nested Form along with Form Array',
      'Reactive Form - Custom Validation',
      'Reactive Form - Custom Async Validator',
      'Reactive Form - statusChanges and valueChanges',
    ];
    this.activeTab = this.tabs[0];
  }

  selectTab(tabId: number, name? : string) {
    this.staticTabs.tabs[tabId].active = true;
    this.activeTab = name;
  }

}
