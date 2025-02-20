import { ChangeDetectorRef, AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import { FormTemplateInterface } from 'src/app/shared/models/form-template.interface';
import { FormPageService } from 'src/app/shared/services/form-page/form-page.service';
import { IctItemService } from 'src/app/shared/services/ict-item/ict-item.service';
import { Router } from '@angular/router';
import { ArtIctLpAddService } from 'src/app/shared/services/art-ict-lp-add/art-ict-lp-add.service';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { ElementType } from 'src/app/shared/models/form-element.interface';
import { IStepIndicator } from "../../shared/models/step-indicator.interface";
import { FormGroup, FormControl, AbstractControl, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { ArtMessageService } from '../../shared/services/art-message/art-message-service';
@Component({
    selector: 'app-form-page',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit, AfterViewChecked {
    scanChange: any = "";
    /**
    * @description limit the maximum of ICT items that can be added
    * @type number
    */
    maxLength: number = 0;
    /**
     * @description limit the maximum of ICT items that can be added
     * @type number
     */
    index: number = 0;
    /**
     * @description Used to trigger the ngOnChanges function to listing to any input property change
     * @type any
     */
    /**
     * @description To display a loading container as the form is loading
     * @type boolean
     */
    loading: boolean = false;
    /**
     * @description Track the form page from the form component as the user is navigating
     * @type Number
     */
    pageNumber = 0;
    /**
     * @description Provide all the configuration for the forms and elements which will be created
     * @type FormTemplateInterface
     */
    formQConfig: FormTemplateInterface[] = [];
    /**
     * @description Provide all the form groups which will be created
     * @type FormGroup
     */
    formList: FormGroup[] = [];
    /**
    * @description Provide all the configuration for the forms and elements which will be created
    * @type FormTemplateInterface
    */
    formConfig: FormTemplateInterface[] = [];
    /**
     * @description Steps data for StepIndicatorComponent.
     * @type IStepIndicator
     */
    stepsData: IStepIndicator = { tabs: [], activeId: '0' };
    /**
    * @description to store all the ICT Items created or uploaded
    * @type: ICTInterface[]
    */
    ictItems: ICTInterface[] = [];
    /**
     * @description Flag to update step indicator.
     * @type boolean
     */
    updateStep: boolean = false;
    /**
     * @description store the value of the placeholder for an element
     * @type string
     */
    tempPlaceHolder: string | undefined;
    constructor(
        private formPageService: FormPageService,
        public ictItemService: IctItemService,
        public artMessageService: ArtMessageService,
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router,
        public artIctLpAddService: ArtIctLpAddService,
        private formBuilder: FormBuilder) { }
    ngOnInit(): void {
        this.maxLength = this.artIctLpAddService.getMaxItems();
        // Getting the form configuration, creating a new address, any update will no change this.formPageService data
        this.formQConfig = JSON.parse(JSON.stringify(this.formPageService.getConfigurations()));
        // Getting the form configuration
        this.formConfig = this.artIctLpAddService.getICTConfigurations();
        this.tempPlaceHolder = this.formConfig[0].formElements[0].placeholder;
        // Redirect to the home page if there is no ictitem/ on page reload
        if (this.ictItemService.get().length <= 0) this.router.navigateByUrl("/");
        if (this.ictItemService.get().length >= this.maxLength) {
            this.index = this.maxLength;
            this.formConfig[0].disable = true;
            this.formConfig[0].formElements[0].placeholder = "";
            this.scanChange = "true";
        }
        // Letting the form to load before nay initialization
        setTimeout(() => {
            this.formQConfig.splice(0, 1); // The default configuration from line 64 is still here and were never remover. Here we are removing the default configuration
            this.formPageService.prepopulateData(this.formQConfig, this.ictItemService.get());
            this.loading = true;
        }, 500);
        // Creating custom formName for each formElement and generation each configuration
        this.ictItemService.get().forEach((eachIctItem, index) => {
            this.stepsData.tabs.push({
                name: eachIctItem.name,
                id: index.toString()
            });
            //if(index > 0) { Removed this if condition   so the default configuration is still on the formQConfig and by adding this, we will have an addional denerated form we wll be using
            const tempConfig = this.formPageService.generateNewConfig(JSON.parse(JSON.stringify(this.formPageService.getConfigurations()[0])), '-' + Date.now().toString() + '-'.concat(index.toString()), eachIctItem);
            this.formQConfig.push(tempConfig);
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
    onPageChanged(index: number): void {
        this.pageNumber = index;
        this.stepsData.activeId = this.pageNumber.toString();
        this.updateStep = !this.updateStep;
    }
    /**
     * @return void
     * @description When the user submit an project or ICT name, it will call the addIctItem function
     * @param data 
     */
    onFormSubmitted(data: any): void {
        this.formPageService.setFormResults(data);
        const itcItems: ICTInterface[] = this.ictItemService.get();
        itcItems.forEach((eachItem, index) => {
            eachItem.langKeyWords = data[index];
        })
        // Saved the updatde items, will be used when ever the user returns to the form to repopulated values
        this.ictItemService.reSet(itcItems);
        this.router.navigateByUrl(('/summary-page'));
    }
    /**
    * @return void
    * @description When the user submit an project or ICT name, it will call the addIctItem function
    * @param data 
    */
    onFormAdded(dataArr: any): void {
        const data = dataArr[0];
        const key = Object.keys(data)[0];
        const val = data[key];
        const tempIctItem: ICTInterface = { name: val, langKeyWords: data, timeStamp: (Date.now()).toString() }
        this.addIctItem(tempIctItem, dataArr);
    }
    /**
 * @description Used to add an ICT item to the ictItem array
 * @type: ICTInterface
 * @return void
 */
    addIctItem(ictItem: ICTInterface, dataArr: any): void {
        this.index = this.stepsData.tabs.length + 1;
        // No action needed if the mx item is reached
        if (this.ictItems.length >= this.index && this.index < this.maxLength && this.formConfig[0].disable) {
            return;
        }
        if (this.ictItems.length < this.index) {
            var ictAll = this.ictItemService.get();
            ictAll.push(ictItem);
            this.ictItemService.reSet(ictAll);
            this.stepsData.tabs.push({
                name: ictItem.name,
                id: (this.stepsData.tabs.length).toString()
            });
            let outerIndex = this.formQConfig.length;
            console.log(this.formQConfig,"formQconfig")
            let uniqueId = (this.stepsData.tabs.length - 1).toString() + '-' + Date.now().toString(36) + Math.random().toString(36).substring(2);
            let formTemplateInterface = this.formPageService.generateNewConfig(JSON.parse(JSON.stringify(this.formPageService.getConfigurations()[0])), (uniqueId).toString(), ictItem);
            this.formList.push(new FormGroup({}));
            this.formQConfig.push(formTemplateInterface);
            //create controls elements for each form
            this.formQConfig[this.formQConfig.length - 1].formElements.forEach((eachFormElement, index) => {
                if (eachFormElement.elementType === ElementType.text) {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new FormControl(eachFormElement.value, eachFormElement.validations));
                } else {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new FormGroup({}));
                    const k = { ...this.formList[outerIndex] };
                }
            });
            //send message to art form template
            this.artMessageService.sendMessage(outerIndex);
        }
        // if the max item number has been reached, disable the form
        if (this.index >= this.maxLength) {
            this.formConfig[0].disable = true;
            this.formConfig[0].formElements[0].placeholder = "";
            this.scanChange = "true";
        }
    }
    /**
     * @description Update page number on step navigation click.
     * @param event
     */
    onSelectedTabReceive(event: number) {
        this.pageNumber = event;
    }
    ngOnDestroy(): void {
        if (this.ictItems.length <= this.index && this.formConfig[0].disable) {
            this.formConfig[0].disable = false;
            this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
            this.scanChange = "false";
        }
    }
    /**
    * @return void
    * @description When the user submit an project or ICT name, it will call the addIctItem function
    * @param data 
    */
    onFormDeleteIct(deleteIndex: any): void {
        this.formQConfig[deleteIndex].formElements.forEach((eachFormElement) => {
            this.formList[deleteIndex].reset(eachFormElement.controlName);
        });
        this.formList.splice(deleteIndex, 1);
        this.formQConfig.splice(deleteIndex, 1);
        this.stepsData.tabs.splice(deleteIndex, 1);
        const ict = this.ictItemService.get();
        ict.splice(deleteIndex, 1);
        this.ictItemService.reSet(ict);
        let newId = 0;
        this.stepsData.tabs.forEach((tab, tabIndex) => {
            tab.id = newId.toString();
            newId++;
        })
        this.index--;
        this.formConfig[0].disable = false;
        this.formConfig[0].formElements[0].placeholder = "";
        this.scanChange = "false";
    }
}
