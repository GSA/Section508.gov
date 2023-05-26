export interface IButtonInterface {
    label: string;
    ariaLabel?: string;
    description?: string;
    destination?: string;
    btnClass?: string;
    action?: (...args:any)=> void;
}