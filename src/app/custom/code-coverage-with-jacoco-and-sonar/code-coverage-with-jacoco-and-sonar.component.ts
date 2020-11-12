import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-code-coverage-with-jacoco-and-sonar',
  templateUrl: './code-coverage-with-jacoco-and-sonar.component.html',
  styleUrls: ['./code-coverage-with-jacoco-and-sonar.component.scss']
})
export class CodeCoverageWithJacocoAndSonarComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    '',
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
