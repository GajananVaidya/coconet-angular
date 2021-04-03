import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestDetailsService } from './request-details.service';
import { IndentRequest } from './types';

@Component({
  selector: 'app-indent-request-list',
  templateUrl: './indent-request-list.component.html',
  styleUrls: ['./indent-request-list.component.scss']
})
export class IndentRequestListComponent implements OnInit {
  isCollapsed = false;
  reqList: IndentRequest[];
  selectedReq: IndentRequest;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private requestDetailsService: RequestDetailsService) { }
  ngOnInit(): void {
    this.reqList = this.requestDetailsService.getAllRequests();
    this.selectedReq = this.reqList[0];
    this.router.navigate(['view', this.reqList[0].reqCode], { relativeTo: this.activatedRoute });
  }
  selectReq(req: IndentRequest) {
    this.selectedReq.selected = false;
    this.router.navigate(['view', req.reqCode], { relativeTo: this.activatedRoute });
    req.selected = true;
    this.selectedReq = req;
  }
}
