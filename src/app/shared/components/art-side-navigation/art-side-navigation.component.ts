import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ArtSideMenuInterface } from '../../models/art-side-menu.interface';

@Component({
  selector: 'art-side-navigation',
  templateUrl: './art-side-navigation.component.html',
  styleUrls: ['./art-side-navigation.component.scss']
})
export class ArtSideNavigationComponent implements OnInit {

  constructor() { }

  /**
   * @description the input for the menu
   * @type ArtSideMenuInterface
   */
  @Input('sideMenu') sideMenu?: ArtSideMenuInterface;

  /**
   * @description Return an object to the parent when a menu item is clicked.
   */
  @Output() menuItemSelected: EventEmitter<{id:number, tabExit:boolean}> = new EventEmitter<{id:number,tabExit:boolean}>();

  /**
   * @description to capture the active ID and to reuse it when there is scrolling and the active item changes
   */
  activeId:number = -1;

  ngOnInit(): void {
  }

  /**
   * @description this function is trigger when user click on the menu link or presses enter.
   * @param id Active menu item id.
   * @return void
   */
  menuItemClicked(id: number, tabExit:boolean = false):void {
    //Store the active ID 
    this.activeId = id;
    this.menuItemSelected.emit({id, tabExit});
    let section = document.getElementById('form-section-' + id);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  /**
   * @description this function is called when the user is tabbing on this navigation
   * @param event 
   * @param lastItem if the element the user is pressing tab key is the last element of that side navigation
   */
  tabKeyPress(event:any, lastItem:boolean){
    //if the element the user is pressing tab key is the last element of that side navigation
    if(lastItem){
      //To stop any further propagation when the user tab on this navigation
      event.preventDefault();
      //Sending to the parent the menu item which is active with the notification it is for keyboard access where the user is about to leave the navbar
      this.menuItemClicked(this.activeId, true)
    }
  }

}
