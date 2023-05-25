import { IStepIndicatorTab } from "./step-indicator-tab.interface";

export interface IStepIndicator{
    tabs: IStepIndicatorTab[];
    activeId: string;
}