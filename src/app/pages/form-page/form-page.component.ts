import {ChangeDetectorRef, AfterViewChecked, Component, HostListener, OnInit} from '@angular/core';
import { FormTemplateInterface } from 'src/app/shared/models/form-template.interface';
import { FormPageService } from 'src/app/shared/services/form-page/form-page.service';
import { IctItemService } from 'src/app/shared/services/ict-item/ict-item.service';
import { Router } from '@angular/router';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { ElementType } from 'src/app/shared/models/form-element.interface';
import {IStepIndicator} from "../../shared/models/step-indicator.interface";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit, AfterViewChecked {


  /**
   * @description Used to trigger the ngOnChanges function to listing to any input property change
   * @type any
   */
  scanChange:any = "";

  /**
   * @description To display a loading container as the form is loading
   * @type boolean
   */
  loading:boolean = false;

  /**
   * @description Track the form page from the form component as the user is navigating
   * @type Number
   */
  pageNumber = 0;

  /**
   * @description Provide all the configuration for the forms and elements which will be created
   * @type FormTemplateInterface
   */
  formConfig:FormTemplateInterface[] = [];

  /**
   * @description Steps data for StepIndicatorComponent.
   * @type IStepIndicator
   */
  stepsData: IStepIndicator = {tabs:[],activeId:'0'};

  /**
   * @description Flag to update step indicator.
   * @type boolean
   */
  updateStep: boolean = false;


  constructor(
    private formPageService: FormPageService, 
    public ictItemService: IctItemService,
    private changeDetectorRef: ChangeDetectorRef,
    private router:Router) { }

  ngOnInit(): void {
    
     // Getting the form configuration, creating a new address, any update will no change this.formPageService data
     this.formConfig = JSON.parse(JSON.stringify(this.formPageService.getConfigurations()));
   
     // Redirect to the home page if there is no ictitem/ on page reload
    if(this.ictItemService.get().length <= 0) this.router.navigateByUrl("/");

    // Letting the form to load before nay initialization
    setTimeout(() => {
      this.formConfig.splice(0,1); // The default configuration from line 64 is still here and were never remover. Here we are removing the default configuration
      this.formPageService.prepopulateData(this.formConfig,this.ictItemService.get());
      this.loading = true;
    }, 1000);

    // Creating custom formName for each formElement and generation each configuration
    this.ictItemService.get().forEach((eachIctItem,  index)=> {
      this.stepsData.tabs.push({
        name: eachIctItem.name,
        id: index.toString()
      });
      //if(index > 0) { Removed this if condition   so the default configuration is still on the formConfig and by adding this, we will have an addional denerated form we wll be using
        const tempConfig = this.formPageService.generateNewConfig(JSON.parse(JSON.stringify(this.formPageService.getConfigurations()[0])), '-'+Date.now().toString()+'-'.concat(index.toString()),eachIctItem);
        tempConfig.id = index;
        this.formConfig.push(tempConfig);
      //}
    });

    // Load the form page based on which the user selection was on the summary page ot be amended, it is 0 by default
    this.onPageChanged(this.formPageService.navToFormPage());

  }

  ngAfterViewChecked(): void {
    // To evaluate any variable angular hasn't check the value change
    this.changeDetectorRef.detectChanges();
  }

  /**
   * @description to update the page number when the form page is changing
   * @param index 
   * @type number
   * @return void
   */
  onPageChanged(index:number):void{
    this.pageNumber = index;
    this.stepsData.activeId = this.pageNumber.toString();
    this.updateStep = !this.updateStep;
  }

  /**
   * @return void
   * @description When the user submit an project or ICT name, it will call the addIctItem function
   * @param data 
   */
   onFormSubmitted(data:any):void{

      this.formPageService.setFormResults(data);
      const itcItems:ICTInterface[] = this.ictItemService.get();
      itcItems.forEach((eachItem,index) =>{
          eachItem.langKeyWords = data[index];
      })

      // Saved the updatde items, will be used when ever the user returns to the form to repopulated values
      this.ictItemService.reSet(itcItems);
      this.router.navigateByUrl(('/summary-page'));
  }

  /**
   * @description Update page number on step navigation click.
   * @param event
   */
  onSelectedTabReceive(event:number){
    this.pageNumber = event;
  }
}
