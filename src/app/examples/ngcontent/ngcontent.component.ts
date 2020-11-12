import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.scss']
})
export class NgcontentComponent implements OnInit {

  data = [
    {
      cardTitle: 'Heading1',
      cardText: 'cardText1'
    },
    {
      cardTitle: 'Heading2',
      cardText: 'cardText2'
    },
    {
      cardTitle: 'Heading3',
      cardText: 'cardText3'
    },
    {
      cardTitle: 'Heading4',
      cardText: 'cardText4'
    },
    {
      cardTitle: 'Heading5',
      cardText: 'cardText5'
    },
    {
      cardTitle: 'Heading6',
      cardText: 'cardText6'
    },
    {
      cardTitle: 'Heading7',
      cardText: 'cardText7'
    },
  ]
  
  constructor(private helperService: HelperService) { 
    this.helperService.copyPreTagContent(null);
  }

  ngOnInit(): void {
  }

}
