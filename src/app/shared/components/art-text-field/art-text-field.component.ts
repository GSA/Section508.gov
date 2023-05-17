import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormElement, ElementType } from '../../models/form-element.interface';

@Component({
  selector: 'art-text-field',
  templateUrl: './art-text-field.component.html',
  styleUrls: ['./art-text-field.component.scss']
})
export class ArtTextFieldComponent implements OnInit {

  constructor() { }

  /**
   * @type FromElement
   * @description the parent component will send that input to configure this text input field component
   */
  @Input() formData:FormElement | undefined;
  @Input() control:AbstractControl<any, any> | undefined;
  @Input() hidden: boolean = false;
  
  fromControl:FormControl = new FormControl();

  ngOnInit(): void {
    this.fromControl = <FormControl>this.control;
    this.control?.statusChanges.subscribe(()=>{
    });
  }

  /** 
   * @description used to check if this formcontrol has any error based on the validations from its configuration, wit the max char length to be 25
   * @return string
  */
  displayError():string{
    let errorMessage = "";
    const error:ValidationErrors | undefined | null = this.control?.errors;
    if(this.control?.getError(ErrorText.maxlength)){
      errorMessage= this.formData?.errorMessages[ErrorText.maxlength];
    };

    return errorMessage || "";
  }

}

export enum ErrorText {
  maxlength = "maxlength"
}
