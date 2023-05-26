import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import  formConfig  from '../../../../assets/form-config/form.config.json';
import { ElementType, FormElement } from '../../models/form-element.interface';
import { FormTemplateInterface } from '../../models/form-template.interface';
import { ICTInterface } from '../../models/ict.interface';


@Injectable({
  providedIn: 'root'
})
export class FormPageService {
 /**
   * @description Configuration for the ICT Listing Page input field, loading config for one Form
   */
  private formConfig: FormTemplateInterface[] = formConfig;

  /**
  * @description the maximum number the name character
  */
  private charCount:number = 25;

  /**
   * @description identify the form page ot be displayed
   * @type number
   */
  private formPage = 0;

  /**
   * @description The footer text that will be used on the word docx downloaded
   * @type sting
   */
  private docxFooterText:string = `<p><table></table>
  <h3>Instructions to Offerors</h3>
  <ol>
  <li>Provide an Accessibility Conformance Report (ACR) for each commercially available Information and Communication Technology (ICT) item offered through this contract. Create the ACR using the Voluntary Product Accessibility Template Version 2.1 or later, located at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>. Complete each ACR in accordance with the instructions provided in the VPAT template. Each ACR must address the applicable Section 508 requirements referenced in the Work Statement.  Each ACR shall state exactly how the ICT meets the applicable standards in the remarks/explanations column, or through additional narrative.  All "Not Applicable" (N/A) responses must be explained in the remarks/explanations column or through additional narrative. Address each standard individually and with specificity, and clarify whether conformance is achieved throughout the entire ICT Item (for example - user functionality, administrator functionality, and reporting), or only in limited areas of the ICT Item. Provide a description of the evaluation methods used to support Section 508 conformance claims. The agency reserves the right, prior to making an award decision, to perform testing on some or all of the Offeror’s proposed ICT items to validate Section 508 conformance claims made in the ACR.</li>
  <li>Describe your approach to incorporating universal design principles to ensure ICT products or services are designed to support disabled users.</li>
  <li>Describe plans for features that do not fully conform to the Section 508 Standards.</li>
  <li>Describe "typical" user scenarios and tasks, including individuals with disabilities, to ensure fair and accurate accessibility testing of the ICT product or service being offered.</li>

  </ol>

  <h3>Acceptance Criteria</h3>
  <ol start="1">
  <li>Prior to acceptance, the government reserves the right to perform testing on required ICT items to validate the offeror’s Section 508 conformance claims. If the government determines that Section 508 conformance claims provided by the offeror represent an inaccurate level of conformance than what is actually delivered to the agency, the government shall, at its option, require the offeror to remediate the delivered item to align with the required Section 508 conformance claims prior to acceptance.</li>
  </ol>
  </p>`;


  /**
   * @description get the form result generated on a form
   */
  private formResults:{} ={};

  constructor() { }

  /**
   * @description Configuration for thr form
   * @return: FormTemplateInterface
   */
   getConfigurations(): FormTemplateInterface[]{
    this.formConfig.forEach((eachForm, outterIndex)=>{
      eachForm.formElements.forEach((eachElt, index)=>{
        eachElt.validations = this.generateValidations(formConfig[outterIndex].formElements[index].validations);
      });
    });
    return this.formConfig;
  }

  /**
   * @description Return the footer text for the docx downloaded
   * @returns string
   */
  getDocxFooterText(): string{
    return this.docxFooterText;
  }

  /**
   * @description Set the date for a form
   * @param datat
   * @type {}
   */
  setFormResults(data:{}):void{
    this.formResults = data;
  }

  /**
   * @description return the data for a form
   * @returns {}
   */
  getFormResults():{}{
    return this.formResults;
  }

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
   * 
   * @description Used to clone and generate form configuration
   * @param formConfig 
   * @param text 
   * @returns FormTemplateInterface
   */
   generateNewConfig(formConfig: FormTemplateInterface, text:string,eachIctItem: ICTInterface):FormTemplateInterface{
    //console.log("ICTInterface-->", eachIctItem.langKeyWords);
    const newCongig:FormTemplateInterface = {...formConfig};

    newCongig.formElements = [...newCongig.formElements];

    newCongig.formElements.forEach((eachFormElement, index)=>{
      eachFormElement = {...eachFormElement};
      newCongig.formElements[index] =  {...eachFormElement};

      if(eachFormElement.options && eachFormElement.options.length > 0){
        eachFormElement.options = [...eachFormElement.options];
        newCongig.formElements[index].options = [...eachFormElement.options];
        eachFormElement.options.forEach((eachOption, innerIndex)=>{
          // Getting all the result for the form: For file upload or return to form page
          const tempLang:any= eachIctItem.langKeyWords;
          eachOption = {...eachOption};
          if(newCongig.formElements[index].options !== undefined) {
            if(newCongig.formElements[index].options![innerIndex] !== undefined){
              newCongig.formElements[index].options![innerIndex] = {...eachOption};
            }
          }
         // Storing the options the group check box or group radio
         const options =eachFormElement.options? [...eachFormElement.options]:null;
         //TO BE Removed console.log("options-> ", options);
         // If this element has options, being checkbox group or radio button
         if(options && options.length > 0){
          
          // Getting the lang object or the option value for this element group
          const optionLang:any = tempLang[newCongig.formElements[index].controlName];
          // if this option has a value or if this element has a value set to true
          if(optionLang && Object.keys(optionLang).length > 0)   {
            // Capturing the control name an option for the checkbox group or radio button
            const currentControlName = newCongig.formElements[index].options![innerIndex].controlName;
            // If we have a radio button
            if(newCongig.formElements[index].options![innerIndex].elementType !== "checkbox") {
              //console.log("radioButton");
              //We can change the controlName of each option because it does not matter eventhough there is a value. What is store on the json file is the controlName of the radioBUtton Group. We just change the options controlName to be different from other form
              newCongig.formElements[index].options![innerIndex].controlName += text;
              
            }else{ // if we have a checkbox
              //console.log("Checkbox");
              //console.log("No change------------------------------------->", currentControlName);
              //console.log("optionLang------------------------------------->", optionLang);
              // We are checking if any lang key saved from the jsonfile includes the controlName of this checkbox option, we want to change the controlName of all the checkbox option, eventhough they have a value, and that name should match the lang key saved before
              const langKeyControName = Object.keys(optionLang).find(eachLangKey => eachLangKey.includes(currentControlName));
              //console.log("langKeyControName------------------------------------->", langKeyControName);
              // If incase we don't find that controlName on th elagn Key, it was not save, so we can give it a random controlName
              newCongig.formElements[index].options![innerIndex].controlName = langKeyControName || newCongig.formElements[index].options![innerIndex].controlName + text;
            }
          }
          else {
            // Any option which does not have a value set will have to be givin a radon control name
            newCongig.formElements[index].options![innerIndex].controlName += text;
            //console.log("New controlName------------------------------------->",  newCongig.formElements[index].options![innerIndex].controlName);

          }
         }
        })
      }
    });
    return {...newCongig};
  }

  /**
   * @description to retrieve the form page to be displayed 
   * @returns number
   */
  navToFormPage():number{
    return this.formPage;
  }

  /**
   * @description to update the form page to be displyaed
   * @param index
   * @returns void 
   */
  setFormPage(index:number):void{
    this.formPage = index;
  }

  /**
   * @description this function is used to generate aria label for option on the form with the contract of adding the header as pretext:Structure form Section or title (? or :) label - description
   * @returns string
   * @params element the element on the form of type FormElement | formdata the data used to create the element of type FormElement
   */
  generateAriaLabel(element: FormElement, formData: FormElement | undefined): string{
    // To avoid any change on the label to affect the parent
    let label = element.label.slice();
    // To avoid any change on the description to affect the parent
    let description = element.description? element.description.slice(): '';
    let result = '';
    //if the arialLabel has been hardcoded on the form configuration, not need to generate a label
    if(element?.ariaLabel){
      result = element.ariaLabel
    }else{ // Generating the aria label
      // Getting the title or form section
      if(formData?.title){
        // If the title is set, we capture its value
        result = formData.title.slice();
      }else if ( formData?.formSection){
        // If the title is not set and the form section is set, we capture its value
        result = formData?.formSection.slice();
      }
      // If the form section or the title does not have a "?" we are adding ":" at the end
      if(result.lastIndexOf('?') !== result.length - 1){
        result+=': ';
      }else{
        // if the section or title has "?" we are just adding a space at the end
        result+= ' ';
      }

      // If the label does not has "?" at the end we are adding " - "
      if(element.label.lastIndexOf('?') !== element.label.length - 1){
        if(description) description =' - ' + description;
      }else{
      // If the label has "?" at the end we are adding " "
        label+=' ';
      }

      result+= label + description;
    }
    return  result;
  }

  /**
   * @description when the user return from the summary page to the form page, the data should be loaded
   * @returns void
   */
   prepopulateData(formConfig:FormTemplateInterface[], ictItems:ICTInterface[] ):void{
    //Getting the config for each from
    formConfig.forEach((eachConfig, index) =>{
      //Looping each element of each form
      eachConfig.formElements.forEach(eachElement =>{
        // the langkey or data for each form. ex. exemptions-group: {excep-idk-2: true}, hardware-group: {hardware-computer-2: false, hardware-tablet-2: false, hardware-printer-2: false, hardware-multi-func-2: false, hardware-peripheral-2: false, …}ict-group: {it-none-2: true}
        const resultObj:any = ictItems[index] && ictItems[index].langKeyWords? {...ictItems[index].langKeyWords}: {};
        if(resultObj){
          //Getting data for each fromControl eg: {excep-idk-2: true}
          const value = resultObj[eachElement.controlName];

          if(eachElement.elementType === ElementType.checkboxGroup && value){
            // a control can have many values for a checkbox. eg [excep-idk-2]
            const keys = Object.keys(value);

            // checking if any key is matching an option controlName and assign the value of the key if so
            keys.forEach((eachKey, outterIndex)=>{
              eachElement.options!.forEach((eachOption, innerIndex)=>{
                if(eachKey.includes(eachOption.controlName))  eachOption.value = value[eachKey];
              })
            });
          }
          if(eachElement.elementType === ElementType.text && value){
            eachElement.value = value;
          }
          if(eachElement.elementType === ElementType.radioButtonGroup && value){
            const keys = Object.keys(value);
            eachElement.value = value[keys[0]];
          }
        }
      })
    })
  }

}
