import { literal } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  Error:any = {isError:false,errorMessage:''};
  login:any = {username:'', password:''};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin() {
    if(this.login.username === "admin@lti.com" && this.login.password === "admin@123") {
      alert("Login Success");
      this.router.navigateByUrl('/admin-view');
    } else {
      this.Error = {isError:true, errorMessage:"Invalid Username/Password"};
    }
  }

}
