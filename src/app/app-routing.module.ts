import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { EducationComponent } from './education/education.component';
import { RegisterComponent } from './register/register.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path: 'personal-details', component: RegisterComponent},
  { path: 'education-details', component: EducationComponent},
  {path: 'work-experience', component: WorkExperienceComponent},
  {path: 'documents-upload',component: DocumentsUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, EducationComponent]
