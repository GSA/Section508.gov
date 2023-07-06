import { Component, OnInit } from '@angular/core';
import { ICTInterface } from 'src/app/shared/models/ict.interface';
import { ClipboardService } from 'ngx-clipboard';
import {Art508LangService} from '../../shared/services/art-508-lang/art-508-lang.service';
import {IctItemService} from "../../shared/services/ict-item/ict-item.service";
import { IStepIndicator } from 'src/app/shared/models/step-indicator.interface';
import { Router } from '@angular/router';
import { FormPageService } from 'src/app/shared/services/form-page/form-page.service';
import { ArtIctLpService } from 'src/app/shared/services/art-ict-lp/art-ict-lp.service';

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
    private formPageService:FormPageService,
    private artIctLpService:ArtIctLpService
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
     * Will be populated from 508MappingService for the copy to clipboard
     */
    languageGeneratedCopy:string[] = [];

    /**
     * Will be populated from 508MappingService for the Docx download
     */
    languageGeneratedDoc:string[] = [];

    /**
     * Will be populated from 508MappingService, UI only
     */
     languageGeneratedUI:string[] = [];

    stepsData:IStepIndicator = {tabs:[], activeId:''};

    /**
     * ICTItems can be populated from ICTItemService
     */
    ictItems: ICTInterface[] = [];

    /**
     * @description Name of a user entered on the ICTPage or upload page. It was an optional filed
     */
    userName:string = '';
 
    ngOnInit(): void {

        // Getting the name of the user.
        this.userName = this.artIctLpService.getUserName();

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
            const solicitationPhase = this.formPageService.getConfigurations();
            let solicitationPhaseValue = "";
            solicitationPhase[0].formElements[0].options?.forEach((optionItem, optionIndex)=>{
                if(optionItem.value == langKeyWords["sol-type"]["sol-type"] ){
                    solicitationPhaseValue = optionItem.label;
                }
             });
              
            //508MapoingService call for language, for download anc clipboard
            this.languageGeneratedDoc.push("<p><h2>Accessibility Requirements Tool</h2><h2>ICT Accessibility Requirements Statement per Section 508 of the Rehabilitation Act</h2> <h3> </h3>" + (this.userName? "<h3>" + this.userName + "</h3>":'')  + "<h3>" + solicitationPhaseValue  + "</h3> <p> </p> <h3>" +item.name + "</h3></p>\n" + langGenerated + footer);
            // For UI only
            this.languageGeneratedUI.push("<p> <h3>" + item.name + "</h3></p>\n" + langGenerated);
            // Copy to clipboard Only
            this.languageGeneratedCopy.push("<p><h2>Accessibility Requirements Tool</h2><h2>ICT Accessibility Requirements Statement per Section 508 of the Rehabilitation Act</h2> <h3>" + item.name + "</h3></p>\n" + langGenerated + footer);

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
        let regex = /(<([^>]+)>)/ig;
        let regexStrong = /(<strong>)/ig;
        let regexH3 = /(<h3>)/ig;
        let regexP = /(<p>)/ig;
        let regexLi = /(<li>)/ig;
        let regexTab = /(    )/ig;
        let regex2Space = /(  )/ig;

        const tempLanguageGenerated = this.languageGeneratedCopy[this.currentIndex].trim();

        console.log(tempLanguageGenerated);
        this.clipboardService.copyFromContent(tempLanguageGenerated.replace("<p><table>","").replace("<h2>","").replace("</ol><h3>","\n").replace("<h2>","\n\n").replace(regexLi,"\n- ").replace(regexH3,"\n\n").replace(regexP,"\n\n").replace(regex,"").replace(regexTab,"").replace(regex2Space,"").trim());
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

