import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../model/WorkExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }
  work=new WorkExperience();

  ngOnInit(): void {
  }

}
