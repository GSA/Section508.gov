import { Injectable } from '@angular/core';
import { ICTInterface } from '../../models/ict.interface';

@Injectable({
  providedIn: 'root'
})
export class IctItemService {

  constructor() { }

  public ictItem:ICTInterface[] = [];

  /**
   * @description function to return any ICT items
   * @returns ICTInterface[]
   */
  get():ICTInterface[]{
    return JSON.parse(JSON.stringify(this.ictItem));
  }

  /**
   * @description function to assign a value to an ICT item
   * @param items 
   * @return void
   * @type ICTInterface[]
   */
  set(items:ICTInterface[]){
    this.ictItem.push(...items);
  }

   /**
   * @description function to reassign updated set of data to items
   * @params items
   * @return void
   * @type ICTInterface[]
   */
    reSet(items:ICTInterface[]):void{
      this.ictItem = items;
    }
}
