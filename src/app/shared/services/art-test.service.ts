import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormTemplateInterface } from '../models/form-template.interface';
import  formConfigJsons  from '../../../assets/form-config/test.config.json';
import  Buttons  from '../../../assets/data/buttons.json';
import  IctLp  from '../../../assets/data/ict-lp.json';
import { IButtonInterface } from '../models/IButtonInterface';



@Injectable({
  providedIn: 'root'
})
export class ArtTestService {

  constructor() { }

  /**
   * @description Configuration for the ICT Listing Page input field, loading config for one Form
   */
   private formConfig: FormTemplateInterface[] = formConfigJsons;

   /**
    * @description Generation validation error from the configurations: Only required and maxLength has be configure, additional validations will have ot be added
    * @param strValidation
    * @type string[]
    * @returns ValidationErrors
    */
   generateValidations(strValidation:string[]): ValidationErrors{
    const validations: ValidatorFn[] = []
    strValidation.forEach((eachVal)=>{
      if(eachVal.includes("required")) validations.push(Validators.required);
      if(eachVal.includes("maxLength")) {
        const length = eachVal.slice(eachVal.indexOf("(")+1,eachVal.indexOf(")"));
        validations.push(Validators.maxLength(+length));
      }
    });
    return validations;
   }

  /**
   * @description Configuration for one form
   * @return: FormTemplateInterface
   */
  getConfigurations(): FormTemplateInterface[]{
    this.formConfig.forEach((eachForm, outterIndex)=>{
      eachForm.formElements.forEach((eachElt, index)=>{
        eachElt.validations = this.generateValidations(formConfigJsons[outterIndex].formElements[index].validations);
      });
    });
    return this.formConfig;
  }

  /**
   * @description Getting the label, the description and destination text for the upload button on the ict listing page
   * @returns IButtonInterface
   */
   getUploadBtn(): IButtonInterface{
    return Buttons['uploadICT'];
  }

  /**
  * @description Getting the label, the description and destination text for the continue button on the ict listing page
  * @returns IButtonInterface
  */
  getContBtl(): IButtonInterface{
    return Buttons['continue'];
  }
   /**
   * @description Get the error message for the landing page, generated when the number of ICT items has reached the max
   * @returns string
   */
    getErrorMsg(): string{
      return IctLp['errorMessage'];
    }

     /**
   * @description Return the maximum number of items that should be allowed
   * @returns number
   */
    getMaxItems(): number{
      return IctLp['maxItems'];
    }
}
