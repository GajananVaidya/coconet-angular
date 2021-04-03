import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndentRequestList } from './mock-data';
import { IndentRequest } from './types';

@Component({
  selector: 'app-indent-request-list',
  templateUrl: './indent-request-list.component.html',
  styleUrls: ['./indent-request-list.component.scss']
})
export class IndentRequestListComponent implements OnInit {
  isCollapsed = false;
  reqList: IndentRequest[] = IndentRequestList;
  private selectedReq: IndentRequest = this.reqList[0];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.navigate(['view', this.reqList[0].reqCode], { relativeTo: this.activatedRoute });
  }
  selectReq(req: IndentRequest) {
    this.selectedReq.selected = false;
    this.router.navigate(['view', req.reqCode], { relativeTo: this.activatedRoute });
    req.selected = true;
    this.selectedReq = req;
  }
}
