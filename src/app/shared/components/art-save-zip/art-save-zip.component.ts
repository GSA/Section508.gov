import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ICTInterface } from '../../models/ict.interface';
import * as JSZip from 'jszip';


@Component({
    selector: 'art-save-zip',
    templateUrl: './art-save-zip.component.html',
    styleUrls: ['./art-save-zip.component.scss'],
    standalone: false
})
export class ArtSaveZipComponent implements OnInit {

  constructor() { }
  /**
   * @type obj{btnName:string, fileName:string}
   * @description the parent component will send input to configure the save as json button component
   */
  @Input() saveAsInfo:any = {btnName:'', fileName:''};

  /**
   * @type ICTInterface
   * @description input to Save As Zip component from parent componenet
   */
  @Input() ictItems: ICTInterface[] |[] = [];

  /**
   * @type boolean
   * @description makes the button enabled or disabled.
   */
  buttonIsEnabled:boolean = false;

  ngOnInit() {
    if(this.ictItems.length > 1){
      this.buttonIsEnabled=true;
    }
  }

  async generateZip() {
    const zip = new JSZip.default();

    for (let i = 0; i < this.ictItems.length; i++) {
      const jsonData = JSON.stringify(this.ictItems[i]);
      zip.file(`jsonData_${i + 1}.json`, jsonData);
    }

    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.saveAsInfo.fileName}.zip`;
      link.click();
    } catch (error) {
      console.error('Error generating zip:', error);
    }
  }

}
