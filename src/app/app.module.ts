import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EducationComponent } from './education/education.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


@NgModule({
  declarations: [
    
    AppComponent,
    RegisterComponent,
    EducationComponent,
    DocumentsUploadComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
