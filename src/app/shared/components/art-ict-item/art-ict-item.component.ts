import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICTInterface} from "../../models/ict.interface";

@Component({
  selector: 'art-ict-item',
  templateUrl: './art-ict-item.component.html',
  styleUrls: ['./art-ict-item.component.scss']
})
export class ICTItemComponent {
  /**
   * @var index  The index of this item in a list
   */
  @Input() index: number = 0;

  /**
   * @var ictItem  The Item this component represents.
   */
  @Input() ictItem?: ICTInterface;

  /**
   * @var delete  An event emitter that triggers when the delete button is clicked.
   */
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  /**
   * Emits a delete event when the function is invoked.
   * This function is bound to the click event of the delete button.
   */
  deleteClicked(): void {
    this.delete.emit(this.index);
  }

}
