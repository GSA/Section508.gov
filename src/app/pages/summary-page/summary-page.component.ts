import { Component, OnInit } from '@angular/core';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { ClipboardService } from 'ngx-clipboard';
import {Art508LangService} from '../../shared/services/art-508-lang/art-508-lang.service';
import {IctItemService} from "../../shared/services/ict-item/ict-item.service";
import { IStepIndicator } from 'src/app/shared/models/step-indicator.interface';
import { Router } from '@angular/router';
import { FormPageService } from 'src/app/shared/services/form-page/form-page.service';

@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  /**
   * @description Used to trigger the ngOnChanges function to listing to any input property change
   * @type any
   */
  resultData:any = "";

  constructor(
    private art508LangService: Art508LangService,
    public ictItemService: IctItemService,
    private clipboardService:ClipboardService,
    private router: Router,
    private formPageService:FormPageService
  ) {}


    /**
     * To position the currently active item
     */
    currentIndex:number = 0;

    /**
     * Maximum index for form's step indicator
     */
    maxIndex: number = 0;
    
    /**
     * Will be populated from 508MappingService
     */
    languageGenerated:string[] = [];

    /**
     * Will be populated from 508MappingService, UI only
     */
     languageGeneratedUI:string[] = [];

    stepsData:IStepIndicator = {tabs:[], activeId:''};

    /**
     * ICTItems can be populated from ICTItemService
     */
    ictItems: ICTInterface[] = [];
 
    ngOnInit(): void {
        // Get form data from the ICT service.
        this.ictItems = this.ictItemService.get();
        
        //if there is no icItems, return to landingPageComponent
        if(this.ictItems.length==0){
            this.router.navigateByUrl('');
        }
        this.maxIndex = this.ictItems.length-1;
        
        this.ictItems.forEach((item, index) =>{

            //Populate step data indicator
            this.stepsData.tabs.push({id: "0"+index, name:item.name});
            const langKeyWords = JSON.parse(JSON.stringify(item.langKeyWords));
            const langGenerated = this.art508LangService.get508Languages(langKeyWords) ? this.art508LangService.get508Languages(langKeyWords) : "<p><b>No Language can be generated based on your selection!</b></p>"
            const footer = this.formPageService.getDocxFooterText();
            //508MapoingService call for language, for download anc clipboard
            this.languageGenerated.push("<p><h2>Accessibility Requirements Tool</h2><h2> ICT Accessibility Requirements Statement per Section 508 of the Rehabilitation Act</h2> <h3>" + item.name + "</h3></p>\n" + langGenerated + footer);
            // For UI only
            this.languageGeneratedUI.push("<p> <h3>" + item.name + "</h3></p>\n" + langGenerated);
        });

        this.stepsData.activeId = "00";
    }

    onNext(){
        this.currentIndex++;
        if(this.currentIndex >= this.maxIndex){
            this.currentIndex = this.maxIndex;
        }
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
        //document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
        const section = document.getElementById('art-section-508-requirements');
        if (section instanceof HTMLElement) {
         section.scrollIntoView({behavior: "smooth", block: "start"});
        }

        
    }
    onPrevious(){
        this.currentIndex--;
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
        //document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
        const section = document.getElementById('art-section-508-requirements');
        if (section instanceof HTMLElement) {
         section.scrollIntoView({behavior: "smooth", block: "start"});
        }

    }

    copyToClipboard(){
        this.clipboardService.copyFromContent(this.languageGenerated[this.currentIndex]);
    }

    onAmendForm(index:number){
        this.formPageService.setFormPage(index);
        this.router.navigateByUrl("/form-page");
    }

    onSelectedTabReceive(selectedIndex:number){
        this.currentIndex = selectedIndex;
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
    }
}

