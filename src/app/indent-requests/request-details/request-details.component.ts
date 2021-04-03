import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestDetailsService } from '../request-details.service';
import { IndentRequest } from '../types';

@Component({
  selector: 'request-details',
  styleUrls: ['./request-details.component.scss'],
  templateUrl: './request-details.component.html'
})
export class RequestDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private requestDetailsService: RequestDetailsService, private cdr: ChangeDetectorRef) { }
  reqStatus = "approve";
  loading = true;
  selectedIndentRequest: IndentRequest;
  isInfo = false;
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const selectedIndentRequest = param.get('id');
      this.loading = true;
      setTimeout(() => {
        this.selectedIndentRequest = this.requestDetailsService.getRequestById(Number(selectedIndentRequest));
        this.loading = false;
      }, 5000);
    });
  }
  showInfo(event: MouseEvent) {
    this.isInfo = true;
    let left = event.pageX + 15;
    let top = event.pageY - 34;
    document.getElementById("desc-tooltip1").style.top = top + "px";
    document.getElementById("desc-tooltip1").style.left = left + "px";
  }
}