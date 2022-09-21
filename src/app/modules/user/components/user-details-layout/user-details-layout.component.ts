import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-layout',
  templateUrl: './user-details-layout.component.html',
  styleUrls: ['./user-details-layout.component.css']
})
export class UserDetailsLayoutComponent implements OnInit {

  // navigationLinks 
  public navigationLinks = [
    {path: 'all', label: 'All', data:"thisisdata"},
    {path: 'personal', label: 'Personal', data:"thisisdata"},
    {path: 'company', label: 'Company',data:"thisisdata"}
  ]
  public activeLink = this.navigationLinks[0]; // default selection for the navbar

  constructor() { }

  ngOnInit(): void {
  }

}
