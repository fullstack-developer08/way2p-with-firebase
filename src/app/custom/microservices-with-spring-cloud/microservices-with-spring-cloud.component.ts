import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-microservices-with-spring-cloud',
  templateUrl: './microservices-with-spring-cloud.component.html',
  styleUrls: ['./microservices-with-spring-cloud.component.scss']
})
export class MicroservicesWithSpringCloudComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  name;

  tabs = [
    'Limits Service',
    'Spring Cloud Config Server',
    'Connecting limits service to Spring Cloud Config Server',
    'Currency Exchange Service',
    'Currency Conversion Service',
    'Problem 1',
    'Currency Conversion Service - Replacing RestClient to OpenFeign Client',
    'Problem 2',
    'Currency Conversion Service - Setting up Client Side load balancing with Ribbon',
    'Problem 3',
    'Eureka Naming Server Or Discovery Service',
    'Add Eureka Client dependency to the Conversion and Exchange Service',
    'Resolved Problem 3 Using Naming server',
    'Problem 4',
    'Setting up Zuul API Gateway',
    'Changes in Currency Conversion Proxy Service',
    'Problem 5',
    'Adding Slueth to Zuul Gateway, Conversion Service and Exchange Service',
    'Problem 6',
    'Download Zipkin Server',
    'Adding zipkin dependency to the Zuul, Exchange and Conversion services',
    'Extra Material',
    'Problem 7',
    'Spring Cloud Bus',
    'Fault Tolerance using Hystrix',
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
