import { Component, OnInit } from '@angular/core';
import { UserPersonal } from '../model/UserPersonal';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  user =new UserPersonal();
  constructor() { }

  ngOnInit(): void {
  }

}
