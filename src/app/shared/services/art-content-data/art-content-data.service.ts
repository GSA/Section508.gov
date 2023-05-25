import { Injectable } from '@angular/core';
import  Banner  from '../../../../assets/data/banner.json';
import  Header  from '../../../../assets/data/header.json';
import  Footer  from '../../../../assets/data/footer.json';
import  UpdateDate  from '../../../../assets/data/update-date.json';
import { IButtonInterface } from '../../models/IButtonInterface';

@Injectable({
  providedIn: 'root'
})
export class ArtContentDataService {

  constructor() { }

  /**
   * @description Getting the banner data from the json file
   * @returns title:string, header:string
   */
  getBannerData(): {title:string, header:string}{
    return Banner;
  }

  /**
   * @description Getting the header data from the json file
   * @returns string
   */
   getHeader(): string{
    return Header['data'];
  }

  /**
   * @description Getting the footer data from the json file
   * @returns title:string, data:string
   */
   getFooter(): {title:string, data:string}{
    return Footer;
  }

  /**
   * @description Getting the updated date data from the json file
   * @returns string
   */
   getUpdatedDate(): string{
      return UpdateDate['data'];
   }
}
