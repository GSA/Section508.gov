import { ValidationErrors, Validator } from "@angular/forms";
export interface FormElement {
    /**
     * @type string
     * @description: the type of the current form element: text, checkbox, radioButton, checkboxGroup, radioButtonGroup
     */
    elementType:string;
    /**
     * @type string
     * @description: The label of the form element
     */
    label: string;
     /**
     * @type string
     * @description: The aria label of the form element from the form config
     */
    ariaLabel?: string;
    /**
     * @type string
     * @description: the title of the form element
     */
    title?: string;
    /**
     * @type string
     * @description: place holder for the element
     */
     placeholder?: string;
    /**
     * @type string
     * @description:  the description of the form element
     */
    description?: string;
    /**
     * @type string
     * @description: the error massages of the form elements
     */
    errorMessages?: any;
    /**
     * @type string
     * @description: Array of form elements. Will be used for the checkboxes as different options and option for the radioButtons
     */
    options?:FormElement[];
    /**
     * @type string
     * @description: The name of the control for this element, it should be unique
     */
    controlName: string;
    /**
     * @type string
     * @description: The different validations for this elements
     */
    validations: ValidationErrors;
    /**
     * @type string
     * @description: the name of the control Element for another element. The Form component will display that element whenever the value of this element is not null
     */
    next:string;
    /**
     * @type string[]
     * @description: For other control to be displayed along with next. Only one for now
     */
     additionalNext?:string[];
    /**
     * @type string
     * @description: The Section where this element should be. Will be used by the parent component, the From component
     */
    formSection: string;
    /**
     * @type string
     * @description: Id of the she Section where this element should be. Will be used by the parent component, the From component
     */
     formSectionId?: string;
    /**
     * @type string
     * @description: Will use to display the menu item label when the menu Item is used
     */
     menuItem?: string;
    /**
     * @type string
     * @description: Any predefined value
     */
    value?: any;
    /**
     * @type boolean
     * @description: Set if this option can be only one of current group.
     */
    onlyOption?: boolean;
    /**
     * @description used to hide or display a formcontrol
     * @type boolean
     */
     hidden?:boolean;
    /**
     * @description Used to display additional text, in the checkboxgroup or radiogroup component 
     * @type string
     */
    info?:string;
    /**
     * @description Used to set the max length for a text field 
     * @type number
     */
    maxLength?: number
    /**
     * @type string
     * @description: Text description of the form section, providing extra details for the user. Typically used to provide context in form sections.
     */
    formsectionText?: string;  // Added formSectionText property
}
export enum  ElementType{
    text = "text",
    checkbox = "checkbox",
    checkboxGroup = "checkboxGroup",
    radioButton = "radioButton",
    radioButtonGroup = "radioButtonGroup",
    textDisplay = "textDisplay"
}