import { Component, OnDestroy, OnInit } from '@angular/core';
import { IButtonInterface } from 'src/app/shared/models/IButtonInterface';
import { IctItemService } from 'src/app/shared/services/ict-item/ict-item.service';
import { FormTemplateInterface } from 'src/app/shared/models/form-template.interface';
import { ArtIctLpService } from 'src/app/shared/services/art-ict-lp/art-ict-lp.service';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { LandingPageService, NextPage } from 'src/app/shared/services/landing-page/landing-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ict-listing-page',
  templateUrl: './ict-listing-page.component.html',
  styleUrls: ['./ict-listing-page.component.scss']
})
export class IctListingPageComponent implements OnInit, OnDestroy {

  /**
   * @description limit the maximum of ICT items that can be added
   * @type number
   */
  maxItems:number = 0;

  /**
   * @description Provide all the configuration for the forms and elements which will be created
   * @type FormTemplateInterface
   */
  formConfig:FormTemplateInterface[] = [];

  /**
   * @description Used to trigger the ngOnChanges function to listing to any input property change
   * @type any
   */
  scanChange:any = "";

  /**
   * @description to store all the ICT Items created or uploaded
   * @type: ICTInterface[]
   */
  ictItems:ICTInterface[] = [];

  /**
   * @description store the value of the placeholder for an element
   * @type string
   */
  tempPlaceHolder:string | undefined;

  /**
  * @description enum to set predefined string 
  * @type string
  */
  nextPage = NextPage;

  /**
   * @description using the ictItemService component and artIctLpService service
   * @param ictItemService artIctLpService
   */
  constructor(
    private router:Router,
    public landingPageService: LandingPageService,
    private ictItemService: IctItemService, 
    public artIctLpService:ArtIctLpService) { }

  ngOnInit(): void {
    this.maxItems = this.artIctLpService.getMaxItems();

    // Return on the home page if the user refreshes the page, because all the content will be lost
    if(!this.landingPageService.getNextPage()){
      this.router.navigateByUrl("/");
    }
    // Getting the form configuration
    this.formConfig = this.artIctLpService.getConfigurations();
    this.tempPlaceHolder = this.formConfig[0].formElements[0].placeholder;

  }

  /**
   * @description Before the page is getting destructed, the form needs to be disable if it was enable before
   * @return void
   */
  ngOnDestroy(): void {
    if(this.ictItems.length <= this.maxItems && this.formConfig[0].disable ){
      this.formConfig[0].disable = false;
      this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
      this.scanChange="false";
    }
  } 

  /**
   * @return void
   * @description When the user submit an project or ICT name, it will call the addIctItem function
   * @param data 
   */
  onFormSubmitted(dataArr:any):void{
    const data = dataArr[0];
    const key = Object.keys(data)[0];
    const val = data[key];
    const tempIctItem:ICTInterface = {name:val, langKeyWords:data, timeStamp: (Date.now()).toString()} 
    this.addIctItem(tempIctItem);
  }

   /**
   * @description When the user delete an ictItem, it will return the index of the ictItem deleted
   * @param index 
   * @type number
   * @return void
   */
  onItemDelete(index:number):void{
    this.removeIctItem(index-1);
  }

  /**
   * @description Used to remove an ICT item from the ictItem array
   * @type: number
   * @return void
   * @param index
   */
   removeIctItem(index: number):void{
    if(this.ictItems[index]){
      // If the form  is disabled and an item is being removed 
      if(this.ictItems.length <= this.maxItems && this.formConfig[0].disable ){
        this.formConfig[0].disable = false;
        this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
        this.scanChange="false";
        this.ictItems.splice(index,1);
      }else{
        this.ictItems.splice(index,1);
      };
      this.ictItemService.reSet(this.ictItems);
    }
   }

  /**
   * @description Used to add an ICT item to the ictItem array
   * @type: ICTInterface
   * @return void
   */
  addIctItem(ictItem: ICTInterface):void{
    // No action needed if the mx item is reached
    if(this.ictItems.length >= this.maxItems && this.formConfig[0].disable){
      return;
    }

    if(this.ictItems.length < this.maxItems){
      this.ictItems.push(ictItem);
      this.ictItemService.reSet(this.ictItems);
    }

    // if the max item number has been reached, disable the form
    if(this.ictItems.length === this.maxItems){
      this.formConfig[0].disable = true;
      this.formConfig[0].formElements[0].placeholder = "";
      this.scanChange="true";
    }
  }

  /**
   * @description when the file has been uploaded successfully, this function is called 
   * @param event 
   * @type ICTInterface
   * @return void
   */
   onFileReceive(event:ICTInterface[]):void{
    //this.ictItemService.set(event);
    event.forEach(eachIctItem => this.addIctItem(eachIctItem));
  }
}
