import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  activeTab: string;
  tabs: string[] = [];
  
  constructor(private helperService: HelperService) { 
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
    this.tabs = [
      'Ngrx Store - Basic counter app',
      'Ngrx Devtools',
      'Ngrx Effects',
      'Ngrx Store Router',
    ];
    this.activeTab = this.tabs[0];
  }

  selectTab(tabId: number, name? : string) {
    this.staticTabs.tabs[tabId].active = true;
    this.activeTab = name;
  }

}
