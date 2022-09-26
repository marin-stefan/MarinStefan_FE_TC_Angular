import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register-shell',
  templateUrl: './register-shell.component.html',
  styleUrls: ['./register-shell.component.css']
})
export class RegisterShellComponent implements OnInit {

  public parentLogForm = new FormGroup({});

  constructor( 
    private accountService : AccountService,
    private router : Router
  ) { }

  ngOnInit(): void {
  };

  public register():void{
    //takes the info and sends it to auth service to be checked and stored then navigate to users page
    if(!this.accountService.checkUsername(this.parentLogForm.value['logForm'].userName)){
      this.accountService.saveAccount(this.parentLogForm.value['logForm'])
      this.router.navigate(['users'])
    }else {
      alert('Username is already in use')
      this.parentLogForm.reset();
    }
  };
  
}
