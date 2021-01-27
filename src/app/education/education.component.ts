import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EducationDetails } from '../model/EducationDetails';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  EducationForm: FormGroup;
  education:EducationDetails = new EducationDetails();
  eduDetailsList:EducationDetails[] = [];
  type:string;
  degree:string;
  branch:string;
  mode:string;
  state:string;
  city:string;
  educationMode = ["Correspondence","Full Time","Part Time","Others"];
  educationType: Array<any> = [
    {type: 'Degree', courses: ["AMIE","Applied Arts","B.Arch","B.B.M","B.Com","B.Ed",
                                "B.Pharm","B.Sc(Engg)","B.Sc(IT)","B.Sc(Tech)","B.Tech",
                                "B.Tech(HONS)","B.A","Bachelor in Infmn Systems",
                                "Bachelor of Fine Arts","Bachelor of Mass Media","BBA",
                                "BCA","BE","BMS","Applied Arts"],
                      branch: ["Statistics","Mechatronics","Electronics & Communication",
                      "Financial Accounting","Software Enhineering","Computer Engineering",
                      "Computer Science & Engineering","Construction Engineering","Digital Electronics",
                      "ELectronics & Instrumentation","Electronics & Radio Engineering","Instrument Technology",
                      "Instrumentation & Control","Accountancy","Advertising","Aeronautical","Agriculture",
                      "Arts","Automobile","Bio Chemistry","Bio medical","Biology","Botany","Business Administration",
                      "Business Management","Chemical","Civil","Commerce","Communication","Computer Application",
                      "Computer Science","Computer Technology","Economics","Electrical","Electronics","Energy",
                      "Foreign Trade","Genearl Medicine","Geo Physics","Geography","Geology","History","Home Science",
                      "Hotel Management","Industrial Business","Industrial Electronics","Industrial Management",
                      "Information Technology","Inorganic Chemistry","Instrumentation","Journalism","Literature",
                      "Management Studies","Marketing","Mass Communication","Maths","Mechanical","Metallurgy","Networking",
                      "Operations Management","Petrochemicals","Physics","Polymer Science & Tech","Productions","Psychology",
                      "Public Administration","Socail Work","Socialogy","Zoology","Electrical & Instrumentation","Electrical & Electronics",
                      "Petroleum","Financial Analysis","Taxation","Defence"]},
    {type: 'Diploma', courses: ["Advanced Diploma","DBM","DCA","DCE","DFM","DHRM",
                                "Dip(Engg)","Dip(IT)","Dip(Mgmt)","Diploma in Architecture",
                                "Diploma in Commercial Practice","Diploma in Labour Law",
                                "Diploma in Safety","DIS","DME - Sandwich Course","DMM",
                                "DPM","DS&M","Foreign Language","G.D.C"],
                      branch: ["Accountancy","Advertising","Aeronautical","Agriculture","Automobile",
                              "Bio Chemistry","Central Excise","Chemical","Civil","Communication",
                              "Computer Science","Computer Technology","Economics","Electrical","Electronics",
                              "Geography","Hotel Management","Industrial Electronics","Industrial Security & Safety",
                              "Information Technology","Instrumentation"]},
    {type: 'Higher Secondary', courses: ["HSC or equivalent"], branch: ["No specialisation"]},
    {type: 'Secondary', courses: ["SSC or equivalent"], branch: ["No specialisation"]},
  ];
  courses:Array<any>;
  branches:Array<any>;
  StateAndCity: Array<any> = [
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
    {state: 'Tamil Nadu', cities:["Others","N.Patti","Arakkonam","Arcot","Ariyalur","Aruppukottai",
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
                                    "Theni Allinagaram","Thirumangalam","Thiruunindravur","Thiruparappu","Thirupuvanam",
                                    "Thiruthuraipoondi","Thiruvallur","Thiruvarur","Thoothukudi","Thuraiyur","Tindivanam",
                                    "Thiruchendur","Tiruchengode","Tiruchirapalli","Tirukalukundram","Tirukkoyilur","Tirunelveli",
                                    "Tirupathur","Tiruppur","Tiruttani","Tiruvannamalai","Tiruventhipuram","Udhagamandalam",
                                    "Udumalaipettai","Unnamalaikadal","Usilampatti","Uthamapalayam","Uthiramerur","Vadakkavalliyur",
                                    "Vadalur","Vadippati","Valparai","Vandavasi","Vaniyambadi","Vedaranyam","Vellakoil","Vellore",
                                    "Vikramasinapuram","Viluppuram","Virudhachalam","Virudhunagar","Viswanatham"]},
    {state: 'Telangana', cities:[""]},
    {state: 'Tripura', cities:[""]},
    {state: 'Uttar Pradesh', cities:[""]},
    {state: 'Uttarakhand', cities:[""]},
    {state: 'West Bengal', cities:[""]},
  ];
  cities:Array<any>;
  changeCity(e: any) {
    this.cities = this.StateAndCity.find(s => s.state == e.target.value).cities;
  }
  changeEducationType(e: any){
    this.courses = this.educationType.find(edu => edu.type == e.target.value).courses;
    this.branches = this.educationType.find(edu => edu.type == e.target.value).branch;
  }

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EducationForm = this.fb.group({
      type:["", Validators.required],
      degree:["", Validators.required],
      branch:["", Validators.required],
      mode:["", Validators.required],
      startDate:["", Validators.required],
      endDate:["", Validators.required],
      institution:["", Validators.required],
      state:["", Validators.required],
      city:["", Validators.required],
      percentage:["", Validators.required],
    })
  }

  save(){
    console.log("in save function");
    this.eduDetailsList.push(this.education);
    console.log(this.eduDetailsList); 
  }

}
