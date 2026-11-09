import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'art-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BannerComponent implements OnInit {

  constructor() { }

  /**
   * @description Title for the banner
   * @type string
   */
  @Input() title:string = "";

  /**
   * @description Header for the banner
   * @type string
   */
  @Input() header:string = "";

  ngOnInit(): void {
  }

}
