import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-junit5',
  templateUrl: './junit5.component.html',
  styleUrls: ['./junit5.component.scss']
})
export class Junit5Component implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'First Junit test - Red Bar',
    'Importance of assertions',
    'First Unit Test Case with assertEquals',
    'Assertions for assertNotNull, assertNull',
    'Assertions for assertTrue, assertFalse',
    'Assertions for Arrays - assertsArrayEquals',
    'Setting up data for every test - @BeforeEach, @AfterEach',
    'Setting up common data for all test case - @BeforeAll, @AfterAll',
    'Testing Exception with assertThrows',
    '@DisplayName and test method need not to be public',
    'Basics of Parameterized tests',
    'Advanced Parameterized tests with CSV Source',
    'name of the Parameterzied tests',
    'Repeat same test using @RepeatedTest',
    'Unit testing for Performance using assertTimeout',
    'Disable unit tests',
    '@Nested tests'
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
