import { Component, OnInit } from '@angular/core';
import { EducationDetails } from '../model/EducationDetails';
import { UserPersonal } from '../model/UserPersonal';
import { WorkExperience } from '../model/WorkExperience';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {

  work = new WorkExperience();
  user =new UserPersonal();
  eduDetailsList:EducationDetails[] = [];

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('personalDetails') || '{}');
    this.eduDetailsList = JSON.parse(sessionStorage.getItem('education') || '{}');
    this.work = JSON.parse(sessionStorage.getItem('workExperience') || '{}');
  }

  saveToDb() {
    sessionStorage.removeItem('personalDetails');
    sessionStorage.removeItem('workExperience');
    sessionStorage.clear();
  }

}
