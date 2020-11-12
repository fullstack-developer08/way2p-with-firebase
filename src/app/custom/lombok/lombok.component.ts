import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-lombok',
  templateUrl: './lombok.component.html',
  styleUrls: ['./lombok.component.scss']
})
export class LombokComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.copyPreTagContent(null);
  }

}
