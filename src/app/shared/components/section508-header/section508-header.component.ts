import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'art-section508-header',
    templateUrl: './section508-header.component.html',
    styleUrls: ['./section508-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class Section508HeaderComponent implements OnInit {

  constructor() { }
  @Input() url = "";

  ngOnInit(): void {
  }

}
