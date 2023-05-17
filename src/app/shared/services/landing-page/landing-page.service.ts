import { Injectable } from '@angular/core';
import { ICTInterface } from '../../models/ict.interface';
import  LpButton  from '../../../../assets/data/lp-button.json';
import  Buttons  from '../../../../assets/data/buttons.json';
import { IButtonInterface } from '../../models/IButtonInterface';


@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }

  /**
   * @description store the value for the destination or next page
   * @type string
   */
  destination:NextPage = NextPage.none;

  /**
   * @description Getting the title header text and upload button description used on the landing page from the json file
   * @returns {buttonHeader:string}
   */
  getLpButtonData(): {buttonHeader:string}{
    return LpButton;
  }

  /**
   * @description Getting the label, the description and destination text for the get started button on the landing page
   * @returns IButtonInterface
   */
   getLpGetStrBtn(): IButtonInterface{
    return Buttons['getStarted'];
  }

  /**
   * @description Getting the label, the description and destination text for the upload json button on the landing page
   * @returns IButtonInterface
   */
   getLpUplBtn(): IButtonInterface{
    return Buttons['uploadICT'];
  }

  /**
   * @description used to update the destination
   * @param nextPage 
   * @type NextPage
   */
  setNextPage(nextPage:NextPage){
    this.destination = nextPage;
  }

  /**
   * @description used to update the destination
   * @return NextPage
   */
   getNextPage(): NextPage{
    return this.destination;
  }
  
}

export enum NextPage {
  getStarted = "getStarted",
  uploadICT = "uploadICT",
  none=""
}
