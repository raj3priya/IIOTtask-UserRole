import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  educationMode = ["","Correspondence","Full Time","Part Time","Others"];
  educationTypeArray: Array<any> = [
    {type: ''},
    {type: 'Degree', courses: ["","AMIE","Applied Arts","B.Arch","B.B.M","B.Com","B.Ed",
                                "B.Pharm","B.Sc(Engg)","B.Sc(IT)","B.Sc(Tech)","B.Tech",
                                "B.Tech(HONS)","B.A","Bachelor in Infmn Systems",
                                "Bachelor of Fine Arts","Bachelor of Mass Media","BBA",
                                "BCA","BE","BMS","Applied Arts"],
                      branch: []},
    {type: 'Diploma', courses: ["","Advanced Diploma","DBM","DCA","DCE","DFM","DHRM",
                                "Dip(Engg)","Dip(IT)","Dip(Mgmt)","Diploma in Architecture",
                                "Diploma in Commercial Practice","Diploma in Labour Law",
                                "Diploma in Safety","DIS","DME - Sandwich Course","DMM",
                                "DPM","DS&M","Foreign Language","G.D.C"],
                      branch: []},
    {type: 'Higher Secondary', courses: ["HSC or equivalent"], branch: ["No specialisation"]},
    {type: 'Secondary', courses: ["SSC or equivalent"], branch: ["No specialisation"]},
  ];
  courses:Array<any>;
  changeEducationType(educationType: any){
    this.courses = this.educationTypeArray.find(edu => edu.type == educationType).courses;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
