import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'dsa-guarantee',
  templateUrl: './guarantee.component.html',
  styleUrls: ['./guarantee.component.scss']
})
export class GuaranteeComponent implements OnInit {
  private window: Window | null;
  constructor(
    @Inject(DOCUMENT) docRef: Document
  ) {this.window = docRef.defaultView }

  ngOnInit(): void {
    this.window?.scrollTo(0,0);
  }

}
