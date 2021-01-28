import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkExperience } from '../model/WorkExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  WorkForm: FormGroup;
  work:WorkExperience = new WorkExperience();

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.WorkForm = this.fb.group({
      firm: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", Validators.compose([Validators.required, Validators.pattern(/^\d{1,6}(?:\.\d{0,2})?$/)])],
      fromDate: ["", Validators.required],
      toDate: ["", Validators.required]
    })
  }

  save(){
    console.log("in save");
  }
  next(){
    this.router.navigateByUrl('/personal-details');
  }
}
