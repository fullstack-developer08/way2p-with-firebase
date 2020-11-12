import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-angular-lifecycle-hook',
  templateUrl: './angular-lifecycle-hook.component.html',
  styleUrls: ['./angular-lifecycle-hook.component.scss']
})
export class AngularLifecycleHookComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.copyPreTagContent(null);
  }

}
