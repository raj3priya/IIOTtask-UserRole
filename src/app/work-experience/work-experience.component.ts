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
  work = new WorkExperience();

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save(){
    console.log("in save");
  }
  next(){
    this.router.navigateByUrl('/personal-details');
  }
}
