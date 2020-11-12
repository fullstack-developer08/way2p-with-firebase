import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  activeTab: string;
  tabs: string[] = [];

  constructor(private helperService: HelperService) {
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
    this.tabs = [
      'of Operator',
      'from Operator',
      'interval Operator',
      'timer Operator',
      'concat Operator',
      'merge Operator',
      'map Operator',
      'tap Operator',
      'switchMap Operator',
      'mergeMap/flatMap Operator',
    ];
    this.activeTab = this.tabs[0];
  }

  selectTab(tabId: number, name?: string) {
    this.staticTabs.tabs[tabId].active = true;
    this.activeTab = name;
  }

}
