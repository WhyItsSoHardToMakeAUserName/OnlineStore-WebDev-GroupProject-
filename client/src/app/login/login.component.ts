import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../__services/account.service';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  model: any = {}

  constructor(private router: Router, public accountService: AccountService){}
  
  ngOnInit(): void {
  }
  
  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout()
  }
}
