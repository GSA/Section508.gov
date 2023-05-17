import { Component, Input, OnInit } from '@angular/core';
import { IButtonInterface } from '../../models/IButtonInterface';
import { Router } from '@angular/router';


@Component({
    selector: 'art-button',
    templateUrl: './art-button.component.html',
    styleUrls: ['./art-button.component.scss']
})
export class ArtButtonComponent implements OnInit {
    constructor(private router: Router) { }

    /**
     * @description the input for the button 
     * @type IButtonInterface
     */
    @Input('buttonData') buttonData: IButtonInterface | undefined;

    @Input('btnTile') btnTile: boolean= false;

    /**
     * @description to disabled the button
     * @type boolean
     */
    @Input('disabled') disabled?: boolean = false;

    ngOnInit(): void {
        if(this.buttonData && !this.buttonData.btnClass) this.buttonData.btnClass = "warm";
        if(this.buttonData && !this.buttonData.ariaLabel) {
            this.buttonData.ariaLabel = this.buttonData?.label + " button"
        };
    }

    /**
     * @return void
     * @description this function is trigger when the button is and will redirect the user to the destination
     */
    buttonClicked():void {

        // Calling the action method if defined
        if (this.buttonData?.action) {
            this.buttonData?.action();
        }
        if (this.buttonData?.destination) {
            this.router.navigateByUrl(this.buttonData?.destination);
        }
    }
}
