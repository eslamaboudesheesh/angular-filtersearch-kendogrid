import { Component } from "@angular/core";

import { filterBy } from "@progress/kendo-data-query";

@Component({
  selector: "my-app",
  template: `
    <input class="k-textbox" (input)="onInput($event.target.value)" />
    <kendo-grid [data]="gridData" [height]="410">
      <kendo-grid-column field="ProductID" title="ID" width="40">
      </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Name" width="250">
      </kendo-grid-column>
    </kendo-grid>
  `
})
export class AppComponent {
  products = [
    {
      ProductID:1,
      ProductName: "chaaai"
    },
    {
      ProductID:2,
      ProductName: "eslam"
    },
    {
      ProductID:3,
      ProductName: "mohammed"
    }
  ];

  public gridData: any[] = this.products;

  onInput(filter) {
    var changeWord = filter.trim().toLowerCase();
    // var cc = [];
    // for (var item in this.products) {
    //   if (
    //     this.products[item].ProductName.includes(changeWord) ||
    //     this.products[item].ProductID.toString().includes(changeWord)
    //   ) {
    //     cc.push(this.products[item]);
    //   }
    //   console.log(cc);
    // }

    const newData = filterBy(this.products,{
      logic:"or",
      filters:[
     { field:"ProductID", operator:'eq',value:filter,ignoreCase: true},
    { field:"ProductName", operator:'contains',value:filter}
      ]
    });
   this.gridData =newData;
   // this.gridData = cc;
  }
}
