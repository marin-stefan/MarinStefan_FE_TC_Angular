import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() color:string;
  @Input() activate:string;

  @Output() cardColorChange = new EventEmitter<{activate:string}>();

 
  btnColor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeBtnColor(color:string):void{
    this.btnColor = this.btnColor === "" ? color : ""
  }

  cardColor(activate:string):void{
    this.cardColorChange.emit({activate:activate})
    console.log("bla")
  }
  


}
