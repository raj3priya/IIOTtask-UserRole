import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'personal-details', component: RegisterComponent},
  { path: 'education-details', component: EducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, EducationComponent]
