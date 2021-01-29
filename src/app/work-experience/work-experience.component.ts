import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { WorkExperience } from '../model/WorkExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private datePipe: DatePipe, private router: Router) { }
  work = new WorkExperience();

  ngOnInit(): void {
    this.work = JSON.parse(sessionStorage.getItem('workExperience') || '{}');
  }

  dateError:any = {isError:false,errorMessage:''};

  startDate:string;
  endDate:string;

  compareTwoDates() {
    console.log("in comparedate function");
    this.startDate = this.datePipe.transform(this.work.fromDate,"dd-MM-yyyy") || '';
    this.endDate = this.datePipe.transform(this.work.toDate,"dd-MM-yyyy") || '';
    if(this.endDate < this.startDate) {
      this.dateError = {isError:true, errorMessage:"End Date can't before start date"};
    }
  }

  storeInSession() {
    sessionStorage.setItem('workExperience',JSON.stringify(this.work));
  }

  nextpage(){
    this.router.navigateByUrl('/documents-upload');
  }

}
