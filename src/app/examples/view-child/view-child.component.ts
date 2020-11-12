import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/common/services/helper.service';
import { SecondChildComponent } from './another-child-component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChild1Component implements OnInit, AfterViewInit {
  @ViewChild("secondChild") secondChild: SecondChildComponent;
  @ViewChild("userData") userData: ElementRef;
  userForm;
  
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.copyPreTagContent(null);
  }

  ngAfterViewInit(): void {
    this.secondChild.userForm.valueChanges.subscribe((data) => {
      this.userForm = data;
    });
    this.userData.nativeElement.style.backgroundColor = "lightgreen";
  }

}
