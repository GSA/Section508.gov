import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormElement } from '../../models/form-element.interface';

@Component({
  selector: 'art-generic-text',
  templateUrl: './art-generic-text.component.html',
  styleUrls: ['./art-generic-text.component.scss']
})
export class ArtGenericTextComponent implements OnInit {

  /**
   * @description the input value for this component
   * @type string
   */
  @Input() title:string = '';
  /**
   * @description return the element the user clicked on
   */
   @Output() eltClicked = new EventEmitter<FormElement>();

  constructor() { }

  ngOnInit() {
  }

}
