import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indent-request-list',
  templateUrl: './indent-request-list.component.html',
  styleUrls: ['./indent-request-list.component.scss']
})
export class IndentRequestListComponent implements OnInit {
  iscollapsed = false;
  reqList = [
    {
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
      selected: false,
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
    },
    {
      reqCode: 102,
      empName: "Shekhar Surve",
      empCode: "C011",
      department: "Account",
      createdDate: "12/12/2020",
      createdTime: "10:40 AM",
      status: "pending",
      reasonOfReq: "For new joinee",
      natureOfReq: "N/A",
      tat: "N/A",
      selected: false,
      productList: [
        {
          productName: "Mouse",
          uom: "NOS",
          indentQty: 2,
          doc: "",
          estimateRate: 500,
          estimatePrice: 1000
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
    }, {
      reqCode: 103,
      empName: "Prasad Kadam",
      empCode: "C041",
      department: "IT",
      createdDate: "15/12/2020",
      createdTime: "10:40 AM",
      status: "approved",
      reasonOfReq: "Personal use",
      natureOfReq: "N/A",
      tat: "N/A",
      selected: false,
      productList: [
        {
          productName: "Mouse",
          uom: "NOS",
          indentQty: 2,
          doc: "",
          estimateRate: 500,
          estimatePrice: 1000
        },
        {
          productName: "Headphones",
          uom: "NOS",
          indentQty: 1,
          doc: "",
          estimateRate: 2000,
          estimatePrice: 2000
        }
      ]
    },
    {
      reqCode: 104,
      empName: "Prasad Kadam",
      empCode: "C041",
      department: "IT",
      createdDate: "18/12/2020",
      createdTime: "02:00 PM",
      status: "approved",
      reasonOfReq: "Personal use",
      natureOfReq: "N/A",
      tat: "N/A",
      selected: false,
      productList: [
        {
          productName: "Keyboard",
          uom: "NOS",
          indentQty: 2,
          doc: "",
          estimateRate: 500,
          estimatePrice: 1000
        }
      ]
    }
  ];
  selectedRreq;
  reqStatus = "approve";
  isInfo = false;
  constructor() { }

  ngOnInit(): void {
    this.reqList[0].selected = true;
    this.selectedRreq = this.reqList[0];
  }

  selectreq(req) {
    this.reqList.forEach(el => el.selected = false);
    req.selected = true;
    this.selectedRreq = req;
  }

  showInfo(event) {
    this.isInfo = true;
    let left = event.pageX + 15;
    let top = event.pageY - 34;
    document.getElementById("desc-tooltip1").style.top = top + "px";
    document.getElementById("desc-tooltip1").style.left = left + "px";
  }
}
