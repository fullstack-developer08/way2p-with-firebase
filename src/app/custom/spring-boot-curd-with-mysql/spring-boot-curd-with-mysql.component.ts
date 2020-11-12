import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-spring-boot-curd-with-mysql',
  templateUrl: './spring-boot-curd-with-mysql.component.html',
  styleUrls: ['./spring-boot-curd-with-mysql.component.scss']
})
export class SpringBootCurdWithMysqlComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'Application Code',
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
