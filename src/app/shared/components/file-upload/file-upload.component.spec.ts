import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture,TestBed } from '@angular/core/testing';
import { FileUploadService } from '../../services/file-upload.service';
import {FileUploadComponent} from './file-upload.component';

describe('FileUploadComponent', ()=>{
    let component: FileUploadComponent;
    let validOutput = [ {name: 'item1', langKeyWords: {}, timeStamp: 'Thu Nov 03 2022 17:25:02 GMT-0400 (Eastern Daylight Time)'},
                        {name: 'item2', langKeyWords: {}, timeStamp: 'Thu Nov 03 2022 17:25:02 GMT-0400 (Eastern Daylight Time)'}
                    ];

    let validInputFiles = {
        "target":{"files":[
                {name: 'myFile1.json', lastModified: '1667423909606', lastModifiedDate: 'Wed Nov 02 2022 17:18:29 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '69', type:'application/json'},
                {name: 'myFile2.json', lastModified: '1667459822800', lastModifiedDate: 'Thu Nov 03 2022 03:17:02 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '72', type:'application/json'}
            ]
        }
    }

    let invalidSizeFiles = {
        "target":{"files":[
                {name: 'myFile1.json', lastModified: '1667423909606', lastModifiedDate: 'Wed Nov 02 2022 17:18:29 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '69', type:'application/json'},
                {name: 'myFile2.json', lastModified: '1667459822800', lastModifiedDate: 'Thu Nov 03 2022 03:17:02 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '72', type:'application/json'},
                {name: 'myFile3.json', lastModified: '1667459822800', lastModifiedDate: 'Thu Nov 03 2022 03:17:02 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '72521487', type:'application/json'}
            ]
        }
    }

    let invalidTypeFiles = {
        "target":{"files":[
                {name: 'myFile1.json', lastModified: '1667423909606', lastModifiedDate: 'Wed Nov 02 2022 17:18:29 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '69', type:'application/json'},
                {name: 'myFile2.json', lastModified: '1667459822800', lastModifiedDate: 'Thu Nov 03 2022 03:17:02 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '72', type:'application/json'},
                {name: 'myFile3.pdf', lastModified: '1667459822800', lastModifiedDate: 'Thu Nov 03 2022 03:17:02 GMT-0400 (Eastern Daylight Time)', webkitRelativePath: '', size: '725', type:'application/pdf'}
            ]
        }
    }
   
    beforeEach(()=>{
        const fileUploadServiceSpy = jasmine.createSpyObj<FileUploadService>(['upload','truncate','setMaxLength' ]);
        component = new FileUploadComponent(fileUploadServiceSpy);
        component.ngOnInit();
    });

    it('should create', ()=>{
        expect(component).toBeTruthy();
    });

    it('should return 2 files',()=>{
        component.files=[];
        component.onChange(validInputFiles);
        expect(component.files.length).toBe(2);
    });

    it('should return invalid size message',()=>{
        component.onChange(invalidSizeFiles);
        expect(component.selectErrors[0]).toContain('File size is limited to 10MB max');
    });

    it('should return invalid file type message',()=>{
        component.onChange(invalidTypeFiles);
        expect(component.selectErrors[0]).toContain('Please upload a valid JSON file');
    });
})