import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
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

  @Output() eltBlur = new EventEmitter<FormElement>();

  //Default value for maxLength
  maxLength:number | null = 1000;
  
  fromControl:FormControl = new FormControl();

  ngOnInit(): void {
    this.fromControl = <FormControl>this.control;
    this.control?.statusChanges.subscribe(()=>{
    });

    this.maxLength = this.formData?.maxLength ? this.formData?.maxLength: 100;
  }

  onBlur(event:FocusEvent, controlName:any, msg:any): void {
    // Emit the event to the parent component
    const el = event.currentTarget as HTMLInputElement;
    const formElement: FormElement = {
      elementType: 'text', // Example static value, you can dynamically assign it
      controlName: controlName, // Assuming the name attribute is set on your input
      value: el.value,
      validations: {'error':msg} // Populate validations as needed
      ,
      label: '',
      next: '',
      formSection: '',
    };
    this.eltBlur.emit(formElement);
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
