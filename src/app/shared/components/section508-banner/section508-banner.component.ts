import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-section508-banner',
  templateUrl: './section508-banner.component.html',
  styleUrls: ['./section508-banner.component.scss']
})
export class Section508BannerComponent implements OnInit {

  constructor() { }

  @Input() url = "";
  ngOnInit(): void {
  }

}
