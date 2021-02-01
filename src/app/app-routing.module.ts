import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { EducationComponent } from './education/education.component';
import { RegisterComponent } from './register/register.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path: 'personal-details', component: RegisterComponent},
  { path: 'education-details', component: EducationComponent},
  //{path: 'work-experience', component: WorkExperienceComponent},
  {path: 'documents-upload',component: DocumentsUploadComponent},
  {path: 'admin-view',component: AdminViewComponent},
  {path: 'work-exp',component: WorkExperienceComponent},
  {path: 'confirm-details', component:ConfirmDetailsComponent},
  {path: 'admin-login', component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, EducationComponent]
