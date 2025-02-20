import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormElement} from "../../models/form-element.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FormPageService } from '../../services/form-page/form-page.service';

@Component({
  selector: 'art-checkbox-group',
  templateUrl: './art-checkbox-group.component.html',
  styleUrls: ['./art-checkbox-group.component.scss']
})
export class ArtCheckboxGroupComponent implements OnInit, OnChanges {

  constructor(public formPageService:FormPageService) {
  }

  ngOnChanges(){

    /**
     * Whenever the parent is updating the value of the checkbox element, this function will check if some element needs to be disable and disable them on a new page load.
     */
    this.enableFormElts();
  }

  /**
   * @type FormElement
   * @description the parent component will send that input to configure this text input field component
   */
  @Input() formData: FormElement | undefined;

  /**
   * @description Formgroup passed by the parent to store all checkboxes control dynamically created
   * @type formGroup
   */
  @Input() formGroup: FormGroup = new FormGroup({});

  /**
   * @type boolean
   * @description used ot hide the control by the parent
   */
  @Input() hidden: boolean = false;

  /**
   * Used to trigger ngChange when an object is updated by a parent
   */
  @Input() dataUpdated:boolean = false;

  /**
   * @description Will return the data to the parent for only 1 form after form submission
   * @type FormElement
   */
  @Output() formElement = new EventEmitter<FormElement>();

  /**
   * @description return the element the user clicked on
   */
  @Output() eltClicked = new EventEmitter<FormElement>();

  ngOnInit(): void {
    this.formData?.options?.forEach(element => {
      this.formGroup?.addControl(element.controlName, new FormControl(element.value, [Validators.required]));
    });
  }

  /**
   * @description Logic to uncheck all other option if a checkbox with onlyOption field is set to true
   * @param formElement 
   * @return void
   */
  onClicked(formElement:FormElement):void{
    this.eltClicked.emit(formElement);
    const tempControl:FormControl = <FormControl>this.formGroup.get(formElement.controlName);
    const value = tempControl.value;

    if(formElement.onlyOption && !value ){
      this.formGroup.reset();
      this.formGroup.get(formElement.controlName)?.patchValue(!value);
      Object.keys(this.formGroup.controls).forEach(key =>{
        if(key !== formElement.controlName){
          this.formGroup.get(key)?.disable();
        }
      })
    }
    else{
      this.formGroup.enable();
    }
  }

  /**
   * @description Used when the page is loading by clicking on next or back, and any checkbox needed to by loaded disabled would be
   */
  enableFormElts(){

    let  formElement:FormElement | undefined;
    const values = this.formGroup.value;

    // Found the element which has a value
    Object.keys(this.formGroup.controls).forEach(key =>{
      if(values[key] && !formElement?.controlName){
        // find the formElement for the key which has a value and has a onlyOption
        formElement = this.formData?.options?.find(opt => {
          return opt.controlName === key && opt.onlyOption
        });
      }
    });

    // If that element is found disable all the other option in that group except that element
    if(formElement?.controlName){
      Object.keys(this.formGroup.controls).forEach(key =>{
        if(key !== formElement?.controlName &&  !this.formGroup.get(key)!.disabled){
          this.formGroup.get(key)?.disable();
        }
      })
    }
  }

  /**
   * @description Get FormControl by controlName.
   * @param controlName
   */
  getControls(controlName: string | number): FormControl {
    return <FormControl>this.formGroup.controls[controlName];
  }

}
