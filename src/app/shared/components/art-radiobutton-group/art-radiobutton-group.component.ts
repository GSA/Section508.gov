import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormElement } from "../../models/form-element.interface";
import { FormPageService } from "../../services/form-page/form-page.service";

@Component({
    selector:'art-radiobutton-group',
    templateUrl: './art-radiobutton-group.component.html',
    styleUrls:['./art-radiobutton-group.component.scss']
})

export class RadiobuttonGroupComponent implements OnInit{

    @Input() formData: FormElement | undefined;
    @Input() formGroup: FormGroup = new FormGroup({});
    @Input() hidden: boolean = false;
    /**
     * @description return the element the user clicked on
     */
    @Output() eltClicked = new EventEmitter<FormElement>();

 
    constructor(public formPageService:FormPageService){}
    ngOnInit(): void {
        if(this.formData){
            this.formGroup.addControl(this.formData.controlName, new FormControl(this.formData.value, [Validators.required]));
        }
    }
 /**
   * @description emit the element the user clicked on
   * @param formElement 
   * @return void
   */
    onClicked(formElement:FormElement):void{
        this.eltClicked.emit(formElement);
    }
}
