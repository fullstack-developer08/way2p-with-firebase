import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-card',
    template: `
    <div class="card">
        <div class="card-body">
            <ng-content select=".card-title"></ng-content>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <ng-content select=".card-text"></ng-content>
        </div>
    </div>
  `
})
export class ProductCardComponent implements OnInit {
    flowType: string = "NI";

    constructor() { }

    ngOnInit(): void {
    }

}
