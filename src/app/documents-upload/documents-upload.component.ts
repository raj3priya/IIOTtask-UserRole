import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('aadhar',this.aadhar);
  }
  aadhar:any;
  pan:any;
  hsc:any;
  sslc:any;
  degree:any;
  profilePic:any;

  nextpage(){
    //sessionStorage.setItem('personalDetails',JSON.stringify(this.user));
    this.router.navigateByUrl('/confirm-details');
  }

}
