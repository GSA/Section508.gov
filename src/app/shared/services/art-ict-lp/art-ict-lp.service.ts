import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormTemplateInterface } from '../../models/form-template.interface';
import  formConfigJsons  from '../../../../assets/form-config/ict-lp.config.json';
import  userNameFormConfigJson  from '../../../../assets/form-config/ict-lp-username.config.json';
import  Buttons  from '../../../../assets/data/buttons.json';
import  IctLp  from '../../../../assets/data/ict-lp.json';
import  IctLpUserContent  from '../../../../assets/data/ict-lp-username.json';
import { IButtonInterface } from '../../models/IButtonInterface';



@Injectable({
  providedIn: 'root'
})
export class ArtIctLpService {

  constructor() { }

  
  /**
   * @description the maximum number the name character
   */
  private charCount:number = 25;

  /**
   * @description Configuration for the ICT Listing Page input field, loading config for one Form
   */
   private formConfig: FormTemplateInterface[] = formConfigJsons;

   /**
   * @description Configuration for the ICT Listing Page Name filed, loading config for one Form
   */
   private userFormConfig: FormTemplateInterface[] = userNameFormConfigJson;

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
   generateValidations(strValidation:string[] | any): ValidationErrors{
    if(strValidation[0]?.name) return strValidation;
    const validations: ValidatorFn[] = []
    strValidation.forEach((eachVal:any)=>{
      if(eachVal.includes("required")) validations.push(Validators.required);
      if(eachVal.includes("maxLength")) {
        const length = eachVal.slice(eachVal.indexOf("(")+1,eachVal.indexOf(")"));
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
  getMaxLength():number{
    return this.charCount;
  }

  /**
   * @description Configuration for one form
   * @return: FormTemplateInterface
   * @param: FormTemplateInterface[]
   */
  private getConfigurations(formConfigTemp: FormTemplateInterface[], formConfigJson:any): FormTemplateInterface[]{
    formConfigTemp.forEach((eachForm, outterIndex)=>{
      eachForm.formElements.forEach((eachElt, index)=>{
        eachElt.validations = this.generateValidations(formConfigJson[outterIndex].formElements[index].validations);
      });
    });
    return formConfigTemp;
  }

  getNameConfiguration(): FormTemplateInterface[]{
    return this.getConfigurations(this.userFormConfig, userNameFormConfigJson);
  }

  getICTConfigurations(): FormTemplateInterface[]{
    return this.getConfigurations(this.formConfig, formConfigJsons );
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
   * @description Get the section title for the landing page
   * @returns string
   */
   getSectionTitle(): string{
    return IctLp['sectionTitle'];
  }

  /**
   * @description Get the username text for the landing page
   * @returns string
   */
   getUserQuestion(): string{
    return IctLpUserContent['userName'];
  }

  /**
   * @description Get the data for Input Label for the ict item on the ICT page
   * @returns string
   */
   getInputLabel(): string{
    return IctLp['inputLabel'];
  }

  /**
   * @description Get the dat for Input Label for the Name field on the ICT page
   * @returns string
   */
  getUserInputLabel(): string{
    return IctLpUserContent['inputLabel'];
  }

     /**
   * @description Return the maximum number of items that should be allowed
   * @returns number
   */
    getMaxItems(): number{
      return IctLp['maxItems'];
    }

    /**
     * @description to return the username stored on the ICT page or upload page
     * @return string
     */
    getUserName(): string{
      return this.userName;
    }

    /**
     * @param name 
     * @description used to store the name of the user entered on the ICT page or upload page
     */
    setUserName(name:string){
      this.userName = name;
    }
}
