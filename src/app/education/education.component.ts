import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  educationMode = ["","Correspondence","Full Time","Part Time","Others"];
  educationType: Array<any> = [
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
  StateAndCity: Array<any> = [
    {state: ''},
    {state: 'Andaman & Nicobar Islands', cities:[""]},
    {state: 'Andhra Pradesh', cities:[""]},
    {state: 'Arunachal Pradesh', cities:[""]},
    {state: 'Assam', cities:[""]},
    {state: 'Bihar', cities:[""]},
    {state: 'Chandigarh', cities:[""]},
    {state: 'Chhattisgarh', cities:[""]},
    {state: 'Dadra & Nagar Haveli', cities:[""]},
    {state: 'Daman & Diu', cities:[""]},
    {state: 'Delhi', cities:[""]},
    {state: 'Goa', cities:[""]},
    {state: 'Gujarat', cities:[""]},
    {state: 'Haryana', cities:[""]},
    {state: 'Himachal Pradesh', cities:[""]},
    {state: 'Jammu & Kashmir', cities:[""]},
    {state: 'Jharkhand', cities:[""]},
    {state: 'Karnataka', cities:[""]},
    {state: 'Kerala', cities:[""]},
    {state: 'Lakshadweep', cities:[""]},
    {state: 'Madhya Pradesh', cities:[""]},
    {state: 'Maharashtra', cities:[""]},
    {state: 'Manipur', cities:[""]},
    {state: 'Meghalaya', cities:[""]},
    {state: 'Mizoram', cities:[""]},
    {state: 'Nagaland', cities:[""]},
    {state: 'Odisha', cities:[""]},
    {state: 'Puducherry', cities:[""]},
    {state: 'Punjab', cities:[""]},
    {state: 'Rajasthan', cities:[""]},
    {state: 'Sikkim', cities:[""]},
    {state: 'Tamil Nadu', cities:["","Others","N.Patti","Arakkonam","Arcot","Ariyalur","Aruppukottai",
                                  "Bhavani","Chengalpattu","Chennai","Chinna salem","Coimbatore","Coonoor",
                                  "Cuddalore","Dharmapuri","Dindigul","Gingee","Gobichettipalayam","Gudalur",
                                   "Jayankondam","Kanchipuram","Karaikudi","Karungal","Karur","Kollankodu",
                                   "Lalgudi","Madurai","Nagapattinam","Nagercoil","Namagiripettai","Namakkal",
                                   "Nandivaram-Guduvancheri","Nanjikottai","Natham","Nellikuppam","Neyveli",
                                  "O' Valley","Oddanchatram","Pacode","Padmanabhapuarm","Palani","Palladam",
                                  "Pallikonda","Panagudi","Panruti","Paramakudi","Parangettai","Pattakkottai",
                                   "Perambalur","Peravurani","Periyakulam","Periyasemur","Pernampattu","Pollachi",
                                    "Polur","Ponneri","Pudukkottai","Pudupattinam","Puliyankudi","Punjaipugalur",
                                    "Rajapalayam","Ramanathapuram","Rameshwaram","Ranipet","Rasipuram","Salem",
                                    "Sankarankoil","Sankari","Sathyamangalam","Sattur","Shenkottai","Sholavandan",
                                    "Sholingur","Sirkali","Sivaganga","Sivagiri","Sivakasi","Srivilliputtur","Surandai",
                                    "Suriyampalayam","Tenkasi","Thammampatti","Thanjavur","Tharamangalam","Tharangambadi",
                                    "Theni Allinagaram"]},
    {state: 'Telangana', cities:[""]},
    {state: 'Tripura', cities:[""]},
    {state: 'Uttar Pradesh', cities:[""]},
    {state: 'Uttarakhand', cities:[""]},
    {state: 'West Bengal', cities:[""]},
  ];
  cities:Array<any>;
  changeCity(selectedState: any) {
    this.cities = this.StateAndCity.find(s => s.state == selectedState).cities;
  }
  changeEducationType(educationType: any){
    this.courses = this.educationType.find(edu => edu.type == educationType).courses;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
