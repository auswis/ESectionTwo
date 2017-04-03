import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: `jumbotron.component.html`,
})
export class JumbotronComponent  {  
    private jbtHeading:String;
    private jbtText:String;
    private jbtBtnText:String;
    private jbtBtnUrl:String;

    constructor(){
        this.jbtHeading = "Hello World";
        this.jbtText = "This is a simpel Hero unit";
        this.jbtBtnText = "Read More...";
        this.jbtBtnUrl = "/about";
    }
}
