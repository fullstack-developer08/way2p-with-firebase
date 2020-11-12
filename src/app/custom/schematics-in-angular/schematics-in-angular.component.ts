import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-schematics-in-angular',
  templateUrl: './schematics-in-angular.component.html',
  styleUrls: ['./schematics-in-angular.component.scss']
})
export class SchematicsInAngularComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.copyPreTagContent(null);
  }

}
