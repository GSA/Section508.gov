import { Component, OnInit } from '@angular/core';
import { IButtonInterface } from 'src/app/shared/models/IButtonInterface';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { IStepIndicator } from 'src/app/shared/models/step-indicator.interface';
import { IctItemService } from 'src/app/shared/services/ict-item/ict-item.service';
import { LandingPageService, NextPage } from 'src/app/shared/services/landing-page/landing-page.service';

@Component({
  selector: 'art-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  /**
   * @description Using the  ICT Item service and the landing page service
   * @params ictItemService, landingPageService
   */
  constructor(private ictItemService:IctItemService, public landingPageService:LandingPageService ) { }

  /**
   * @description data for the description above the button
   * @type string
   */
  lpButtonHeader:string = "";

  /**
    * @description Storing the data for the get started button: label and destination
    * @type IButtonInterface
    */
  getStartedBtn:IButtonInterface = {label:""};

  /** 
  * @description storing the data for the upload ict button. labe and destination
  * @type IButtonInterface
  */
  getUploadICTBtn:IButtonInterface = {label:""}


  ngOnInit(): void {
    //Initialization
    this.lpButtonHeader = this.landingPageService.getLpButtonData().buttonHeader;
    this.getStartedBtn = {...this.landingPageService.getLpGetStrBtn(), action:()=>{this.getNextPage(NextPage.getStarted)}};
    this.getUploadICTBtn = {...this.landingPageService.getLpUplBtn(), action:()=>{this.getNextPage(NextPage.uploadICT)}};
  }


  /**
   * @description set the destination on the next page
   * @param nextPage 
   * @type string
   */
  getNextPage(nextPage:NextPage):void{
      this.landingPageService.setNextPage(nextPage);
  }

}
