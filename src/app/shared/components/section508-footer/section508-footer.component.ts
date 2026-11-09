import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'art-section508-footer',
    templateUrl: './section508-footer.component.html',
    styleUrls: ['./section508-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class Section508FooterComponent implements OnInit {

  constructor() { }
  @Input() url="";

  ngOnInit(): void {
  }

}
