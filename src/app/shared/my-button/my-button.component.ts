import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() color:string;
  @Input() text:string;

  public colorClass:string;

  constructor() { }

  ngOnInit(): void {
    switch (this.color) {
      case 'cancel':
        this.colorClass = 'cancel';
        break;
      case 'submit':
        this.colorClass = 'submit';
        break;
      case 'warning':
        this.colorClass = 'warning';
        break;
      default:
        break;
    }
  };

}
