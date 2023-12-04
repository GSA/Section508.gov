import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormTemplateInterface } from '../../models/form-template.interface';
import formConfigJsons from '../../../../assets/form-config/ict-lp-add.config.json';
import Buttons from '../../../../assets/data/buttons.json';
import IctLp from '../../../../assets/data/ict-lp.json';



@Injectable({
    providedIn: 'root'
})
export class ArtIctLpAddService {

    constructor() { }


    /**
     * @description the maximum number the name character
     */
    private charCount: number = 25;

    /**
     * @description Configuration for the ICT Listing Page input field, loading config for one Form
     */
    private formConfig: FormTemplateInterface[] = formConfigJsons;

    /**
     * @description Will stored the name of the user entered on the ictPage or upload page. It is an option field
     * @type string
     */
    private userName: string = '';


    /**
     * @description Generation validation error from the configurations: Only required and maxLength has be configure, additional validations will have ot be added
     * @param strValidation
     * @type string[]
     * @returns ValidationErrors
     */
    generateValidations(strValidation: string[] | any): ValidationErrors {
        if (strValidation[0]?.name) return strValidation;
        const validations: ValidatorFn[] = []
        strValidation.forEach((eachVal: any) => {
            if (eachVal.includes("required")) validations.push(Validators.required);
            if (eachVal.includes("maxLength")) {
                const length = eachVal.slice(eachVal.indexOf("(") + 1, eachVal.indexOf(")"));
                this.charCount = +length;
                validations.push(Validators.maxLength(this.charCount));
            }
        });

        return validations;
    }

    /**
    * @description the parent will the sent maximum of character to be allowed
    * @return number
    */
    getMaxLength(): number {
        return this.charCount;
    }

    /**
     * @description Configuration for one form
     * @return: FormTemplateInterface
     * @param: FormTemplateInterface[]
     */
    private getConfigurations(formConfigTemp: FormTemplateInterface[], formConfigJson: any): FormTemplateInterface[] {
        formConfigTemp.forEach((eachForm, outterIndex) => {
            eachForm.formElements.forEach((eachElt, index) => {
                eachElt.validations = this.generateValidations(formConfigJson[outterIndex].formElements[index].validations);
            });
        });
        return formConfigTemp;
    }


    getICTConfigurations(): FormTemplateInterface[] {
        return this.getConfigurations(this.formConfig, formConfigJsons);
    }

    /**
    * @description Get the error message for the landing page, generated when the number of ICT items has reached the max
    * @returns string
    */
    getErrorMsg(): string {
        return IctLp['errorMessage'];
    }

    /**
  * @description Return the maximum number of items that should be allowed
  * @returns number
  */
    getMaxItems(): number {
        return IctLp['maxItems'];
    }

}