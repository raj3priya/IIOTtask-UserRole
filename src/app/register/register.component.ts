import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPersonal } from '../model/UserPersonal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegForm: FormGroup;
  user =new UserPersonal();
  confirmPassword:string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('personalDetails') || '{}');
  }
  StateAndCity: Array<any> = [
    {state: 'Select State'},
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
    {state: 'Tamil Nadu', cities:["Select City","Others","N.Patti","Arakkonam","Arcot","Ariyalur","Aruppukottai",
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

  nextpage(){
    sessionStorage.setItem('personalDetails',JSON.stringify(this.user));
    this.router.navigateByUrl('/education-details');
  }

}
