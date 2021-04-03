import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'request-details',
  styleUrls: ['./request-details.component.scss'],
  templateUrl: './request-details.component.html'
})
export class RequestDetailsComponent {
  constructor(private route: ActivatedRoute) { }
  selectedRreq = {
    reqCode: 101,
    empName: "Shekhar Surve",
    empCode: "C011",
    department: "Account",
    createdDate: "12/12/2020",
    createdTime: "10:40 AM",
    status: "pending",
    reasonOfReq: "For new joinee",
    natureOfReq: "N/A",
    tat: "N/A",
    selected: true,
    productList: [
      {
        productName: "Dell Laptop",
        uom: "NOS",
        indentQty: 2,
        doc: "",
        estimateRate: 25000,
        estimatePrice: 50000
      },
      {
        productName: "Lenovo Laptop",
        uom: "NOS",
        indentQty: 1,
        doc: "",
        estimateRate: 25000,
        estimatePrice: 25000
      }
    ]
  };
  reqStatus = "approve";
  isInfo = false;
  showInfo(event) {
    this.isInfo = true;
    let left = event.pageX + 15;
    let top = event.pageY - 34;
    document.getElementById("desc-tooltip1").style.top = top + "px";
    document.getElementById("desc-tooltip1").style.left = left + "px";
  }
}