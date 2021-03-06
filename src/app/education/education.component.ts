import { flatten, ThrowStmt } from '@angular/compiler';
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
  education: EducationDetails = new EducationDetails();

  secondaryEdu: EducationDetails = new EducationDetails();
  higherSecondaryEdu: EducationDetails = new EducationDetails();
  degreeEdu: EducationDetails = new EducationDetails();
  diplomaEdu: EducationDetails = new EducationDetails();

  eduDetailsList: EducationDetails[] = [];
  type: string;
  degree: string;
  //branch: string;
  //mode: string;
  state: string;
  //city: string;



  educationMode = ["Correspondence", "Full Time", "Part Time", "Others"];
  educationType: Array<any> = [
    {
      type: 'Degree', courses: ["AMIE", "Applied Arts", "B.Arch", "B.B.M", "B.Com", "B.Ed",
        "B.Pharm", "B.Sc(Engg)", "B.Sc(IT)", "B.Sc(Tech)", "B.Tech",
        "B.Tech(HONS)", "B.A", "Bachelor in Infmn Systems",
        "Bachelor of Fine Arts", "Bachelor of Mass Media", "BBA",
        "BCA", "BE", "BMS",],
      branch: ["Statistics", "Mechatronics", "Electronics & Communication",
        "Financial Accounting", "Software Enhineering", "Computer Engineering",
        "Computer Science & Engineering", "Construction Engineering", "Digital Electronics",
        "ELectronics & Instrumentation", "Electronics & Radio Engineering", "Instrument Technology",
        "Instrumentation & Control", "Accountancy", "Advertising", "Aeronautical", "Agriculture",
        "Arts", "Automobile", "Bio Chemistry", "Bio medical", "Biology", "Botany", "Business Administration",
        "Business Management", "Chemical", "Civil", "Commerce", "Communication", "Computer Application",
        "Computer Science", "Computer Technology", "Economics", "Electrical", "Electronics", "Energy",
        "Foreign Trade", "Genearl Medicine", "Geo Physics", "Geography", "Geology", "History", "Home Science",
        "Hotel Management", "Industrial Business", "Industrial Electronics", "Industrial Management",
        "Information Technology", "Inorganic Chemistry", "Instrumentation", "Journalism", "Literature",
        "Management Studies", "Marketing", "Mass Communication", "Maths", "Mechanical", "Metallurgy", "Networking",
        "Operations Management", "Petrochemicals", "Physics", "Polymer Science & Tech", "Productions", "Psychology",
        "Public Administration", "Socail Work", "Socialogy", "Zoology", "Electrical & Instrumentation", "Electrical & Electronics",
        "Petroleum", "Financial Analysis", "Taxation", "Defence"]
    },
    {
      type: 'Diploma', courses: ["Advanced Diploma", "DBM", "DCA", "DCE", "DFM", "DHRM",
        "Dip(Engg)", "Dip(IT)", "Dip(Mgmt)", "Diploma in Architecture",
        "Diploma in Commercial Practice", "Diploma in Labour Law",
        "Diploma in Safety", "DIS", "DME - Sandwich Course", "DMM",
        "DPM", "DS&M", "Foreign Language", "G.D.C"],
      branch: ["Accountancy", "Advertising", "Aeronautical", "Agriculture", "Automobile",
        "Bio Chemistry", "Central Excise", "Chemical", "Civil", "Communication",
        "Computer Science", "Computer Technology", "Economics", "Electrical", "Electronics",
        "Geography", "Hotel Management", "Industrial Electronics", "Industrial Security & Safety",
        "Information Technology", "Instrumentation"]
    },
    { type: 'HigherSecondary', courses: ["HSC or equivalent"], branch: ["No specialisation"] },
    { type: 'Secondary', courses: ["SSC or equivalent"], branch: ["No specialisation"] },
  ];
  courses: Array<any>;
  branches: Array<any>;
  StateAndCity: Array<any> = [
    { state: 'Andaman & Nicobar Islands', cities: [""] },
    { state: 'Andhra Pradesh', cities: [""] },
    { state: 'Arunachal Pradesh', cities: [""] },
    { state: 'Assam', cities: [""] },
    { state: 'Bihar', cities: [""] },
    { state: 'Chandigarh', cities: [""] },
    { state: 'Chhattisgarh', cities: [""] },
    { state: 'Dadra & Nagar Haveli', cities: [""] },
    { state: 'Daman & Diu', cities: [""] },
    { state: 'Delhi', cities: [""] },
    { state: 'Goa', cities: [""] },
    { state: 'Gujarat', cities: [""] },
    { state: 'Haryana', cities: [""] },
    { state: 'Himachal Pradesh', cities: [""] },
    { state: 'Jammu & Kashmir', cities: [""] },
    { state: 'Jharkhand', cities: [""] },
    { state: 'Karnataka', cities: [""] },
    { state: 'Kerala', cities: [""] },
    { state: 'Lakshadweep', cities: [""] },
    { state: 'Madhya Pradesh', cities: [""] },
    { state: 'Maharashtra', cities: [""] },
    { state: 'Manipur', cities: [""] },
    { state: 'Meghalaya', cities: [""] },
    { state: 'Mizoram', cities: [""] },
    { state: 'Nagaland', cities: [""] },
    { state: 'Odisha', cities: [""] },
    { state: 'Puducherry', cities: [""] },
    { state: 'Punjab', cities: [""] },
    { state: 'Rajasthan', cities: [""] },
    { state: 'Sikkim', cities: [""] },
    {
      state: 'Tamil Nadu', cities: ["Others", "N.Patti", "Arakkonam", "Arcot", "Ariyalur", "Aruppukottai",
        "Bhavani", "Chengalpattu", "Chennai", "Chinna salem", "Coimbatore", "Coonoor",
        "Cuddalore", "Dharmapuri", "Dindigul", "Gingee", "Gobichettipalayam", "Gudalur",
        "Jayankondam", "Kanchipuram", "Karaikudi", "Karungal", "Karur", "Kollankodu",
        "Lalgudi", "Madurai", "Nagapattinam", "Nagercoil", "Namagiripettai", "Namakkal",
        "Nandivaram-Guduvancheri", "Nanjikottai", "Natham", "Nellikuppam", "Neyveli",
        "O' Valley", "Oddanchatram", "Pacode", "Padmanabhapuarm", "Palani", "Palladam",
        "Pallikonda", "Panagudi", "Panruti", "Paramakudi", "Parangettai", "Pattakkottai",
        "Perambalur", "Peravurani", "Periyakulam", "Periyasemur", "Pernampattu", "Pollachi",
        "Polur", "Ponneri", "Pudukkottai", "Pudupattinam", "Puliyankudi", "Punjaipugalur",
        "Rajapalayam", "Ramanathapuram", "Rameshwaram", "Ranipet", "Rasipuram", "Salem",
        "Sankarankoil", "Sankari", "Sathyamangalam", "Sattur", "Shenkottai", "Sholavandan",
        "Sholingur", "Sirkali", "Sivaganga", "Sivagiri", "Sivakasi", "Srivilliputtur", "Surandai",
        "Suriyampalayam", "Tenkasi", "Thammampatti", "Thanjavur", "Tharamangalam", "Tharangambadi",
        "Theni Allinagaram", "Thirumangalam", "Thiruunindravur", "Thiruparappu", "Thirupuvanam",
        "Thiruthuraipoondi", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Thuraiyur", "Tindivanam",
        "Thiruchendur", "Tiruchengode", "Tiruchirapalli", "Tirukalukundram", "Tirukkoyilur", "Tirunelveli",
        "Tirupathur", "Tiruppur", "Tiruttani", "Tiruvannamalai", "Tiruventhipuram", "Udhagamandalam",
        "Udumalaipettai", "Unnamalaikadal", "Usilampatti", "Uthamapalayam", "Uthiramerur", "Vadakkavalliyur",
        "Vadalur", "Vadippati", "Valparai", "Vandavasi", "Vaniyambadi", "Vedaranyam", "Vellakoil", "Vellore",
        "Vikramasinapuram", "Viluppuram", "Virudhachalam", "Virudhunagar", "Viswanatham"]
    },
    { state: 'Telangana', cities: [""] },
    { state: 'Tripura', cities: [""] },
    { state: 'Uttar Pradesh', cities: [""] },
    { state: 'Uttarakhand', cities: [""] },
    { state: 'West Bengal', cities: [""] },
  ];
  cities: Array<any>;
  change: boolean = false;
  modes:Array<any>;
  states:Array<any>;
  selectedCity:Array<any>;
  changeCityBool:boolean=false;


  changeCity(e: any) {
    console.log(e)
    
    this.changeCityBool=false;
    this.cities = this.StateAndCity.find(s => s.state == e.target.value).cities;
  }
  changeEducationType(e: any) {
    
    
    //this will give array of the filtered object Now
    if (this.eduDetailsList.length != 0) {
      var check = this.eduDetailsList.find((ch) => ch.type == e.target.value)
      console.log(check,"check")
      if (check) {
        this.changeCityBool=true;
        this.change = true
        var Type = this.educationType.filter((ed) => ed.type == e.target.value);
        var course = (Type.find(edu => edu.type == e.target.value).courses)
        this.courses = course.filter((c: any) => c !== check?.degree)
        this.courses.unshift(check?.degree)
        var branchvar=(Type.find(edu => edu.type ==e.target.value).branch)
        this.branches=branchvar.filter((b:any) => b !==check?.branch)
        this.branches.unshift(check?.branch)
        this.modes=this.educationMode.filter((e:any) => e !==check?.mode)
        this.modes.unshift(check?.mode);

        
        var temp=this.StateAndCity.find((s)=> s.state==check?.state)
        console.log(temp,"temp")
        this.StateAndCity=this.StateAndCity.filter((s) =>s.state !==check?.state)
        this.StateAndCity.unshift(temp);
        console.log(this.StateAndCity,"statecity")
        this.states=this.StateAndCity.map((m)=>m.state)
        console.log(this.states,"statesvonly");

        this.selectedCity=this.StateAndCity[0].cities;
        var selCity=this.selectedCity.find((ct)=>ct==check?.city)
        this.selectedCity.filter((ct)=>ct !==check?.city)
        this.selectedCity.unshift(selCity)

        this.education.startDate=check?.startDate
        this.education.endDate=check?.endDate
        this.education.institution=check?.institution
        this.education.percentage=check?.percentage

        
        // var statetype=this.StateAndCity.filter((st) => st.state ==check?.state);
        // var city=(statetype.find(ct => ct.state==check?.city).cities)
        // this.cities=city.filter((c:any) =>c !==check?.city)
        // this.cities.unshift(check?.city)

        
      }
      else {
        this.change = false;
        this.changeCityBool=false;
        this.courses = this.educationType.find(edu => edu.type == e.target.value).courses;
        this.branches = this.educationType.find(edu => edu.type == e.target.value).branch;
        this.modes=this.educationMode;
        this.states=this.StateAndCity.find(st =>st.state);
        console.log(this.states);
        //this.cities=this.StateAndCity.find(st =>st.state ==e.target.value).cities;

        this.education = new EducationDetails();
        this.education.startDate=new Date("yyyy-mm-dd");
        //document.getElementById('startDate').valueAsDate=null;
        this.education.endDate=new Date();
        this.education.institution='';
        this.education.percentage=0;
        

//try once
      }

    }
    else {
      this.courses = this.educationType.find(edu => edu.type == e.target.value).courses;
      this.branches = this.educationType.find(edu => edu.type == e.target.value).branch;
      this.modes=this.educationMode;

      // this.states=this.StateAndCity.filter(st=>st.state);
      // console.log(this.states);
      // this.cities=this.StateAndCity.find(st =>st.state ==e.target.value).cities;
      
    }
    
  }

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.EducationForm = this.fb.group({
      type: ["", Validators.required],
      degree: ["", Validators.required],
      branch: ["", Validators.required],
      mode: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      institution: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      percentage: ["", Validators.compose([Validators.required, Validators.pattern('^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$')])]
    })
  }
  updated: boolean;


  save() {

    this.updated = false;
    if (this.eduDetailsList.length == 0) { // for the 1st time insertion
      this.eduDetailsList.push(this.education);
      this.updated = true;
    } else {
      if(this.education.degree === undefined)
      {
        var check=this.eduDetailsList.find((e)=>e.type== this.education.type)
        this.education.degree=check?.degree;
      
      }
      for (var i = 0; i < this.eduDetailsList.length && !this.updated; i++) {
        if (this.eduDetailsList[i].type == this.education.type) {  //if already exists, update
          this.eduDetailsList[i] = this.education;
          this.updated = true;

          break;
        }
        else {
          this.eduDetailsList.push(this.education);

          break;
        }
      }

    }
    console.log(this.eduDetailsList);
    this.education = new EducationDetails();
    this.education.type = 'undefined';
    //console.log(this.education);// to clear fields and initialise new object


  }

  nextpage() {
    sessionStorage.setItem('educationList',JSON.stringify(this.eduDetailsList));
    this.router.navigateByUrl('/work-exp');

  }

}