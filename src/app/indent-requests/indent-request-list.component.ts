import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  constructor(private router: Router, private cdr: ChangeDetectorRef, private requestDetailsService: RequestDetailsService) { }
  ngOnInit(): void {
    this.reqList = this.requestDetailsService.getAllRequests();
    this.selectedReq = this.reqList[0];
  }
  selectReq(req: IndentRequest) {
    this.selectedReq.selected = false;
    req.selected = true;
    this.selectedReq = req;
    this.cdr.detectChanges();
  }
}
