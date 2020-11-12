import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-spring-boot-restful-webservice',
  templateUrl: './spring-boot-restful-webservice.component.html',
  styleUrls: ['./spring-boot-restful-webservice.component.scss']
})
export class SpringBootRestfulWebserviceComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'Application Code',
    'Exception Handling for All Controller',
    'HATEOAS',
    'Internationalization',
    'Internationalization Changes/Suggestions',
    'Content Negotiations',
    'Swagger Impl',
    'Actuator with HAL Browser',
    'Static and Dynamic Filtering',
    'Basic Authentication With Spring Security',
    'Configure Jpa and H2'
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
