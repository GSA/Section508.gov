import { Component, OnInit } from '@angular/core';
import { FormTemplateInterface } from 'src/app/shared/models/form-template.interface';
import { ArtTestService } from 'src/app/shared/services/art-test.service';
import { IctItemService } from 'src/app/shared/services/ict-item/ict-item.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

/**
 * @description Provide all the configuration for the forms and elements which will be created
 * @type FormTemplateInterface
 */
  formConfig:FormTemplateInterface[] = [];

  /**
  * @description Used to trigger the ngOnChanges function to listing to any input property change
  * @type any
  */
  scanChange:any = "";
  
  constructor(private ictItemService: IctItemService, 
    public artTestService:ArtTestService) { }

  ngOnInit(): void {
    this.formConfig = this.artTestService.getConfigurations();
  }

  /**
   * @return void
   * @description When the user submit an project or ICT name, it will call the addIctItem function
   * @param data 
   */
   onFormSubmitted(data:any):void{
    const key = Object.keys(data)[0];
    const val = data[key];
  }

}
