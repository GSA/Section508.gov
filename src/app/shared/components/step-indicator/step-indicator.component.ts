import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges} from "@angular/core";
import { IStepIndicator } from "../../models/step-indicator.interface";
@Component({
    selector: 'atr-step-indicator',
    templateUrl: './step-indicator.component.html',
    styleUrls: ['./step-indicator.component.scss']
})

export class StepIndicatorComponent implements OnInit{
    //variable to store index of active tab
    @Input() currentIndex: number = 0
    //variable to store id of active tab
    @Input() activeTab="";
    //output to calling component
    @Output() getSelectedTab = new EventEmitter<number>();
    //input from calling component
    @Input() stepsData: IStepIndicator = {tabs:[], activeId:''};
    @Input() update: boolean = false;
    constructor(){}
    ngOnInit(): void {
        this.resetStep();
    }

    /**
     * @description sets the style of the tab and emits the index of the selected tab to getSelectedTab
     * @param tabIndex index of the selected tab
     * @param tabId id of the selected tab
     * @returns void
     * @type {(tabIndex:number, tabId:string) => void}
     */
    tabSelected(tabIndex:number, tabId:string): void{
        this.currentIndex = tabIndex;
        this.activeTab = tabId;
        this.getSelectedTab.emit(tabIndex);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.resetStep();
    }

    /**
     * @description Set current step.
     */
    resetStep(): void {
        this.activeTab = this.stepsData.activeId;
        let index=0;
        for(let tab of this.stepsData.tabs){
            if(tab.id==this.stepsData.activeId){
                this.currentIndex=index;
            }
            index++;
        }
    }

}
