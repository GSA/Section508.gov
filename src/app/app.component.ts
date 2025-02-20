import { Component, OnInit } from '@angular/core';
import { ICTInterface } from './shared/models/ict.interface';
import { IButtonInterface } from './shared/models/IButtonInterface';
import { ArtContentDataService } from './shared/services/art-content-data/art-content-data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   /**
   * @description Using service for all shared content
   * @params artContentDataService
   */
    constructor( public artContentDataService:ArtContentDataService, private router:Router ) { }
    
    url="/preview/gsa/section508.gov/test-art/art";
    //url="";

    ngOnInit(): void {
      this.url = environment.urlPath;
    }
  title = 'Accessibility Requirements Tool (ART)';

  
}
