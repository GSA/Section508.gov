import {Injectable} from '@angular/core';
import optionLangMap from '../../../../assets/data/option-language-mapping.json';
import languages from '../../../../assets/data/508languages.json';
import compHardwareKeys from '../../../../assets/data/comp-hardware-keys.json';

@Injectable({
  providedIn: 'root'
})
export class Art508LangService {

  constructor() {
  }

  /**
   * @description get 508 languages by form submission.
   * @param data
   */
  get508Languages(data: any): string {
    let optionKeys = this.getOptionKeys(data, []);

    // Computer hardware
    compHardwareKeys.forEach(key => {
      for (let k in optionKeys) {
        if(optionKeys[k].includes(key) && !optionKeys.includes("hardware-computer")) {
          // @ts-ignore
          optionKeys.push("hardware-computer");
        }
      }
    });
    let mapping = this.getMapping(optionKeys);
    return this.getResultString(mapping);
  }

  /**
   * Get filtered form options array
   *
   * @param data
   * @param optionKeys
   */
  getOptionKeys(data: any, optionKeys: []): any[] {
    for (let key in data) {
      let value = data[key];
      if (typeof value !== 'object') {
        if (typeof value === 'string') {
          // @ts-ignore
          optionKeys.push(value.trim());
        } else if (typeof value === 'boolean' && value) {
          // @ts-ignore
          optionKeys.push(key.trim());
        }
      } else {
        this.getOptionKeys(value, optionKeys);
      }
    }
    return optionKeys;
  }

  /**
   * Option key to language key mapping.
   *
   * @param optionKeys
   */
  getMapping(optionKeys: any[]): any[] {
    let mapping: any[] = [];
    for (let key in optionLangMap) {
      for (let k in optionKeys) {
        if(optionKeys[k].includes(key)) {
          // @ts-ignore
          mapping = mapping.concat(optionLangMap[key]);
        }
      }
    }
    mapping = [...new Set(mapping)];
    mapping.sort();
    return mapping;
  }

  /**
   * Get string language HTML by keys.
   *
   * @param mapping
   */
  getResultString(mapping: any[]): string {
    let result = "";
    mapping.forEach(langKey => {
      if (langKey in languages) {
        // @ts-ignore
        result += languages[langKey];
      }
    });
    return result;
  }
}
