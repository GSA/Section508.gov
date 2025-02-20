import { TestBed } from '@angular/core/testing';
import { IFileData } from '../models/file-data.interface';

import { FileUploadService } from './file-upload.service';

describe('FileUploadService', () => {
  let service: FileUploadService;

  //test data
  var file1 = new File(['{"name":"item1","langKeyWords":{"item1":"ok","item2":"ok","item3":"ok"}}'], "item1.json",{'type':'application/json'});
  var file2 = new File(['{"name":"item2","langKeyWords":{"item1":"ok","item2":"ok","item3":"ok"}}'], "item2.json",{'type':'application/json'});
  var file3 = new File(['{"nameOfTheJson":"item2","langKeyWords":{"item1":"ok","item2":"ok","item3":"ok"}}'], "item2.json",{'type':'application/json'});

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return zero error message', ()=>{
    
    var validFiles = [];
    validFiles.push(file1);
    validFiles.push(file2);
    var dataFromFile:IFileData;
    service.upload(validFiles).then((value)=>{
      dataFromFile=value;
      expect(dataFromFile.errors.length).toBe(0);
    });
    
  })

  it('should be no json data on error', ()=>{
    
    var invalidFiles = [];
    invalidFiles.push(file1);
    invalidFiles.push(file3);
    var dataFromFile:IFileData;
    service.upload(invalidFiles).then((value)=>{
      dataFromFile=value;
      expect(dataFromFile.errors.length).toBe(1);
      expect(dataFromFile.jsonData.length).toBe(0);
    });
  })

  it('should truncate the value', ()=>{
    let num = 134.2345678;
    let places =3;
    expect(service.truncate(num,places)).toBe(134.234);
  })
});
