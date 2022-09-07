import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // empty string variable for ngModel in html to display what wetyped in searchbar 
  public initialSearch: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
