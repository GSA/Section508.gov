import { Injectable } from '@angular/core';
import { IFileData } from '../models/file-data.interface';
import { IctItemService } from './ict-item/ict-item.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private ictItemService:IctItemService) {}

  /**
   * @description the maximum number the name character
   */
  private charCount:number = 25;

  /**
   * @param files - list of files selected from file-input component  
   * @returns Promise<IFileData> - an object combining error messages and array of valid json objects.
   * @description incoming json files with valid structures will be collected in and array. Any errors will also pushed in another array
   * @type {(files:File[])=> Promise<IFileData>}
   **/
  upload(files:File[]): Promise<IFileData> {

    let promises:Promise<any>[] = []

    for (var file of files){
      let promise:Promise<any> = new Promise((resolve)=>{
        let fileName = file.name;
        const fileReader = new FileReader();
      
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = (e) => {
          if(fileReader.result){
            var fileData;
            //there may be chances that the file is not in proper json structure leading to break on parsing.
            try{
              fileData = JSON.parse(fileReader.result.toString());
              if(fileData.name == null || fileData.langKeyWords==null){
                resolve({data:'JSON structure does not match: ' + fileName, error: true});
              }else if(fileData.name && fileData.name.length > this.charCount ){
                resolve({data:'The maximum length has exceeded ' + this.charCount, error: true});
              }
              else if(this.checkItemDuplicated(fileData.timeStamp)){
                resolve({data:'This ICT Item has already been uploaded, please select a different ICT Item', error: true});
              }
              else{
                //fileData.timeStamp = Date.now().toString();
                resolve({data:fileData});
              }

            }catch(error){
              resolve({data:'JSON structure does not match:: '+fileName, error: true});
            }           
          }else{
            resolve({data:'Empty file: ' + fileName, error: true});
          }
        }
      })
      promises.push(promise);
    }
    return new Promise<IFileData>((resolve)=>{
      Promise.all(promises).then((values)=>{
        let finalOuput: IFileData = {errors:[], jsonData:[]}
        let hasError:Boolean = false;
        for( var value of values){
          if(value.error){
            hasError = true;
            finalOuput.errors.push(value.data)
          }else{
            finalOuput.jsonData.push(value.data)
          }
        }
        if(hasError){
          finalOuput.jsonData = [];
        }
        resolve(finalOuput);
      })
    });
  } 

  /**
   * @param num - number to truncate
   * @param places - number of decimal places
   * @returns number
   * @description function to truncate the decimal number with the given place
   * @type {(num:number, places: number) => number}
   **/
  truncate (num: number, places: number): number {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
  }

  /**
   * @description the parent will the sent maximum of character to be allowed
   * @param maxLength 
   * @type number
   */
  setMaxLength(charCount:number){
    this.charCount = charCount;
  }

  /**
   * @description check if a timestamp from the upload json has already been uploaded
   * @params timeStamp
   * @type string
   * @returns boolean
   */
   checkItemDuplicated(timeStamp:string):boolean{
   return !!this.ictItemService.get().find(eachItem => eachItem.timeStamp ===  timeStamp);
  }
}

