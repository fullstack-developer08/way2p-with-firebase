import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-java-reactive-programming',
  templateUrl: './java-reactive-programming.component.html',
  styleUrls: ['./java-reactive-programming.component.scss']
})
export class JavaReactiveProgrammingComponent implements OnInit {

  
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'Introduction',
    'Project Reactor Essentials',
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
