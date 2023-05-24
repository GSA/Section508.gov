import { Component,EventEmitter,Input,OnInit, Output } from "@angular/core";
import { FileUploadService } from "src/app/shared/services/file-upload.service";
import { IFileData } from "../../models/file-data.interface";
import { ICTInterface } from "../../models/ict.interface";
@Component({
    selector: 'art-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit{
    selectErrors:string[] = [];
    //Store selected files
    files: File[] = [];
    //Output for parent component.
    result: IFileData = {errors:[], jsonData:[]};
    //Flag to enable/disable the Upload button.
    isReadyToUpload:boolean = false;
    //Flag for file input. True if no file selected.
    fileInputRequired:boolean = true;
   
    //Max size allowed for a file (in Bytes)
    maxFileSize: number = 10485760
    /**
     * @description Used to display successful message when the files has been upload successfully 
     * @type string
     */
    successMessage:string = '';
    
    //Inject Services
    constructor(private fileUploadService: FileUploadService){}
    @Output() getFileData = new EventEmitter<ICTInterface[]>();

    /**
     * @description the maximum number of files to be uploaded. This will change by the parent
     */
    @Input() maxFilesNbr:number = 8;

    /**
     * @description the maximum number of files to be uploaded Initially
     */
     @Input() maxFile:number = 8;

    /**
     * @description the maximum number the name character
     */
     @Input() maxLength:number = 25;

    ngOnInit(): void {
        this.fileUploadService.setMaxLength(this.maxLength);
    }
    /**
     * @param event 
     * @returns void
     * @description invokes when user selects the files. Validates numbers of file selected, size and type of a file. Validation errors are stored in SelectErrors array. 
     * @type {(event: Event) => void}
     **/
    onChange(event: any): void {
        this.successMessage = "";
        //Initializing the variables
        this.result={errors:[], jsonData:[]};
        this.isReadyToUpload = false;
        this.fileInputRequired = false;
        this.selectErrors = [];
        //checking if no file is selected
        if(event.target.files.length==0){
            this.fileInputRequired = true
            return;
        }
        //checking if files are selected are more than the maximum sent by the parents
        if(event.target.files.length > this.maxFilesNbr){
            this.selectErrors.push('Maximum Upload is ' +this.maxFile + '.');
        }
        //validating type and size of selected files.
        for(var file of event.target.files){
            if (file.size > this.maxFileSize){
                this.selectErrors.push('File size is limited to 10MB max. ' + file.name + ': ' + this.fileUploadService.truncate(file.size/1048576,2)  + 'MB');
            }
            if(file.type != 'application/json'){
                this.selectErrors.push('Please upload a valid JSON file. ' + file.name);
            }
        }
        if(this.selectErrors.length>0){
            return;
        }
        this.files = event.target.files;
        this.isReadyToUpload = true;
    }
    
    /**
     * @returns void
     * @description collects the json data from all files and emits a single array to the calling component 
     * @type {() => void}
     **/
    onUpload(){
        this.fileUploadService.upload(this.files)
        .then((fileData)=>{       
            this.result = fileData;
            this.getFileData.emit(this.result.jsonData);
            this.isReadyToUpload = false;
            if(this.result.errors && this.result.errors.length <= 0) this.successMessage = "File uploaded"
        })
    }

}