import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aadhar:any;
  pan:any;
  hsc:any;
  sslc:any;
  degree:any;
  profilePic:any;

}
