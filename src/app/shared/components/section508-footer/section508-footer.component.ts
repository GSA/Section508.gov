import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-section508-footer',
  templateUrl: './section508-footer.component.html',
  styleUrls: ['./section508-footer.component.scss']
})
export class Section508FooterComponent implements OnInit {

  constructor() { }
  @Input() url="";

  ngOnInit(): void {
  }

}
