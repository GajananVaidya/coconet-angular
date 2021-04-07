import { Component, Input } from '@angular/core';
import { IndentRequest } from '../types';

@Component({
  selector: 'request-details',
  styleUrls: ['./request-details.component.scss'],
  templateUrl: './request-details.component.html'
})
export class RequestDetailsComponent {
  @Input() selectedIndentRequest: IndentRequest;
  reqStatus = "approve";
  loading = true;
  isInfo = false;
  showInfo(event: MouseEvent) {
    this.isInfo = true;
    let left = event.pageX + 15;
    let top = event.pageY - 34;
    document.getElementById("desc-tooltip1").style.top = top + "px";
    document.getElementById("desc-tooltip1").style.left = left + "px";
  }
}