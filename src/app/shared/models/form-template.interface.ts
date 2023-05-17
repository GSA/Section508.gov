import { FormButtons } from "./form-buttons.interface"
import { FormElement } from "./form-element.interface"
import { ICTInterface } from "./ict.interface";
export interface FormTemplateInterface{
    /**
     * @type string
     * @description: The data need to generate a control (input text, checkbox, radio button)
     */
    formElements:FormElement[];

    /**
     * @type string
     * @description: The navigation buttons for the form | submit, next, back, add
     */
    formButtons: FormButtons;

    /**
     * @type string
     * @description: Rather or not the form should be cleared after submission
     */
    clearForm: boolean;

    /**
     * @type string
     * @description: If the form should be disabled or not 
     */
    disable?: boolean;

    /**
     * @description to identify each formControl
     * @type number
     */
    id?:number;

    /**
     * @type string
     * @description: Used to stored the data from the form
     */
    ICTItem?:ICTInterface
}