export interface FormButtons{
    /**
     * @type string
     * @description: To submit the form data
     */
    submit?:string;
    /**
     * @type string
     * @description: to navigate to the previous form. Used when we have more than one form
     */
    back?:string;
    /**
     * @type string
     * @description: to navigate to the next form. Used when we have more than one form
     */
     next?:string;
    /**
     * @type string
     * @description: To submit the form, with only one field. This button is place on the same line as the input field
     */
    add?:string;
}