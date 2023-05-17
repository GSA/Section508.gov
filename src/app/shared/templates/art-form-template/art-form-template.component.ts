import {Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { FormElement, ElementType } from 'src/app/shared/models/form-element.interface';
import { FormTemplateInterface } from 'src/app/shared/models/form-template.interface';
import { FormButtons } from '../../models/form-buttons.interface';
import { IButtonInterface } from '../../models/IButtonInterface';
import { ICTInterface } from '../../models/ict.interface';
import { Router } from '@angular/router';
import { IctItemService } from '../../services/ict-item/ict-item.service';
import {ArtSideMenuInterface} from "../../models/art-side-menu.interface";


@Component({
  selector: 'art-form-template',
  templateUrl: './art-form-template.component.html',
  styleUrls: ['./art-form-template.component.scss']
})
export class ArtFormTemplateComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder,
    public router:Router, 
    public ictItemService:IctItemService
    ) { }

  /**
   * @description An array of forms. Can have any any number of form, each form having its own sent of controls
   * @type Array<FormGroup>
   */
  formList: FormGroup[] = [];

  /**
   * @description All the elements for all any number of forms
   * @type Double array of FormControl
   */
  formElements:FormControl[][] = [[],[]];

  /**
   * @description Will use the ElementType enum to enforce specific type of elements already predefined
   * @type
   */
  elementType = ElementType;

  /**
   * @description To flag when all the forms have been completed
   * @type boolean[]
   */
  formCompletetion:boolean[] = []

  /**
   * @description the button to navigate to the previous form
   * @type IButtonInterface
   */
  backButton: IButtonInterface = {label:"Previous ICT", ariaLabel: "navigate to the previous form", btnClass:"base",  action: ()=>{} };

  /**
   * @description the button to navigate to the next form
   * @type IButtonInterface
   */
  nextButton: IButtonInterface = {label:"Next ICT", ariaLabel: "navigate to the next form", btnClass:"base", action: ()=>{} };

  /**
   * @type number
   * @description tracking the page navigation 
   */
  navIndex:number = 0;

  /**
   * @description storing the formControl the user selected
   */
  elementSelected:FormElement | undefined;

  /**
   * @description Generate side navigation
   * @type ArtSideMenuInterface
   */
  sideMenu: ArtSideMenuInterface = {
    sideNavItems:[],
    activeId: 0
  };

  /**
   * Used to trigger an component to run ngOnchange when an object was been updated but not flagged by angular
   */
  eltUpdated = false;

  /**
   * @description Access all the form element on the DOM
   */
  @ViewChildren('formGroupAnchor') locRefFormGroup: QueryList<ElementRef> | undefined;

  /**
   * @description This input from the parent will provide all the configuration for the forms and elements which will be created
   * @type FormTemplateInterface
   */
  @Input() formConfig: FormTemplateInterface[] = [];


  /**
   * @description this will be sent by the parent to trigger the ngOnChanges function to listing to any input property change
   * @type any
   */
  @Input() scanChange: any;

  /**
   * @description to display loading section
   */
  loading = false;

  /**
   * @description Navigation page index.
   */
  @Input() pageIndex: number = 0;

  /**
   * @description Will return the data to the parent for only 1 form after form submission
   * @type FormData[]
   */
  @Output()  formData = new EventEmitter<FormData[]>();

  /**
   * @type EventEmitter
   * @description to track the page number on the form.
   */
  @Output()  pageNumber = new EventEmitter<number>();
  
  /**
   * @description will listening to any input property change, will capture if a disable property for a form has been update to disable or enable that form
   * @returns void
   */
  ngOnChanges(): void{
      //looping each form to check if it has been set to disable or enable by its parent
      this.formConfig.forEach((eachConfig, outerIndex) => {
        if(this.formList[outerIndex ]){
          if(this.formConfig[outerIndex].disable) this.formList[outerIndex].disable();
          if(this.formConfig[outerIndex] && !this.formConfig[outerIndex].disable) this.formList[outerIndex].enable();
        }
      });
      this.navIndex = this.pageIndex;
    this.sideNavConfig();
  }

  /**
   * @type ICTInterface
   * @description get the current formData on the form
   */
  currentFormData:ICTInterface = {name:"", timeStamp:"", langKeyWords:{}};

  /**
   * @description holding all the control list data
   * @type any[][]
   */
  allControlList:any[][]=[];

  /**
   * @description Form Initialization
   * @returns void
   */
  ngOnInit(): void {

    // Setting each Form
    this.formConfig.forEach((eachConfig, outerIndex) => {

      //Init  each form
      this.formList.push(new FormGroup({}));

      //Initialize form
      this.formCompletetion.push(false);

      //Only for debugging TOBE REMOVED
      this.formList[outerIndex].valueChanges.subscribe((data)=>{

        //clearHiddenElts should be run first to clear and removed the data which was displayed when another option is clicked before any other element should be displayed 
        setTimeout(()=>{
          this.updateDownloadData();
          //Loop all the field and display any elements which are needed based on the user answer
          this.autoDisplayFields(outerIndex);
          this.sideNavConfig();
          this.loading = false;
        },1000);
      });
   
      
      //create controls elements for each form
      eachConfig.formElements.forEach((eachFormElement, index)=>{
        if(eachFormElement.elementType === ElementType.text){
          this.formList[outerIndex ].addControl(eachFormElement.controlName, new FormControl(eachFormElement.value, eachFormElement.validations));
        } else{
          this.formList[outerIndex ].addControl(eachFormElement.controlName, new FormGroup({}));
          const k = {...this.formList[outerIndex ]};
        }
      });
      this.allControlList.push([]);

      Object.keys(this.formList[this.formControlIndex].controls).forEach(key => {
        this.allControlList[outerIndex].push(this.formList[outerIndex].controls[key]);
      });
      // Check if a form needs to be disabled based on its config or parent request. It should be if the ICT lp has 10 ICT items 
      if(this.formConfig[outerIndex].disable) this.formList[outerIndex].disable();
    });
    this.sideNavConfig();
  }

  /**
   * @description Is called when the user is leaving the side navigation using the tab keys. This function will set the focus to the menu item selected
   * @param event Object sent by the side navigation component. Id for the section id and tabExit is when the user used tab to exit the side navigation
   */
  onSideNavItemSelected(event:{id:number, tabExit:boolean}){
   
    if(event.tabExit) { // If the user is using tab to exit the side navigation
      // generation the id of the element the page has been scrolled to
      const selector = '#form-section-'+ this.sideMenu.activeId;

      setTimeout(()=>{
        //From the section scrolled to, on the current form (we might have many forms), we get element matching that id
        let firstForm =  this.locRefFormGroup?.toArray()[this.navIndex].nativeElement.querySelector(selector);
        //From that section which might have many input, we get the list of all inputs
        let formInput:HTMLInputElement[] = Array.from(firstForm.querySelectorAll('input'));
        //We identify the first element which is not disabled
        const validFormInput = formInput.find((eachInput:HTMLInputElement)=>{return !eachInput.disabled});
        //We set on focus to that input
        if(validFormInput) validFormInput.focus();
        
      },100);
    }
  }


  /**
   * 
   * @param elt 
   * @type any
   * @param outerIndex 
   * @description Capture the element the user click on and call the clearHiddenElts to clear and hide any other element which might be open on other options
   */
  onElementClick(elt:any, outerIndex: number){
    this.loading = true;
    //Parent control of the element selected
    const parentControl = this.formConfig[outerIndex].formElements.find(data => {
      const result = data.options?.find(eachOption => {
        return eachOption.controlName === elt.controlName;
      });
      return  result;
    })

    //If an element is clicked and it is not a page load, get the formElement data for that element. It will always stored the latest element selected adn will only be updated if a n element is selected
    if (elt && elt.controlName) {
      this.elementSelected = parentControl?.options?.find(eachElt => eachElt.controlName === elt.controlName );
    }

    //Except the option the user clicked on, all other option children will be clear out and hidden until the children element has done as next property "done" 
    this.clearHiddenElts(outerIndex,parentControl, elt.controlName);

  }

  /**
   * @description To check if an object has any value which is true
   * @param obj 
   * @returns boolean
   */
  objectNotNull(obj:any):boolean{
    const tempObj = JSON.parse(JSON.stringify(obj));
    // If it is not an object, for the text element
    if (tempObj === null) return false;

    const keys = Object.keys(tempObj);
    const data = keys.filter(eachKey => {
      return tempObj[eachKey]
    });
    return data.length > 0;
  }

  /**
   * @description from the list of all the formElement, it should return the formElement based on the controlName and index of the Form
   * @param index 
   * @param controlName 
   * @returns FormElement | undefined
   */
  findFormElement(index:number, controlName: string): FormElement | undefined{
    return controlName? this.formConfig[index]!.formElements!.find(eachElt => eachElt!.controlName === controlName ):undefined;
  }

/**
 * @description from the group element all the children of each element will be cleared and hidden except the element the user just selected.
 * @param index 
 * @param parentElt 
 * @param eltSelectedName 
 */
  clearHiddenElts(index:number, parentElt:FormElement | undefined, eltSelectedName:string){
    //Getting the group of the option selected | e.g ict-group
    const parentControl: FormGroup  = <FormGroup>this.formList[index].get(parentElt!.controlName);
    //Getting all the option of that group {it-prod:false,it-serv:true ,it-none:false}
    const vals = JSON.parse(JSON.stringify(parentControl!.value));
    
    /**
     *  - this.objectNotNull(vals) => At least a  value should not be null on the current element. For user selection
     *  - eltSelectedName === "" => for recurssion or form on load, no direct click by the user
     *  - the group or formGroup should can be null if it is a text
     * */ 
    if( this.objectNotNull(vals) || eltSelectedName === "" || (vals === null && parentElt?.elementType === ElementType.text )){ //for recursion, because the children of children will not be selected
      /**
       * the parent/group has many options, on the user click on one option, we want to cancel and hide them all next of each option
       * We are looping through all the option of the group
       * */
      parentElt!.options!.forEach(parentOption =>{
          // From on option of the group, we are getting the group element it will open if a user have selected that option
          const nextElt = parentOption.next;
          // From on option of the group, we are getting the group element that will be open along with the nextElt element. Can be null, only one element options under exemptions-group has it now
          const nextEltAdd = parentOption.additionalNext;

          //Getting the FormElement for group element that will be opened if a user selected on option on the group element/parent
          const tempFormElt = this.findFormElement(index,nextElt);
          //The formElement of the groupElement that would be hidden with tempFormElt 
          const tempFormEltAdd = nextEltAdd?this.findFormElement(index,nextEltAdd[0]?nextEltAdd![0]:""):null;
          /*
          * Even though it is the same control name, all need to be clear, until autoDisplayFields redisplay them and it should not be the last item and shouldn't be hidden
          * To clear anf hide that group element
          * - It shouldn't be done, the end of the question
          * - That element should not be already hidden unless the element to removed along with it exits
          * 
          **/
          if( nextElt !== 'done' && (tempFormElt?.hidden === false || tempFormEltAdd  )) {
            // If the element that need to be hideen along exits, hide it. 
            if(tempFormEltAdd )tempFormEltAdd.hidden = true;
            // Clearing all the data for the other option child
            this.formList[index].get(nextElt)?.reset();
            // Going to all the formElement
            this.formConfig[index].formElements.forEach(eachElement => {
              //If the element matching the next element
              if(eachElement.controlName === nextElt  ){
                // WE should hide that element and enable any element which might have been disabled
                eachElement.hidden = true;
                // Only when the has a direct click, and one option of the group element from that element an additionAll next
                if(this.elementSelected && this.elementSelected.additionalNext && this.elementSelected.additionalNext.length > 0){
                  //We are checking if that controlName is matching any controlName in our list and hide it.
                  this.formConfig[index].formElements.forEach((elt, eltIndex) =>{
                    if(elt.controlName === this.elementSelected?.additionalNext![0]) elt.hidden = true;
                  })
                }
                this.formList[index].get(eachElement.controlName)?.enable();
                // check if any next of each options on the element hidden has a value
                  this.clearHiddenElts(index,tempFormElt, "");
              }
            })      
          }
        }); 
    }
  }

  /**
   * @description to auto display controls on the form
   * @params number
   * @Type number
   * @returns void
   */
  autoDisplayFields(outerIndex:number):void{
    //Looping to all the elements on the form
    this.formConfig[outerIndex].formElements.forEach(eachElement => {

      //If any elements has a value set or if the user selected a value
      if( (eachElement.elementType === ElementType.text && this.formList[outerIndex].value[eachElement.controlName] )||
          ( eachElement.elementType !== ElementType.text &&
            this.formList[outerIndex].value[eachElement.controlName] && 
            Object.keys(this.formList[outerIndex].value[eachElement.controlName]).length > 0 &&
            Object.keys(this.formList[outerIndex].value[eachElement.controlName]).find(key =>  !!this.formList[outerIndex].value[eachElement.controlName][key])
           )
        ) {
          // If the field selected is not a text
          if(eachElement.elementType !== ElementType.text){
            // All the form(all elements on the form) key value are stored
            const formKeysValues:any = this.formList[outerIndex].value[eachElement.controlName]; //{sot-type: 'red'} or {sof-type:true, elec-com:false ...}
            //Only extract the keys from the form results which have values
            const allKeysWithValues:string[] | undefined = Object.keys(formKeysValues).filter(key =>  !!formKeysValues[key]); // one or many keys have a value [fot-type, elec-com]
            //Only extract the values which have been selected by the user input
            const values = allKeysWithValues.map(eachVal => formKeysValues[eachVal!]);

            const eltSelected:any[] = [];
            //Going over all the values selected
            values.forEach((eachVal, indexVal) => {
                /*
                 * Storing the list of all the elements the users interacted with. for radio or checkbox
                 * WHen a user clicked on a control. It can capture the option with value by matching the element name with all values(key is the controlname) stored in   allKeysWithValues
                **/
                const optWithValue = eachElement.options!.find((elt, index) =>elt.controlName === allKeysWithValues[indexVal]);
                /*
                 * elt.value === eachVal is for prepopulated scenarious, when a user navigates back on the page.
                 * we can directly get the value from the value property because all the elt has been updated
                 * this option is needed only if the controlForm has not value, nothing has been selected by the user
                **/
                const optWithValuePrepo = eachElement.options!.find((elt, index) => elt.value === eachVal)

                //Storing all the element selected, or having values on page loaded
                eltSelected.push(optWithValue? optWithValue:optWithValuePrepo);

                //Parent control of the element selected
                const parentControl = this.formConfig[outerIndex].formElements.find(data => {
                  const result = data.options?.find(eachOption => {
                    return eachOption.controlName === eltSelected[0].controlName;
                  });
                  return  result;
                })
                  // For any option element having additionNext field set up
                  let additionNext:string[] = [];
                  //Based on the element selected, capture the next value and setting it to visible
                  this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) => {
                    if(eltSelected[indexVal] && eltSelected[indexVal].next && elt.controlName.includes(eltSelected[indexVal]!.next)){
                      elt.hidden = false;
                      //if another element should be display at the same time of the current element, we are saving that element
                      if(eltSelected[indexVal].additionalNext && eltSelected[indexVal].additionalNext.length > 0){
                        additionNext = eltSelected[indexVal].additionalNext;
                      }
                    }

                    if(eltSelected[indexVal].next === 'done'){
                      this.formCompletetion[outerIndex] = true;
                    }else  this.formCompletetion[outerIndex] = false;
                  });
                  // Looping to all the element t be displayed as well. For now ont one item on the array
                  this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) =>{
                    if(elt.controlName === additionNext[0]) elt.hidden = false;
                  })
            });
          }else{
            // All the form(all elements on the form) key value are stored
            const value:any = this.formList[outerIndex].value[eachElement.controlName]; //{sot-type: 'red'} or {sof-type:true, elec-com:false ...}
        
            let eltSelected:any;
            //Going over all the values selected
            // Storing the list of all the elements the users interacted with. for radio or checkbox
            eltSelected = eachElement;
              //Based on the element selected, capture the next value and setting it to visible
            this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) => {
                if(eltSelected && eltSelected.next && elt.controlName.includes(eltSelected!.next)){
                  elt.hidden = false;
                }
            })
          } 
      }
    });
        
  }

  /**
   * @description Will be called on a form submission button being clicked. And will emit the data to its parent
   * @param index 
   * @rerun void
   */
  onFormSubmit(index:number):void{
    if (this.formCompletetion.find(eachComp => !eachComp) === false &&  !this.formConfig[0].formButtons.add) {
      alert("You have one or more unanswered questions. Please respond to all questions to get the appropriate Section 508 results.");
    } else{
      const data = this.formList.map(eachForm =>eachForm.value);
      this.formData.emit(data);
      //Will reset the form based on the its configuration
      if(this.formConfig[index].clearForm) this.formList[index].reset();
    }
  }

  /**
   * @description Used to identified which form is being used
   * @type number
   */
  formControlIndex:number = 0;

  /**
   * @description For each form it will get all the control elements and return it as an array to be looped on the html
   * @returns FormControl[]
   */
  get controlList():any[]{
    //Should not be go over the maximum number for forms set up.
    if(this.formControlIndex >= this.formList.length) this.formControlIndex = 0;
    const result:AbstractControl[] = [];
    //Getting controls elements for a specific form
    Object.keys(this.formList[this.formControlIndex].controls).forEach(key => {
      result.push(this.formList[this.formControlIndex].controls[key]);
    });
    this.formControlIndex++;
    return <any[]>(result);
  }

  /**
   * @description on page reset
   * @return void
   */
  onReset():void{
    this.formList[this.navIndex].reset();
  }

  /**
   * @description to navigate to the previous form page
   * @returns void
   */
  navBackForm():void{
    if(this.navIndex > 0){
      this.navIndex--;
      this.pageNumber.emit(this.navIndex);
      this.updateDownloadData()
      document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  /**
   * @description Based on the current form page, the data to be downloaded should be updated
   * @return void
   */
  updateDownloadData():void{
    //this is updated whenever the object is updated so the other component can render that object update
    this.eltUpdated = !this.eltUpdated;
    if(this.ictItemService.get() && this.ictItemService.get()[this.navIndex] && this.formList[this.navIndex] && this.formList[this.navIndex].value) {
      this.currentFormData = {
        name:this.ictItemService.get()[this.navIndex].name, 
        timeStamp: Date.now().toString(), 
        langKeyWords: this.formList[this.navIndex].value
      };
    }
  }

  /**
   * @description to navigate to the next form page
   * @returns void
   */
   navNextForm():void{
    if (this.formCompletetion[this.navIndex] === false) 
    {
      alert("You have one or more unanswered questions. Please respond to all questions to get the appropriate Section 508 results.");
    }else{
      if(this.navIndex  < this.formConfig.length - 1){
        this.navIndex++;
        this.pageNumber.emit(this.navIndex);
        this.updateDownloadData()
       }
      document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }


  sideNavConfig(){
    //side navigation configuration
    this.sideMenu.sideNavItems=[];
    this.formConfig[this.pageIndex].formElements.forEach((formElement, index) => {
      if(formElement.formSection && !formElement.hidden){
        this.sideMenu.sideNavItems.push({
          id: this.formConfig[this.pageIndex].formElements.length*this.pageIndex + index,
          name: formElement.menuItem?formElement.menuItem:formElement.formSection
        });}
    });
  }

  /**
   * @description Get array on menu IDs.
   * @return array
   */
  getMenuIds():number[] {
    let ids: number[] = [];
    this.sideMenu.sideNavItems.forEach(item => {
      ids.push(item.id);
    });
    return ids;
  }

  /**
   * @description Windows scroll listener for set current side menu link as active.
   */
  @HostListener("window:scroll", []) onWindowScroll() {
    const allSections = document.querySelectorAll(`.form-section`);
    let currLink: number = -1;
    allSections.forEach((section, index) => {
      let pos = section.getBoundingClientRect();
      if (pos.bottom > 20 && currLink < 0 && this.getMenuIds().includes(index)) {
        currLink = this.sideMenu.activeId = index;
      }
    });
  }

}
