import { Component, OnInit } from '@angular/core';
import { EducationDetails } from '../model/EducationDetails';
import { UserPersonal } from '../model/UserPersonal';
import { WorkExperience } from '../model/WorkExperience';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  viewButton:boolean = false;
  work = new WorkExperience();
  user =new UserPersonal();
  eduDetailsList:EducationDetails[] = [];
  aadhar:any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('personalDetails') || '{}');
    this.eduDetailsList = JSON.parse(sessionStorage.getItem('education') || '{}');
    this.work = JSON.parse(sessionStorage.getItem('workExperience') || '{}');
    this.aadhar = sessionStorage.getItem('aadhar');

  }

}
