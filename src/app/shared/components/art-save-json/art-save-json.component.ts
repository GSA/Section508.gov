import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ICTInterface } from '../../models/ict.interface';

@Component({
  selector: 'art-save-json',
  templateUrl: './art-save-json.component.html',
  styleUrls: ['./art-save-json.component.scss']
})

/**
 * A button component to facilitate downloading data in json format.
 */
export class ArtSaveJsonComponent implements OnInit {

  constructor() { }
  /**
   * @type obj{btnName:string, fileName:string}
   * @description the parent component will send input to configure the save as json button component
   */
  @Input() saveAsInfo:any = {btnName:'', fileName:''};

  /**
   * @type ICTInterface
   * @description input to Save As Json component from parent componenet
   */
  @Input() ictItem: ICTInterface |undefined

  /**
   * @type boolean
   * @description makes the button enabled or disabled.
   */
  buttonIsEnabled:boolean = false;

  ngOnInit() {
    if(this.ictItem){
      this.buttonIsEnabled=true;
    }
  }

  /**
   * @returns SafeUrl
   * @description generates a json content from ICT Item and returns a safe url linking to the json file. 
   */
  get dataUri(): SafeUrl {
    const jsonData = JSON.stringify(this.ictItem);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
    return uri;
  }
}